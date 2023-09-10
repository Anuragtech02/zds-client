<script lang="ts">
	import SocialShareIcons from './SocialShareIcons.svelte';
	import Logo from './Logo.svelte';
	import NavLinks from '$lib/components/Header/NavLinks/NavLinks.svelte';
</script>

<footer class="py-[100px]">
	<div class="max-width-container w-full">
		<div class="flex flex-row justify-between items-center">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" />
			<NavLinks />
			<SocialShareIcons />
		</div>
		<hr class="w-full bg-white mt-8" />
		<p class="mt-8">© 2023 Zero Design Studio. All rights reserved.</p>
	</div>
</footer>
