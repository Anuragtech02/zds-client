<script lang="ts">
	import DecorationLeft from '$lib/components/DecorationLeft.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import PartnersCircleGlow from '$lib/icons/PartnersCircleGlow.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { breakSentence, getImageUrl } from '$lib/utils/functions';
	export let data;

	const title = data.title;
	let { initialWords, lastWord } = breakSentence(title);

	let brands = data.brands.data.map((b: any) => ({
		id: b?.id,
		name: b?.attributes?.Name,
		logo: getImageUrl(b?.attributes?.image)
	}));
</script>

<div
	class="relative flex flex-col justify-center items-center max-w-[100vw] max-h-[100vh] overflow-hidden"
>
	<SectionLayout className="w-full m-0" type="wrapper">
		<h2 class="uppercase max-width-container text-left">
			{initialWords}
			<OutlinedText text={lastWord} />
		</h2>
		<div class="overflow-hidden brands-container py-16 relative">
			<div class="flex slider-track shrink-0 relative justify-between items-center gap-4 w-full">
				<div class="flex items-center">
					{#each brands as brand}
						<div
							class="flex justify-center items-center h-[150px] min-w-[200px] md:min-w-[280px] bg-transparent logo-container"
						>
							<div class="logo-wrapper">
								<img class="object-contain bg-transparent" src={brand.logo} alt={brand.name} />
							</div>
						</div>
					{/each}
				</div>
				<div class="flex items-center">
					{#each brands as brand}
						<div
							class="flex justify-center items-center h-[150px] min-w-[200px] md:min-w-[280px] bg-transparent logo-container"
						>
							<div class="logo-wrapper">
								<img class="object-contain bg-transparent" src={brand.logo} alt={brand.name} />
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</SectionLayout>
</div>

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

	.logo-container {
		padding: 1rem;
	}

	.logo-wrapper {
		width: 120px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.logo-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: transform 0.3s ease;
	}

	/* Optional: Add hover effect */
	.logo-wrapper:hover img {
		transform: scale(1.1);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-101%);
		}
	}

	@media (max-width: 768px) {
		.brands-container::after {
			width: 10rem;
		}
		.brands-container::before {
			width: 10rem;
		}
		.logo-wrapper {
			width: 90px;
			height: 90px;
		}
	}

	.slider-track > div {
		animation: scroll 40s linear infinite forwards;
	}
</style>
