<script lang="ts">
	import NavLink from './NavLink.svelte';
	export let className: string = '';
</script>

<nav
	class={`flex items-center justify-start mt-8 md:mt-0 sm:justify-between lg:justify-center flex-wrap gap-10 lg:gap-4 xl:gap-8 ${className}`}
>
	<NavLink url="/" active={true}>Home</NavLink>
	<NavLink url="/work">Work</NavLink>
	<NavLink url="/about">About</NavLink>
	<NavLink url="/services">Our Services</NavLink>
	<NavLink url="/contact">Contact Us</NavLink>
</nav>
