<script lang="ts">
	import type { ButtonVariants } from '$lib/types/components';

	export let variant: ButtonVariants = 'primary';
	export let className: string = '';

	const VARIANTS: {
		[key in ButtonVariants]: string;
	} = {
		primary: 'bg-bg-200 border border-borders',
		gradient: 'gradient1'
	};
</script>

<button
	class={`py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full transition duration-150 ease-out hover:ease-in hover:bg-fg hover:text-fg-600 ${VARIANTS[variant]} ${className}`}
>
	<span class="flex justify-center items-center">
		<slot />
	</span>
</button>

<style>
</style>
