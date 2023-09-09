<script lang="ts">
	export let url: string =
		'https://www.zerodesignstudios.com/wp-content/uploads/2019/12/Zero-Studio-Logo-e1577710110570.png';
	export let title: string = '';
	export let subTitle: string = '';
	export let width: string = 'w-20';
	export let height: string = 'h-18';
</script>

<div class="flex justify-center items-center gap-2 max-w-[200px]">
	<img src={url} alt="logo" class={`${width} ${height}`} />
	<div class="flex flex-col align-stretch">
		{#if title?.length > 0}
			<h3 class="text-[2.5rem]">{title}</h3>
		{/if}
		{#if subTitle?.length > 0}
			<p class="text-sm">{subTitle}</p>
		{/if}
	</div>
</div>
