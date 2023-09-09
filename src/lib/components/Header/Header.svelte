<script lang="ts">
	import Logo from '../Logo.svelte';
	import MetaverseButton from '../Marketplace.svelte';
	import HamburgerMenu from './HamburgerMenu.svelte';
	import NavLink from './NavLink.svelte';
	import Searchbar from './Searchbar.svelte';
</script>

<header class="w-full bg-bg-300 backdrop-blur-xl">
	<div class="max-width-container">
		<div class="flex justify-between items-center py-4">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" />
			<nav class="flex items-center gap-8">
				<Searchbar />
				<div class="hidden md:flex items-center gap-8">
					<NavLink url="/" active={true}>Home</NavLink>
					<NavLink url="/work">Work</NavLink>
					<NavLink url="/about">About</NavLink>
					<NavLink url="/services">Our Services</NavLink>
					<NavLink url="/contact">Contact Us</NavLink>
					<MetaverseButton />
				</div>
				<div class="block sm:hidden">
					<HamburgerMenu />
				</div>
			</nav>
		</div>
	</div>
</header>
