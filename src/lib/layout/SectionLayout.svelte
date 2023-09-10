<script lang="ts">
	export let className: string = '';
	export let type: 'container' | 'wrapper' = 'container';
</script>

<section class={`py-[50px] ${type === 'container' ? 'max-width-container' : ''} ${className}`}>
	<slot />
</section>
