<script lang="ts">
	export let className: string = '';
	export let type: 'container' | 'wrapper' = 'container';
	export let padding: string = 'py-[100px]';
	export let customSection: boolean = false;
</script>

{#if !customSection}
	<section class={`${padding} ${type === 'container' ? 'max-width-container' : ''} ${className}`}>
		<slot />
	</section>
{:else}
	<section
		class={`custom-section ${padding} ${
			type === 'container' ? 'max-width-container' : ''
		} ${className}`}
	>
		<slot />
	</section>
{/if}
