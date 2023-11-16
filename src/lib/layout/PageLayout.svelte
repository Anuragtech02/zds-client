<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Page Layout mounted');
	});
	export let title = 'OUR WORK';
	export let icon = '';
	export let description = 'WE ARE PROUD TO PRESENT';
	export let bgImage = '/images/headingBG.png';
	export let bgColor = '';
	export let tagText = '';
	export let rightComp = false;
</script>

<section
	style={`background-color: ${bgColor}`}
	class={`bg-[${bgColor}] min-h-screen relative p-[2rem] sm:p-[4rem] md:p-[6rem] lg:py-[8rem] lg:px-[8rem]`}
>
	<div class="flex flex-wrap md:flex-nowrap justify-between items-center">
		<div class="flex flex-col w-full justify-end items-start pt-[5rem] mb-[12rem] lg:mb-[14rem]">
			{#if description != ''}
				<p>{description}</p>
			{/if}
			{#if icon != ''}
				<img src={icon} alt="icon" class="w-20 h-20 mt-4" />
			{/if}

			<h2>{title}</h2>
			{#if tagText != ''}
				<p class="backdrop-blur-sm rounded-3xl px-4 py-2 mt-4 bg-[#FFFFFF1A]">
					{tagText}
				</p>
			{/if}
		</div>
		{#if rightComp}
			<div class="mt-[-10rem] lg:mt-0 flex justify-end items-end w-full">
				<div class="w-full mb-[9rem] lg:mb-[11rem]">
					<img
						src="/images/hero-gradient.png"
						alt="hero-gradient"
						class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
					/>
					<div class="flex flex-col gap-4 lg:items-end lg:justify-end">
						<p>2023-ZERO DESIGN STUDIO</p>
						<span class="flex justify-start items-center gap-4">
							<button>SHARE</button>
							<FacebookIcon />
							<InstagramIcon />
							<VimeoIcon />
							<YoutubeIcon />
						</span>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div
		class="absolute z-[-1] w-full bg-cover bg-right h-[300px] md:h-[420px] top-0 left-0"
		style={`background:url(${bgImage}) right;`}
	/>
	<slot />
</section>
