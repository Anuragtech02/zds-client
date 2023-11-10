<script lang="ts">
	import { onMount } from 'svelte';
	import checkerJson from '$lib/utils/lottie/checker.json';

	let LottiePlayer: any;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

{#if LottiePlayer}
	{#key LottiePlayer}
		<LottiePlayer
			src={checkerJson}
			autoplay={true}
			loop={true}
			controls={false}
			background="transparent"
			height={600}
			width={600}
			{controlsLayout}
		/>
	{/key}
{/if}
