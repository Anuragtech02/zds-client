<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ButtonVariants } from '$lib/types/components';
	export let onClick: () => void = () => {
		goto(link);
	};
	export let link: string = '';
	export let variant: ButtonVariants = 'primary';
	export let className: string = '';
	export let type: 'button' | 'submit' = 'button';

	const VARIANTS: {
		[key in ButtonVariants]: string;
	} = {
		primary: 'bg-bg-200 border border-borders',
		gradient: 'gradient1'
	};

	const COMMON_CLASS =
		'py-2 px-6 sm:py-3 sm:px-8 md:py-3 md:px-12 rounded-full transition duration-150 ease-out hover:ease-in hover:bg-fg hover:text-fg-600 transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-indigo-300';
</script>

<style>
	.button-border-animation {
		position: relative;
		display: inline-block;
		/* Creates border lines */
		border: 2px solid transparent;
		/* Used to hide overflow of animated border */
		border-radius: 9999px; /* Full rounded for circular borders */
		overflow: hidden;
	}

	.button-border-animation:before {
		content: "";
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		border-radius: inherit;
		background: linear-gradient(
        90deg,
        #f9429e,         /* Start color */
        #d137b1,         /* Intermediate color closer to #f9429e */
        #7138d2,         /* Intermediate color between #f9429e and #2518D1 */
        #2518D1          /* End color */
    );
		z-index: -1;
		animation: border-animation 3s linear infinite;
	}

	@keyframes border-animation {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.button-border-animation:hover:before {
		/* On hover, we can speed up the animation or change colors */
		animation: border-animation 1s linear infinite;
	}
</style>

{#if type === 'submit'}
	<button
		on:click={onClick}
		class={`${COMMON_CLASS} ${VARIANTS[variant]} ${className}`}
		type="submit"
	>
		<span class="flex justify-center items-center">
			<slot />
		</span>
	</button>
{:else}
	<button on:click={onClick} class={`button-border-animation ${COMMON_CLASS} ${VARIANTS[variant]} ${className}`}>
		<span class="flex justify-center items-center">
			<slot />
		</span>
	</button>
{/if}