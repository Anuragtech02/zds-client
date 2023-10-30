<script lang="ts">
	import SocialShareIcons from './SocialShareIcons.svelte';
	import Logo from './Logo.svelte';
	import NavLinks from '$lib/components/Header/NavLinks/NavLinks.svelte';
	import { NAV_LINKS } from '$lib/utils/contants';

	const footerNavLinks = [
		...NAV_LINKS,
		{
			name: 'Marketplace',
			url: '/marketplace'
		}
	];
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
			<p class="mt-8">&copy; 2023 Zero Design Studio. All rights reserved.</p>
			<div class="mt-8 gap-4 flex justify-around items-center flex-wrap">
				<p class="font-semibold">Locations :</p>
				<p>Delhi</p>
				<p>Mumbai</p>
				<p>Banglore</p>
				<p>Dubai</p>
				<p>Toronto</p>
			</div>
		</div>
	</div>
</footer>
