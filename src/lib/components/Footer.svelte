<script lang="ts">
	import SocialShareIcons from './SocialShareIcons.svelte';
	import Logo from './Logo.svelte';
	import NavLinks from '$lib/components/Header/NavLinks/NavLinks.svelte';
	import { NAV_LINKS } from '$lib/utils/contants';
	export let data;
	export let links;
	export let showMarketplaceButton;

	console.log({ data });
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
</script>

<footer class="py-[100px]">
	<div class="max-width-container">
		<div class="flex flex-row justify-between items-center">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" />
			<div class="hidden lg:block">
				<NavLinks links={footerNavLinks} />
			</div>
			<!-- <SocialShareIcons /> -->
		</div>
		<div class="block lg:hidden mt-8">
			<NavLinks links={footerNavLinks} />
		</div>
		<hr class="w-full bg-[#8D8D8D] mt-8" />
		<div class="flex justify-between items-center flex-wrap">
			<p class="mt-8">{copywrightText}</p>
			<div class="flex flex-row justify-start mt-8 items-start gap-6">
				<p class="font-semibold min-w-fit">Locations :</p>
				<div class=" gap-4 flex justify-start items-center flex-wrap">
					{#each locations as location}
						<p class="font-semibold">{location?.attributes?.Name}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
