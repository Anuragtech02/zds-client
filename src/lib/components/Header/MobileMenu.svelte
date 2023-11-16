<script lang="ts">
	import MarketplaceButton from '../MarketplaceButton.svelte';
	import { gsap } from 'gsap';

	export let data: any;
	export let open: boolean = true;
	let circleSvg: SVGSVGElement;
	const { links, showMarketplaceButton, showSearchBar } = data;
</script>

<div
	class="fixed flex flex-col justify-center items-center top-0 left-0 h-screen w-screen z-[99999]"
>
	<svg bind:this={circleSvg} width="100" height="100">
		<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
	</svg>
	<ul class="">
		{#each links as link}
			<li>
				<a href={link.url}>{link.title}</a>
			</li>
		{/each}
		{#if showMarketplaceButton}
			<li>
				<MarketplaceButton />
			</li>
		{/if}
	</ul>
</div>
