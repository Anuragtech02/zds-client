<script lang="ts">
	export let url: string = '';
	export let className: string = '';
	export let active: boolean = false;
</script>

<span class="inline-block h-8">
	<a
		href={url}
		class={`flex items-center gap-2 text-sm font-medium text-fg ${className}`}
		class:font-bold={active}
	>
		<slot />
	</a>
	{#if active}
		<span class="w-[6px] h-[6px] mt-1 rounded-full bg-fg block mx-auto" />
	{/if}
</span>
