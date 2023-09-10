<script lang="ts">
	import Logo from '../Logo.svelte';
	import MetaverseButton from '../Marketplace.svelte';
	import HamburgerMenu from './HamburgerMenu.svelte';
	import NavLink from './NavLinks/NavLink.svelte';
	import NavLinks from './NavLinks/NavLinks.svelte';
	import Searchbar from './Searchbar.svelte';
</script>

<header class="w-full bg-bg-300 backdrop-blur-xl">
	<div class="max-width-container">
		<div class="flex justify-between items-center py-4">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" />
			<div class="flex items-center gap-8">
				<div class="hidden md:flex items-center gap-8">
					<Searchbar />
					<NavLinks />
					<MetaverseButton />
				</div>

				<div class="block sm:hidden">
					<HamburgerMenu />
				</div>
			</div>
		</div>
	</div>
</header>
