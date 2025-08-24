# Zero Design Studio Client

SvelteKit site configured for Cloudflare Pages deployment with Strapi CMS content and dynamic cache purge support.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Cloudflare Pages Deployment

Adapter: `@sveltejs/adapter-cloudflare@2.3.3` (SvelteKit 1.x compatible).

Pages settings:
- Build command: `npm run build`
- Output directory: `.svelte-kit/cloudflare`
- Node version: 18 (see `.nvmrc`)

Optional (Wrangler local dev) `wrangler.toml`:

```toml
name = "zds-client"
main = ".svelte-kit/cloudflare/_worker.js"
compatibility_date = "2025-08-24"
```

## Strapi Content & Cache Purge

After publishing or updating entries in Strapi, Cloudflare may still serve cached HTML/JSON. A purge endpoint is provided:

Endpoint: `POST /api/purge`

Request body:
```json
{
	"secret": "<REVALIDATE_SECRET>",
	"files": ["https://your-domain.com/blogs/some-slug"],
	"tags": ["blog-123", "global"]
}
```
At least one of `files` or `tags` is required.

Environment variables (configure in Cloudflare Pages project settings):
- `REVALIDATE_SECRET` – shared secret used by Strapi webhook
- `CLOUDFLARE_ZONE_ID` – target zone id (for custom domain)
- `CLOUDFLARE_API_TOKEN` – token with Zone.Cache Purge permissions

### Strapi Webhook Setup
Create a webhook in Strapi (Settings > Webhooks):
- URL: `https://your-domain.com/api/purge`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body template example:
```json
{
	"secret": "<REVALIDATE_SECRET>",
	"files": ["https://your-domain.com/blogs/{{ entry.slug }}"],
	"tags": ["blog-{{ entry.id }}", "global"]
}
```

### Cache Tagging (optional)
Add cache tags in SvelteKit load functions or endpoints:
```ts
setHeaders({ 'Cache-Tag': `blog-${post.id},global` });
```
Then purge via `tags` instead of enumerating URLs.

### Fallback / Local Testing
Locally (dev server) the purge endpoint falls back to `process.env` for variables so you can test with a local `.env` file.

## Accessibility & Lint Warnings
The build logs may show Svelte a11y warnings (e.g. clickable <div>). Convert these to semantic buttons/links for improved accessibility.

## Scripts
Common scripts are in `package.json`. Use `npm run check` for type and Svelte checks.

## License
Proprietary – internal project (adjust if needed).
