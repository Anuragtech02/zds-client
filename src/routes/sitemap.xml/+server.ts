import { getAllWorks, getAllBlogs, getAllServices, getAllSolutions, getAllLocationPages } from '$lib/utils/functions';
import type { RequestHandler } from './$types';

const website = 'https://www.zerodesignstudios.com';

interface SitemapItem {
	attributes: {
		slug: string;
		isPrivate?: boolean;
	};
	isPrivate?: boolean;
}

interface LocationPageItem {
	attributes: {
		slug: string;
		location: string;
		isPrivate?: boolean;
	};
	isPrivate?: boolean;
}

export const GET: RequestHandler = async ({ setHeaders }) => {
	const works = await getAllWorks();
	const blogs = await getAllBlogs();
	const services = await getAllServices();
	const solutions = await getAllSolutions();
	const locationPages = await getAllLocationPages();
	const pages = ['about', 'work', 'blogs', 'contact', 'solutions'];
	const body = sitemap(works, services, blogs, solutions, locationPages, pages);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	setHeaders(headers);
	return new Response(body);
};

const sitemap = (
	works: SitemapItem[],
	services: SitemapItem[],
	blogs: SitemapItem[] | null,
	solutions: SitemapItem[] | null,
	locationPages: LocationPageItem[] | null,
	pages: string[]
): string => `<?xml version="1.0" encoding="UTF-8" ?>
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
  ${
		solutions
			? solutions
					?.map((solution) =>
						solution.isPrivate
							? null
							: `
  <url>
    <loc>${website}/solutions/${solution?.attributes.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
					)
					.join('')
			: ''
	}
  ${
		locationPages
			? locationPages
					?.map((page) =>
						page.isPrivate
							? null
							: `
  <url>
    <loc>${website}/${page?.attributes.location}/${page?.attributes.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
					)
					.join('')
			: ''
	}
</urlset>`;
