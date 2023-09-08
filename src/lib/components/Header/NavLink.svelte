<script lang="ts">
	export let url: string = '';
	export let className: string = '';
	export let active: boolean = false;
</script>

<span class="inline-block">
	<a
		href={url}
		class={`relative flex items-center gap-2 text-md text-fg ${className}`}
		class:font-bold={active}
		data-active={active}
	>
		<slot />
	</a>
</span>

<style>
	[data-active='true']::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 6px;
		height: 6px;
		@apply bg-fg;
		@apply rounded-full;
	}
</style>
