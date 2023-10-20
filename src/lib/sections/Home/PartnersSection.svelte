<script>
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import PartnersCircleGlow from '$lib/icons/PartnersCircleGlow.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<div
	class="relative h-screen flex justify-center items-center max-w-[100vw] max-h-[100vh] overflow-hidden"
>
	<PartnersCircleGlow className="absolute -top-4 -left-4" />
	<SectionLayout className="w-full">
		<h2 class="uppercase">
			BRANDS
			<OutlinedText text="we&apos;ve worked with" />
		</h2>
		<div class="overflow-hidden brands-container py-16 relative">
			<div class="flex slider-track shrink-0 relative justify-between items-center gap-4 w-full">
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">1</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">2</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">3</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">4</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">5</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">6</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">1</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">2</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">3</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">4</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">5</div>
				<div class=" bg-gray-200 p-4 border h-[100px] min-w-[280px]">6</div>
			</div>
		</div>
	</SectionLayout>
</div>

<!-- <div
	class="relative h-screen flex justify-center items-center max-w-[100vw] max-h-[100vh] overflow-hidden"
>
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
</div> -->

<style>
	.brands-container::after {
		content: '';
		width: 16rem;
		height: 100%;
		background: linear-gradient(to right, #131011, transparent);
		position: absolute;
		top: 0;
		left: -4rem;
		z-index: 1;
	}
	.brands-container::before {
		content: '';
		width: 16rem;
		height: 100%;
		background: linear-gradient(to left, #131011, transparent);
		position: absolute;
		top: 0;
		right: -4rem;
		z-index: 1;
	}
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1400px);
		}
	}
	@media (max-width: 768px) {
		.brands-container::after {
			width: 10rem;
		}
		.brands-container::before {
			width: 10rem;
		}
	}
	.slider-track {
		animation: scroll 15s linear infinite forwards;
	}
</style>
