import { getAllWorks, getAllBlogs, getAllServices } from '$lib/utils/functions';

const website = 'https://zerodesignstudios.com';

/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }: any) {
	const works = await getAllWorks();
	const blogs = await getAllBlogs();
	const services = await getAllServices();
	const pages = [`about`, `work`, `blogs`, 'contact'];
	const body = sitemap(works, services, blogs, pages);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	setHeaders(headers);
	return new Response(body);
}

const sitemap = (works, services, blogs, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${website}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${works
		.map((post) =>
			post.attributes.isPrivate
				? null
				: `
  <url>
    <loc>${website}/works/${post?.attributes.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
        ${services
					.map((post) =>
						post.isPrivate
							? null
							: `
      <url>
        <loc>${website}/services/${post?.attributes.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
					)
					.join('')}

            ${
							blogs
								? blogs
										?.map((post) =>
											post.isPrivate
												? null
												: `
          <url>
            <loc>${website}/blogs/${post?.attributes.slug}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
          `
										)
										.join('')
								: ''
						}
</urlset>`;
