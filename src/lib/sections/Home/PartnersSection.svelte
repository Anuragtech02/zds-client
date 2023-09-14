<script>
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import PartnersCircleGlow from '$lib/icons/PartnersCircleGlow.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<div class="relative h-screen flex justify-center items-center">
	<PartnersCircleGlow className="absolute -top-4 -left-4" />
	<SectionLayout className="w-full">
		<h2 class="uppercase">
			Partners
			<OutlinedText text="we&apos;ve worked with" />
		</h2>
		<div class="w-full rounded-xl border-2 border-borders-500 p-10 mt-10 bg-bg-300">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">1</div>
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">2</div>
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">3</div>
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">4</div>
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">5</div>
				<div class="col-span-1 bg-gray-200 p-4 border h-[150px]">6</div>
			</div>
		</div>
	</SectionLayout>
</div>
