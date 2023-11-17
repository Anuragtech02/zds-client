<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '../Logo.svelte';
	import MetaverseButton from '../MarketplaceButton.svelte';
	import HamburgerMenu from './HamburgerMenu.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavLink from './NavLinks/NavLink.svelte';
	import NavLinks from './NavLinks/NavLinks.svelte';
	import Searchbar from './Searchbar.svelte';

	let header: HTMLElement;
	export let data: any;
	const { links, showMarketplaceButton, showSearchBar } = data;
	// hide on scroll down
	let lastScroll = 0;
	const hideOnScroll = () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			header.style.transform = 'translateY(0)';
			return;
		}

		if (currentScroll > lastScroll) {
			header.style.transform = 'translateY(-100%)';
		} else {
			header.style.transform = 'translateY(0)';
		}
		lastScroll = currentScroll;
	};

	function navigateToHome() {
		goto('/');
	}
	let NAV_LINKS = links.map((l: any) => ({ name: l.title, url: l.url }));
</script>

<svelte:window
	on:scroll={() => {
		hideOnScroll();
	}}
/>
<header
	bind:this={header}
	class="header fixed top-0 left-0 w-full bg-bg-300 backdrop-blur-xl z-[100]"
>
	<div class="max-width-container">
		<div class="flex justify-between items-center py-4">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" on:click={navigateToHome} />
			<div class="flex items-center">
				<div class="nav-container items-center md:gap-4 xl:gap-8">
					{#if showSearchBar}
						<Searchbar />
					{/if}
					<NavLinks links={NAV_LINKS} />
					{#if showMarketplaceButton}
						<MetaverseButton />
					{/if}
				</div>

				<div class="burger-menu">
					<HamburgerMenu />
				</div>
			</div>
		</div>
	</div>
</header>
<MobileMenu {data} />

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
	.header {
		transition: transform 0.3s ease-in-out;
	}
</style>
