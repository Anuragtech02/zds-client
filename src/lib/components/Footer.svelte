<script lang="ts">
	import NavLink from './Header/NavLink.svelte';
	import IconContainer from './IconContainer.svelte';
	import Logo from './Logo.svelte';
</script>

<main>
	<div class="flex flex-row justify-between items-center">
		<Logo title="ZERO" subTitle="DESIGN STUDIO" />
		<nav class="flex items-center gap-8">
			<NavLink url="/" active={true}>Home</NavLink>
			<NavLink url="/work">Work</NavLink>
			<NavLink url="/about">About</NavLink>
			<NavLink url="/services">Our Services</NavLink>
			<NavLink url="/contact">Contact Us</NavLink>
		</nav>
		<IconContainer Facebook Instagram Youtube Vimeo />
	</div>
	<hr class="w-full bg-white mt-8" />
	<p class="mt-8">© 2023 Zero Design Studio. All rights reserved.</p>
</main>
