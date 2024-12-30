<script lang="ts">
	import { goto } from '$app/navigation';
	import { cursorStore } from '$lib/stores/cursor.store';
	import { onDestroy, onMount } from 'svelte';

	let container: HTMLDivElement;

	export let video: {
		id: number;
		title: string;
		description?: string;
		shortDescription?: string;
		category: string;
		slug: string;
		thumbnail: string;
		thumbnailMobile?: string;
		Video: string;
	};
	export let type: 'works' | 'blogs' = 'works';
	export let className: string = '';
	let heading = video.title;
	let category = video.category;
	let src = video.thumbnail;
	let srcMobile = video.thumbnailMobile;
	export let fixedWidth = true;
	export let absolute = true;

	function showCursor() {
		$cursorStore.type = 'link';
		$cursorStore.showCursor = true;
	}

	function hideCursor() {
		$cursorStore.type = 'default';
		$cursorStore.showCursor = false;
	}

	onMount(() => {
		container?.addEventListener('mouseenter', showCursor);
		container?.addEventListener('mouseleave', hideCursor);
	});

	onDestroy(() => {
		container?.removeEventListener('mouseenter', showCursor);
		container?.removeEventListener('mouseleave', hideCursor);
		$cursorStore.showCursor = false;
	});
</script>

# src/lib/components/Work/WorkVideo.svelte
<div
	class={`item ${fixedWidth ? 'w-[300px] m-6 responsive-item' : 'w-full'} ${
		absolute ? 'absolute' : ''
	} ${className}`}
	bind:this={container}
>
	<div class="item-content h-full transition-all duration-500">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => goto(`/${type}/${video.slug}`)}
			on:click={() => goto(`/${type}/${video.slug}`)}
			class="h-full w-full p-1 rounded-xl bg-[#404040] relative overflow-hidden"
		>
			{#key video.thumbnail}
				<picture
					class="block rounded-xl overflow-hidden object-cover h-[250px] w-full aspect-[2] transition-transform duration-500"
				>
					<source media="(max-width: 499px)" srcset={srcMobile || video.thumbnailMobile} />
					<source media="(min-width: 500px)" srcset={src || video.thumbnail} />
					<img
						{src}
						alt={heading}
						class="block rounded-xl object-cover h-full w-full transition-all duration-500 hover:scale-105"
					/>
				</picture>
			{/key}
			<p class="text-sm absolute top-3 right-3 rounded-2xl px-4 py-1 bg-[#404040] z-10">
				{category}
			</p>
			<div class="px-4 py-1 flex flex-col items-start justify-center bg-[#404040] relative z-10">
				<p class="text-[0.8rem] w-full text-left rounded-t-xl mt-1">
					{heading}
				</p>
				{#if video?.shortDescription}
					<p class="text-sm line-clamp-2">
						{video?.shortDescription}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.item {
		display: block;
		z-index: 1;
		background: #000;
		color: #fff;
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.item-content {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(.expanded-work) .item-content {
		transform: scale(1.02);
	}

	:global(.expanded-work) img {
		transform: scale(1.1);
	}

	@media screen and (min-width: 450px) {
		.item.responsive-item {
			width: 300px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 550px) {
		.item.responsive-item {
			width: 400px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 750px) {
		.item.responsive-item {
			width: 500px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 1250px) {
		.item.responsive-item {
			width: 40%;
			margin: 2rem;
		}
	}
	@media screen and (min-width: 1850px) {
		.item.responsive-item {
			width: 700px;
			margin: 2rem;
		}
	}

	.item.muuri-item-dragging {
		z-index: 3;
	}
	.item.muuri-item-releasing {
		z-index: 2;
	}
	.item.muuri-item-hidden {
		z-index: 0;
	}
</style>
