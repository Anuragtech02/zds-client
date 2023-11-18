<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { onMount } from 'svelte';
	import '../../app.css';
	import SectionLayout from './SectionLayout.svelte';
	import Tag from '$lib/components/Tag.svelte';

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
	export let className: string = '';
</script>

<SectionLayout className={`bg-[${bgColor}] ${className}`}>
	<div class="flex flex-wrap md:flex-nowrap justify-start items-center mt-[50px]">
		<div class="flex flex-col w-full justify-end items-start z-[1]">
			{#if description != ''}
				<p>{description}</p>
			{/if}
			{#if icon != ''}
				<img src={icon} alt="icon" class="w-20 h-20 mt-4" />
			{/if}

			<h2 class="text-left">{title}</h2>
			{#if tagText != ''}
				<Tag text={tagText} />
			{/if}
		</div>
		{#if rightComp}
			<div class="flex flex-col items-start md:items-end w-full md:ml-auto mt-10 md:mt-0 text-left">
				<img
					src="/images/hero-gradient.png"
					alt="hero-gradient"
					class="absolute top-0 md:-left-[150px] left-0 w-[200px] opacity-60 md:opacity-100 md:w-auto pointer-events-none z-[0]"
				/>
				<div class="flex flex-col gap-4 lg:items-end lg:justify-end">
					<p class="text-left">2023-ZERO DESIGN STUDIO</p>
					<span class="flex justify-start items-center gap-4">
						<button>SHARE</button>
						<FacebookIcon />
						<InstagramIcon />
						<VimeoIcon />
						<YoutubeIcon />
					</span>
				</div>
			</div>
		{/if}
	</div>

	<div
		class="absolute z-[-1] w-full bg-cover bg-right h-[300px] md:h-[420px] top-0 left-0"
		style={`background:url(${bgImage}) right;`}
	/>
</SectionLayout>
<slot />
