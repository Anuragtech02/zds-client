<script lang="ts">
	import { getImageUrl, sanitizeStructuredData } from '$lib/utils/functions';
	import { onMount } from 'svelte';

	type TSEO = {
		title?: string;
		url?: string;
		description?: string;
		image?: any;
		canonicalURL?: string;
		metaSocial?: Array<{
			socialNetwork: string;
			title: string;
			url: string;
			description: string;
			image: string;
		}>;
		metaViewport?: string;
		metaRobots?: string;
		structuredData?: object;
		keywords?: string;
		extraScripts?: Array<{
			id: number;
			script: string;
		}>;
	};

	export let seo: TSEO = {
		title: 'Zero Design Studio',
		url: '',
		description:
			'We are a creative studio based in New York City. We specialize in design, development, and strategy.',
		image: 'https://zezrodesignstudios.com/logo.png',
		canonicalURL: 'https://zerodesignstudios.com/',
		metaSocial: [
			{
				socialNetwork: 'Facebook',
				title: 'Zero Design Studio',
				url: '',
				description:
					'We are a creative studio based in New York City. We specialize in design, development, and strategy.',
				image: 'https://zezrodesignstudios.com/logo.png'
			},
			{
				socialNetwork: 'Twitter',
				title: 'Zero Design Studio',
				url: '',
				description:
					'We are a creative studio based in New York City. We specialize in design, development, and strategy.',
				image: 'https://zezrodesignstudios.com/logo.png'
			}
		],
		structuredData: {
			'@context': 'http://schema.org',
			'@type': 'Organization',
			name: 'Zero Design Studio',
			url: 'https://zerodesignstudios.com/',
			sameAs: [
				'https://www.facebook.com/zerodesignstudios/',
				'https://www.instagram.com/zerodesignstudios/',
				'https://www.linkedin.com/company/zero-design-studio/',
				'https://twitter.com/zerodesignstudio'
			],
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'A - 203, Knox Plaza, off Link Road Mindspace, Chincholi Bunder, Malad West',
				addressLocality: 'Malad West',
				addressRegion: 'Mumbai',
				postalCode: '400064',
				addressCountry: 'India'
			},
			contactPoint: {
				'@type': 'ContactPoint',
				contactType: 'Contact',
				telephone: '+919977098856',
				email: 'info@zerodesignstudios.com'
			}
		},
		keywords:
			'Zero Design Studio, Zero Studio, Zero, Design, Studio, New York, NYC, New York City, Web Design, Web Development, Web, Development, Design, Strategy, Creative, Creative Studio, Creative Agency, Agency,'
	};

	let title: string = 'Zero Design Studio';
	let url: string = '';
	let description: string =
		'We are a creative studio based in New York City. We specialize in design, development, and strategy.';
	let image: string = 'https://zezrodesignstudios.com/logo.png';
	let viewport: string = 'width=device-width, initial-scale=1.0';
	let robots: string = 'index, follow';
	let extraScripts: Array<{
		id: number;
		script: string;
	}> = [];

	let socials = {
		facebook: {
			title: 'Zero Design Studio',
			url: '',
			description:
				'We are a creative studio based in New York City. We specialize in design, development, and strategy.',
			image: 'https://zezrodesignstudios.com/logo.png'
		},
		twitter: {
			title: 'Zero Design Studio',
			url: '',
			description:
				'We are a creative studio based in New York City. We specialize in design, development, and strategy.',
			image: 'https://zezrodesignstudios.com/logo.png'
		}
	};

	let stringifiedData = '';

	let keywords: string =
		'Zero Design Studio, Zero Studio, Zero, Design, Studio, New York, NYC, New York City, Web Design, Web Development, Web, Development, Design, Strategy, Creative, Creative Studio, Creative Agency, Agency,';

	try {
		if (seo.title) {
			title = seo.title;
		}
		if (seo.url) {
			url = seo.url;
		}
		if (seo.description) {
			description = seo.description;
		}
		if (seo.image) {
			image = getImageUrl(seo.image);
		}
		if (seo.canonicalURL) {
			url = seo.canonicalURL;
		}
		if (seo.metaViewport) {
			viewport = seo.metaViewport;
		}
		if (seo.metaRobots) {
			robots = seo.metaRobots;
		}
		if (seo.metaSocial) {
			seo.metaSocial?.forEach((social) => {
				if (social.socialNetwork === 'Facebook') {
					socials.facebook = {
						title: social.title,
						url: social.url,
						description: social.description,
						image: getImageUrl(social.image)
					};
				}
				if (social.socialNetwork === 'Twitter') {
					socials.twitter = {
						title: social.title,
						url: social.url,
						description: social.description,
						image: getImageUrl(social.image)
					};
				}
			});
		}
		if (seo.structuredData && Object.values(seo.structuredData).length) {
			stringifiedData = JSON.stringify(seo.structuredData);
		}
		if (seo.keywords) {
			keywords = seo.keywords;
		}
		if (seo.extraScripts) {
			extraScripts = seo.extraScripts;
		}
	} catch (error) {
		console.log('Failed to fetch seo metadadta', error);
	}

	onMount(() => {
		console.log({ seo, socials });
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="viewport" content={viewport} />
	<meta name="robots" content={robots} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={socials.facebook.url} />
	<meta property="og:title" content={socials.facebook.title} />
	<meta property="og:description" content={socials.facebook.description} />
	<meta property="og:image" content={socials.facebook.image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={socials.twitter.url} />
	<meta property="twitter:title" content={socials.twitter.title} />
	<meta property="twitter:description" content={socials.twitter.description} />
	<meta property="twitter:image" content={socials.twitter.image} />

	<link rel="canonical" href={url} />
	{@html sanitizeStructuredData(stringifiedData)}
	{#if extraScripts?.length}
		{#each extraScripts as scriptObj}
			{@html scriptObj.script}
		{/each}
	{/if}
</svelte:head>
