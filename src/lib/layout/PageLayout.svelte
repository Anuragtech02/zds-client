<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { onMount } from 'svelte';
	import '../../app.css';
	import SectionLayout from './SectionLayout.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import FacebookShareButton from '$lib/components/FacebookShareButton.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	onMount(() => {
		console.log('Page Layout mounted');
	});
	export let title = 'OUR WORK';
	export let icon = '';
	export let description = 'WE ARE PROUD TO PRESENT';
	export let bgImage = '/images/headingBG.png';
	export let bgImageMobile = '/images/headingBG.png';
	export let bgColor = '';
	export let tagText = '';
	export let rightComp = false;
	export let className: string = '';
	export let renderTitleAsH1: boolean = false;
	let url: string = '';
	onMount(() => {
		if (typeof window !== 'undefined') {
			url = window.location.href;
		}
		if (bgImage == '') {
			bgImage = '/images/headingBG.png';
		}
	});
</script>

<div
	class={`bg-[${bgColor}] ${className} flex justify-center items-center relative w-full min-h-[300px] sm:min-h-[420px] ${
		bgImage != '' ? 'header-bg header-bg-responsive' : ''
	}`}
	style={bgImage != '' ? `--bg-mobile: url(${bgImageMobile}); --bg-desktop: url(${bgImage});` : ''}
>
	<SectionLayout className="!py-0 h-full w-full">
		<!-- {#if browser && !$page.url.href?.includes('blog')} -->
		<div class="flex flex-wrap md:flex-nowrap justify-start items-center h-full">
			<div class="flex flex-col w-full md:w-2/3 justify-end items-start z-[1] pt-20">
				{#if description != ''}
					<p>{description}</p>
				{/if}
				{#if icon != ''}
					<img src={icon} alt={title} class="w-20 h-20 mt-4" />
				{/if}
				{#if renderTitleAsH1}
					<h1 class="text-left renderAsH1 !leading-[1.1]">{title}</h1>
				{:else}
					<h2 class="text-left !leading-[1.1]">{title}</h2>
				{/if}
				{#if tagText != ''}
					<Tag text={tagText} />
				{/if}
			</div>
			{#if rightComp}
				<div
					class="flex flex-col items-start md:items-end w-full md:w-1/3 md:ml-auto mt-10 md:mt-0 text-left"
				>
					<div class="flex flex-col gap-4 lg:items-end lg:justify-end">
						<p class="text-left">2023-ZERO DESIGN STUDIO</p>
						<span class="flex justify-start items-center gap-4">
							<ShareButton {title} siteTitle={'Zero Design Studio'} {url} />
							<FacebookShareButton {url} />
						</span>
					</div>
				</div>
			{/if}
		</div>
		<!-- {/if} -->
	</SectionLayout>
</div>
<!-- {#if browser && $page.url.href?.includes('blog')}
	<SectionLayout
		className="flex flex-col sm:flex-row justify-between items-start"
		padding="py-4 sm:py-10"
	>
		<div class="flex flex-col w-full justify-end items-start z-[1] flex-1">
			{#if description != ''}
				<p>{description}</p>
			{/if}
			{#if icon != ''}
				<img src={icon} alt={title} class="w-20 h-20 mt-4" />
			{/if}
			{#if renderTitleAsH1}
				<h1 class="text-left renderAsH1 w-full">{title}</h1>
			{:else}
				<h2 class="text-left w-full">{title}</h2>
			{/if}
			{#if tagText != ''}
				<Tag text={tagText} />
			{/if}
		</div>
		{#if rightComp}
			<div class="flex flex-col items-start md:items-end mt-10 md:mt-0 text-left min-w-[300px]">
				<div class="flex flex-col gap-4 lg:items-end lg:justify-end">
					<p class="text-left">2023-ZERO DESIGN STUDIO</p>
					<span class="flex justify-start items-center gap-4">
						<ShareButton {title} siteTitle={'Zero Design Studio'} {url} />
						<FacebookShareButton {url} />
					</span>
				</div>
			</div>
		{/if}
	</SectionLayout>
{/if} -->
<slot />

<style>
	.header-bg {
		background-size: cover;
		background-position: center;
	}

	@media (max-width: 499px) {
		.header-bg-responsive {
			background-image: var(--bg-mobile);
		}
	}

	@media (min-width: 500px) {
		.header-bg-responsive {
			background-image: var(--bg-desktop);
		}
	}
</style>
