<script lang="ts">
	import NavLink from './NavLink.svelte';
	export let className: string = '';
</script>

<nav class={`flex items-center gap-8 ${className}`}>
	<NavLink url="/" active={true}>Home</NavLink>
	<NavLink url="/work">Work</NavLink>
	<NavLink url="/about">About</NavLink>
	<NavLink url="/services">Our Services</NavLink>
	<NavLink url="/contact">Contact Us</NavLink>
</nav>
