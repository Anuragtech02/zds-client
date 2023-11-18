<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let service: any;
	let container: HTMLAnchorElement;
	let tickAudio: HTMLAudioElement;

	onMount(() => {
		tickAudio = new Audio('/audio/tick.mp3');
	});

	const handleSoundPlay = () => {
		tickAudio.play();
	};
</script>

<a
	bind:this={container}
	href={`/service/${service?.slug}`}
	on:mouseenter={handleSoundPlay}
	class="card-cont relative w-full flex flex-col justify-center md:justify-between md:flex-row items-start md:items-center border border-[#3A3A3A] p-8 rounded-md my-2"
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
		margin-left: -10px;
		margin-top: 10px;
	}
	.card-cont:hover::after {
		@apply bg-bg-800/20;
		backdrop-filter: blur(10px);
	}
	.card-cont:hover::before {
		left: 10px;
		opacity: 1;
		top: -10px;
	}
</style>
