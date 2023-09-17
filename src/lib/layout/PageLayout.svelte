<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Page Layout mounted');
	});
	export let title = 'OUR WORK';
	export let description = 'WE ARE PROUD TO PRESENT';
	export let bgImage = '/images/headingBG.png';
</script>

<section
	class="min-h-screen relative p-[2rem] sm:p-[4rem] md:p-[4rem] md:pt-[8rem] lg:py-[8rem] lg:px-[8rem]"
>
	<div class="flex flex-col w-full justify-end items-start pt-[5rem] mb-[12rem] lg:mb-[14rem]">
		<p>{description}</p>
		<h2>{title}</h2>
	</div>
	<div
		class="absolute z-[-1] w-full bg-cover bg-right h-[300px] md:h-[420px] top-0 left-0"
		style={`background:url(${bgImage}) right;`}
	/>
	<slot />
</section>
