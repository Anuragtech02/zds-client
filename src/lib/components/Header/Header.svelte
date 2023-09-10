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
			<div class="flex items-center">
				<div class="nav-container items-center md:gap-4 xl:gap-8">
					<Searchbar />
					<NavLinks />
					<MetaverseButton />
				</div>

				<div class="burger-menu">
					<HamburgerMenu />
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.nav-container {
		display: flex;
	}
	.burger-menu {
		display: none;
	}
	@media screen and (max-width: 1100px) {
		.nav-container {
			display: none;
		}
		.burger-menu {
			display: block;
		}
	}
</style>
