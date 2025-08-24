import type { RequestHandler } from '@sveltejs/kit';

// Minimal declaration to avoid depending on @types/node just for process.env during local dev.
// Cloudflare build will tree-shake this away when process is undefined.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface ProcessLike {
	env?: Record<string, string | undefined>;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const process: ProcessLike | undefined;

/**
 * POST /api/purge
 * Body: { secret: string; files?: string[]; tags?: string[] }
 * One of files or tags must be provided.
 *
 * Environment variables expected (add in Cloudflare Pages project settings):
 * - REVALIDATE_SECRET : shared secret with Strapi webhook
 * - CLOUDFLARE_ZONE_ID : your zone id (only needed for API-driven purge below)
 * - CLOUDFLARE_API_TOKEN : token with Zone.Cache Purge permissions (only needed for API-driven purge)
 *
 * If you rely only on Cloudflare cache tags (preferred), configure your Worker / responses to emit a Cache-Tag header
 * and include those tags in the purge request. This endpoint will fall back to files purge if tags not supplied.
 */

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		// Cloudflare Pages Functions provide platform.env; locally we fallback to process.env for testing.
		const runtimeEnv =
			(platform as unknown as { env?: Record<string, string> })?.env ||
			(process?.env as Record<string, string> | undefined);
		if (!runtimeEnv) {
			return new Response('Environment variables unavailable', { status: 500 });
		}
		const { secret, files, tags } = await request.json().catch(() => ({}));

		if (!secret || secret !== runtimeEnv.REVALIDATE_SECRET) {
			return new Response('Unauthorized', { status: 401 });
		}

		if ((!files || files.length === 0) && (!tags || tags.length === 0)) {
			return new Response('Provide files or tags to purge', { status: 400 });
		}

		const zoneId = runtimeEnv.CLOUDFLARE_ZONE_ID;
		const token = runtimeEnv.CLOUDFLARE_API_TOKEN;

		if (!zoneId || !token) {
			return new Response('Missing zone or token env (CLOUDFLARE_ZONE_ID / CLOUDFLARE_API_TOKEN)', {
				status: 500
			});
		}

		const body: Record<string, unknown> = {};
		if (tags && tags.length) body.tags = tags;
		if (files && files.length) body.files = files;

		const purgeRes = await fetch(
			`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			}
		);

		const data = await purgeRes.json();
		if (!purgeRes.ok || data.success === false) {
			return new Response('Purge failed: ' + JSON.stringify(data), { status: 502 });
		}

		return new Response(
			JSON.stringify({ ok: true, purged: { files: files?.length || 0, tags: tags?.length || 0 } }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (e) {
		const message = e instanceof Error ? e.message : 'Unknown error';
		return new Response('Error: ' + message, { status: 500 });
	}
};
