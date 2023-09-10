<script lang="ts">
	import type { ButtonVariants } from '$lib/types/components';

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
		'py-2 px-6 sm:py-3 sm:px-8 md:py-3 md:px-10 rounded-full transition duration-150 ease-out hover:ease-in hover:bg-fg hover:text-fg-600';
</script>

{#if type === 'submit'}
	<button class={`${COMMON_CLASS} ${VARIANTS[variant]} ${className}`} type="submit">
		<span class="flex justify-center items-center">
			<slot />
		</span>
	</button>
{:else}
	<button class={`${COMMON_CLASS} ${VARIANTS[variant]} ${className}`}>
		<span class="flex justify-center items-center">
			<slot />
		</span>
	</button>
{/if}
