<script lang="ts">
	import { onMount } from 'svelte';
	import MarketplaceButton from '../MarketplaceButton.svelte';
	import { gsap } from 'gsap';
	import { menuStore } from '$lib/stores/menu.store';
	import { fly } from 'svelte/transition';

	export let data: any;
	let open: boolean = true;
	let circleSvg: SVGSVGElement;
	let circle: SVGCircleElement;
	let blurContainer: HTMLDivElement;
	const { links, showMarketplaceButton, showSearchBar } = data;

	$: open = $menuStore.isActive;

	function isActiveLink(link: string) {
		if (link === '/') {
			return window.location.pathname === link;
		}
		return window.location.href.includes(link);
	}

	function handleUpdateMenu() {
		if (open) {
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const radius = Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2));

			gsap.to(circle, {
				duration: 1, // duration in seconds
				attr: { r: radius }, // animate the radius attribute
				ease: 'power2.out' // easing function
			});
			gsap.to(blurContainer, {
				duration: 1 // duration in seconds
			});
		} else {
			gsap.to(circle, {
				duration: 1, // duration in seconds
				attr: { r: 0 }, // animate the radius attribute
				ease: 'power2.out' // easing function
			});
		}
	}

	$: open && window && handleUpdateMenu();
	// });
</script>

<div class="fixed flex flex-col justify-center items-center top-0 left-0 h-screen w-screen z-[99]">
	<div
		bind:this={blurContainer}
		class="absolute w-full h-full backdrop-blur transition-all ease-in-out duration-400 z-1"
		class:bottom-0={open === true}
		class:left-0={open === true}
		class:bottom-full={open === false}
		class:left-full={open === false}
	/>
	<svg
		bind:this={circleSvg}
		class="absolute right-0 top-0 w-full h-full transition-all ease-in-out duration-100 z-2"
	>
		<circle bind:this={circle} class="fill-black/20" cx="100%" cy="0" r="40" stroke-width="3" />
	</svg>
	{#if open}
		{#key open}
			<ul
				class="flex flex-col justify-start items-start z-[99] transition-opacity duration-300 ease-in-out"
			>
				{#each links as link, i}
					<li
						in:fly={{ y: 200, duration: 300, delay: i * 0.2 }}
						class="text-[3rem] md:text-[3rem] my-6"
						on:click={() => ($menuStore.isActive = false)}
					>
						<a
							class="text-[2rem] md:text-[3rem] font-semibold uppercase"
							class:text-accent-1={isActiveLink(link.url)}
							href={link.url}>{link.title}</a
						>
					</li>
				{/each}
				{#if showMarketplaceButton}
					<li on:click={() => ($menuStore.isActive = false)}>
						<MarketplaceButton />
					</li>
				{/if}
			</ul>
		{/key}
	{/if}
</div>
