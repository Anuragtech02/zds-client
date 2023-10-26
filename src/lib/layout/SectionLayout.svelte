<script lang="ts">
	export let className: string = '';
	export let type: 'container' | 'wrapper' = 'container';
	export let padding: string = 'py-[100px]';
</script>

<section class={`${padding} ${type === 'container' ? 'max-width-container' : ''} ${className}`}>
	<slot />
</section>
