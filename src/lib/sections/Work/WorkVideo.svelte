<script lang="ts">
	import { goto } from '$app/navigation';
	import { cursorStore } from '$lib/stores/cursor.store';
	import { onDestroy, onMount } from 'svelte';

	let container: HTMLDivElement;

	export let video: {
		id: number;
		title: string;
		category: string;
		slug: string;
		thumbnail: string;
		Video: string;
	};
	export let type: 'video' | 'blogs' = 'video';
	export let className: string = '';
	// console.log(video);
	let heading = video.title;
	let category = video.category;
	let src = video.thumbnail;
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

<div
	class={`item ${fixedWidth ? 'w-[300px] m-6 responsive-item' : 'w-full'} ${
		absolute ? 'absolute' : ''
	} ${className}`}
	bind:this={container}
>
	<div class="item-content">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				goto(`/${type}/${video.slug}`);
			}}
			on:click={() => {
				goto(`/${type}/${video.slug}`);
			}}
			class="h-full w-full relative"
		>
			<p class="absolute top-0 left-0 w-full p-2 px-4 text-left backdrop-blur rounded-t-xl">
				{heading}
			</p>

			<img {src} alt="img" class="rounded-xl object-cover h-full w-full" />
			<!-- <video>
				<source src={video.Video} type="video/mp4" />
			</video> -->
			<p class="absolute bottom-2 left-2 rounded-2xl px-4 py-1 backdrop-blur">
				{category}
			</p>
		</div>
	</div>
</div>

<style>
	.item {
		display: block;

		aspect-ratio: 2;
		z-index: 1;
		background: #000;
		color: #fff;
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
	.item-content {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
