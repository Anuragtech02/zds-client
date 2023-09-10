<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_LINKS } from '$lib/utils/contants';
	import NavLink from './NavLink.svelte';
	export let className: string = '';
	export let links: Array<{
		name: string;
		url: string;
	}> = NAV_LINKS;
	let activeLink = '/';

	$: activeLink = $page.url.pathname;
</script>

<nav
	class={`flex items-center justify-start mt-8 md:mt-0 sm:justify-between lg:justify-center flex-wrap gap-10 lg:gap-4 xl:gap-8 ${className}`}
>
	{#each links as { name, url }}
		<NavLink {url} active={url === activeLink}>{name}</NavLink>
	{/each}
</nav>
