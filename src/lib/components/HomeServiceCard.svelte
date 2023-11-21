<script lang="ts">
	import { cursorStore } from '$lib/stores/cursor.store';
	import { gsap } from 'gsap';
	import { onDestroy, onMount } from 'svelte';

	export let service: any;
	let container: HTMLAnchorElement;
	let tickAudio: HTMLAudioElement;

	onMount(() => {
		tickAudio = new Audio('/audio/tick.mp3');
	});

	const handleSoundPlay = () => {
		tickAudio.play();
	};

	function showCursor() {
		$cursorStore.type = 'card';
		$cursorStore.z = -1;
		$cursorStore.showCursor = true;
	}
	function hideCursor() {
		$cursorStore.type = 'default';
		$cursorStore.z = 50;
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

	function handleHover() {
		// handleSoundPlay();
	}
</script>

<a
	bind:this={container}
	href={`/services/${service?.slug}`}
	class="card-cont relative w-full flex flex-col justify-center md:justify-between md:flex-row items-start
	md:items-center border border-[#3A3A3A] p-8 py-16 rounded-md bg-bg-800"
>
	<img src={service?.Icon} class="block sm:hidden h-20 w-20 lg:h-28 lg:w-28" alt="" />
	<p class="md:w-1/2 sm:ml-2 xl:pl-8 text-left text-lg lg:text-3xl">
		{service?.Title}
	</p>
	<div class="md:w-1/2 flex flex-col mt-2 sm:mt-0 items-start justify-center md:items-start">
		<img src={service?.Icon} class="h-20 w-20 hidden sm:block lg:h-28 lg:w-28" alt="" />
		<ul class="flex flex-wrap gap-2 items-center">
			{#each service?.ShortDescriptionPoints as s, i}
				<li class="text-sm">
					{#if i != 0}
						•
					{/if}{s}
				</li>
			{/each}
		</ul>
	</div>
</a>

<style>
	.card-cont {
		position: relative;
		transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
	}

	.card-cont:hover {
		/* color: black; */
	}

	.card-cont p,
	.card-cont img,
	.card-cont ul {
		z-index: 2;
	}
	.card-cont::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		border-radius: 0.25rem;
		@apply bg-bg-800;
	}

	.card-cont::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		border-radius: 0.25rem;
		transition: all 0.2s ease-in-out;
		opacity: 0;
		@apply gradient-1;
	}

	.card-cont:hover {
		scale: 0.99;
	}
	.card-cont:hover::before {
		opacity: 1;
		scale: 1.002 1.01;
	}
	/*
	.card-cont:hover::after {
		@apply bg-bg-800/20;
		backdrop-filter: blur(10px);
	}
	.card-cont:hover::before {
		left: 10px;
		opacity: 1;
		top: -10px;
	} */
	/* .card-cont::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: white;
		opacity: 0;
		filter: blur(50px);
		z-index: 0;
		transition: all 0.2s ease-in-out;
	}
	.card-cont:hover::before {
		opacity: 0.4;
	} */
</style>
