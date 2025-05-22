<script lang="ts">
	import Logo from './Logo.svelte';
	import NavLinks from '$lib/components/Header/NavLinks/NavLinks.svelte';
	import NavLink from './Header/NavLinks/NavLink.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

	export let data;
	export let links;
	export let showMarketplaceButton;

	const { copywrightText } = data;
	let locations = data?.locations?.data;
	const nav_links = links.map((l: any) => ({
		name: l.title,
		url: l.url
	}));

	const footerNavLinks = [...nav_links];
	if (showMarketplaceButton) {
		footerNavLinks.push({
			name: 'Marketplace',
			url: '/marketplace'
		});
	}
	footerNavLinks.push({
		name: 'Anamorphic 3D',
		url: '/anamorphic-3d-content-agency'
	});

	const services = [
		{
			name: 'Content Creation',
			slug: 'multimedia-productions'
		},
		{
			name: 'Experience Design',
			slug: 'event-experiences'
		},
		{
			name: 'Experiential Marketing',
			slug: 'digital-art-and-new-media'
		},
		{
			name: 'Multimedia Production',
			slug: 'entertainment-technology'
		}
	];

	function slugifySnakeCase(str: string): string {
		return str.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
	}
</script>

<footer class="bg-black text-white py-16">
	<SectionLayout className="!py-0">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
			<!-- Logo and Description -->
			<div class="flex flex-col items-start gap-6">
				<a href="/">
					<Logo title="ZERO" subTitle="DESIGN STUDIO" />
				</a>
				<p class="text-sm text-left max-w-[250px]">{copywrightText}</p>
			</div>

			<!-- Quick Links -->
			<div class="flex flex-col items-start gap-4">
				<h3 class="text-sm">QUICK LINKS</h3>
				<div class="footer-nav">
					{#each footerNavLinks as { name, url }}
						<NavLink {url}>{name}</NavLink>
					{/each}
				</div>
			</div>

			<!-- Services -->
			<div class="flex flex-col items-start gap-4">
				<h3 class="text-sm">SERVICES</h3>
				<div class="flex flex-col items-start gap-3">
					{#each services as service}
						<a href="/services/{service.slug}" class="hover:opacity-70 transition-opacity">
							{service.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Locations -->
			<div class="flex flex-col items-start gap-4">
				<h3 class="text-sm">LOCATIONS</h3>
				<div class="flex flex-col gap-3">
					{#each locations as location}
						<a
							href={`/works?location=${slugifySnakeCase(location?.attributes?.Name.toLowerCase())}`}
							class="hover:opacity-70 transition-opacity"
						>
							{location?.attributes?.Name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</SectionLayout>
</footer>

<style>
	/* Override any center alignment from NavLinks component */
	:global(.footer-nav a) {
		text-align: left !important;
		padding: 0 !important;
		margin: 0 !important;
	}

	:global(.footer-nav) {
		display: flex !important;
		flex-direction: column !important;
		align-items: flex-start !important;
		gap: 0.75rem !important;
	}
</style>
