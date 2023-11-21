<script lang="ts">
	import { cursorStore } from '$lib/stores/cursor.store';
	import { onMount } from 'svelte';
	import '../../app.css';
	let x: number = 0;
	let y: number = 0;
	let cursor: HTMLElement;

	onMount(() => {
		// event listener for cursor position
		document.addEventListener('mousemove', (e) => {
			x = e.clientX;
			y = e.clientY;
			$cursorStore.position.x = x;
			$cursorStore.position.y = y;
		});
	});
</script>

<div
	class="cursor w-24 h-24 rounded-full fixed transition-all ease-out duration-300"
	class:-z-1={$cursorStore.z === -1}
	class:z-50={$cursorStore.z === 50}
	bind:this={cursor}
	style="transform: translate({$cursorStore.position.x}px, {$cursorStore.position
		.y}px); margin:{$cursorStore.type !== 'card' ? '-46px -47px' : '-130px -160px'}"
>
	{#if $cursorStore.type === 'link' && $cursorStore.showCursor}
		{#key $cursorStore.showCursor}
			<div class="w-full h-full rouded-full overflow-hidden">
				<div
					class="cursor-link w-full h-full rounded-full bg-white/20 backdrop-blur-md flex justify-center items-center p-8"
				>
					<!-- <img src="/arrow-right.png" alt="arrow-right" class="w-full h-full max-w-[100%] invert" /> -->
					<svg class="icon-arrow" viewBox="0 0 46.5 22">
						<polygon
							fill="white"
							points="46.5 11 46.4 11 35.5 22 33.7 20.2 41.6 12.3 0 12.3 0 9.7 41.6 9.7 33.7 1.8 35.5 0 46.5 11"
						/>
					</svg>
				</div>
			</div>
		{/key}
	{/if}
	{#if $cursorStore.type === 'card' && $cursorStore.showCursor}
		<div class="w-[300px] h-[300px] rounded-full blur-3xl gradient-1 opacity-50" />
	{/if}
</div>

<style>
	.cursor {
		pointer-events: none;
		/* margin: -46px -47px; */
		/* overflow: hidden; */
	}
	.cursor > .cursor-link {
		animation: scaleUpSpring 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
	}
	.cursor .cursor-link svg {
		transform: translateX(-150px);
		animation: slideSmoothArrow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 0.2s;
	}
	@keyframes scaleUpSpring {
		from {
			scale: 0;
		}
		to {
			scale: 1;
		}
	}
	@keyframes slideSmoothArrow {
		from {
			transform: translateX(-150px);
		}
		to {
			transform: translateX(0);
		}
	}
</style>
