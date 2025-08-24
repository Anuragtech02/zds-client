import type { RequestHandler } from '@sveltejs/kit';

// Minimal declaration for optional Node env during local dev.
declare const process: { env?: Record<string, string | undefined> } | undefined;

interface ManualPurgeBody {
	secret?: string;
	files?: string[];
	tags?: string[];
}
interface StrapiEntry {
	id?: number | string;
	slug?: string;
	[k: string]: unknown;
}
interface StrapiPayload {
	event?: string;
	model?: string;
	entry?: StrapiEntry;
	[k: string]: unknown;
}

type IncomingBody = ManualPurgeBody | (ManualPurgeBody & StrapiPayload);

const json = (status: number, data: unknown) =>
	new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
	});

function unique<T>(arr: (T | undefined | null)[]): T[] {
	return Array.from(new Set(arr.filter(Boolean) as T[]));
}

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const env =
			(platform as unknown as { env?: Record<string, string> })?.env || process?.env || {};

		const required = ['REVALIDATE_SECRET', 'CLOUDFLARE_ZONE_ID', 'CLOUDFLARE_API_TOKEN'] as const;
		for (const key of required) {
			if (!env[key]) return json(500, { ok: false, error: `Missing env ${key}` });
		}

		// Accept header or body secret
		const headerSecret =
			request.headers.get('x-webhook-secret') || request.headers.get('X-Webhook-Secret');
		const body: IncomingBody = await request.json().catch(() => ({}));
		const providedSecret = body.secret || headerSecret;
		if (!providedSecret || providedSecret !== env.REVALIDATE_SECRET) {
			return json(401, { ok: false, error: 'Unauthorized' });
		}

		const isStrapi = !!(body as StrapiPayload).entry || !!(body as StrapiPayload).event;

		let files: string[] = Array.isArray((body as ManualPurgeBody).files)
			? (body as ManualPurgeBody).files || []
			: [];
		let tags: string[] = Array.isArray((body as ManualPurgeBody).tags)
			? (body as ManualPurgeBody).tags || []
			: [];

		const origin = env.SITE_BASE_URL?.replace(/\/$/, '') || new URL(request.url).origin;

		if (isStrapi) {
			const payload = body as StrapiPayload;
			const model = payload.model || '';
			const entry = payload.entry || {};
			const slug = (entry as StrapiEntry).slug;
			const id = entry.id;

			// Build tags
			if (model) tags.push(`ct-${model}`);
			if (id !== undefined) tags.push(`id-${id}`);

			// Derive URL patterns per model
			const add = (u?: string) => {
				if (u) files.push(u);
			};
			const listing = (path: string) => add(`${origin}${path}`);

			const addEntry = (base: string) => {
				if (slug) add(`${origin}${base}/${slug}`);
				listing(base);
			};

			// Adjust for actual routes present in the project: /blogs, /services, /works etc.
			if (/blog/.test(model)) addEntry('/blogs');
			if (/service/.test(model)) addEntry('/services');
			if (/work/.test(model)) addEntry('/works');

			// Generic fallback if no model-specific pattern matched
			if (files.length === 0) listing('/');
			tags.push('global');
		}

		files = unique(files);
		tags = unique(tags);

		if (files.length === 0 && tags.length === 0) {
			return json(400, {
				ok: false,
				error: 'Nothing to purge: supply files/tags or ensure Strapi payload contains entry/model.'
			});
		}

		// Cloudflare API body
		const purgePayload: Record<string, unknown> = {};
		if (files.length) purgePayload.files = files.slice(0, 30); // CF limit safeguard
		if (tags.length) purgePayload.tags = tags;

		const resp = await fetch(
			`https://api.cloudflare.com/client/v4/zones/${env.CLOUDFLARE_ZONE_ID}/purge_cache`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(purgePayload)
			}
		);

		const data = await resp.json().catch(() => ({}));
		if (!resp.ok || data.success === false) {
			return json(502, {
				ok: false,
				error: 'Cloudflare purge failed',
				details: data.errors || data
			});
		}

		return json(200, {
			ok: true,
			purged: purgePayload,
			strapi: isStrapi,
			limited: files.length > 30
		});
	} catch (e) {
		const message = e instanceof Error ? e.message : 'Unknown error';
		return json(500, { ok: false, error: message });
	}
};
