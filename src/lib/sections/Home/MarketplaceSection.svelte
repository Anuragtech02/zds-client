<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SingleStarIcon from '$lib/icons/SingleStarIcon.svelte';
	import TwinStarsIcon from '$lib/icons/TwinStarsIcon.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { breakSentence } from '$lib/utils/functions';
	export let data;
	const { Title, Description, CTA_Text, CTA_Link } = data;
	let { initialWords, lastWord } = breakSentence(Title);

	let images = data?.Images?.data?.map((i: any) => ({
		id: i?.id,
		url: i?.attributes?.url
	}));
</script>

<SectionLayout className="max-w-[100vw] overflow-x-hidden">
	<div class="max-width-container">
		<div class="flex justify-between flex-col md:flex-row items-start gap-10">
			<div class="flex-1">
				<h2 class="uppercase text-left">
					<OutlinedText text={initialWords} />
					<h2 class="block sm:inline-block">{lastWord}</h2>
				</h2>
				<p class="text-left mt-4 leading-10">
					{Description}
				</p>
				<Button className="mt-12" link={CTA_Link}>{CTA_Text}</Button>
			</div>
			<div class="relative flex-1 w-full md:w-auto">
				<SingleStarIcon className="absolute -top-7 -left-7" />
				<TwinStarsIcon className="absolute -bottom-7 -right-7" />
				<div
					class="flex justify-between items-stretch flex-col sm:flex-row gap-6 [&>div]:rounded-xl"
				>
					<div class="flex-1 overflow-hidden max-h-[400px]">
						<img src={images[0]?.url} class="w-full h-full object-cover" alt="marketplace-1" />
					</div>
					<div class="flex-1 flex flex-col justify-center items-between gap-6">
						<div class="flex-1">
							<img src={images[1]?.url} alt="marketplace-1" class="w-full h-full" />
						</div>
						<div class="flex-1">
							<img src={images[2]?.url} alt="marketplace-1" class="w-full h-full" />
						</div>
					</div>
				</div>
				<div
					class="flex justify-between items-stretch flex-col sm:flex-row gap-6 mt-6 [&>div]:rounded-xl"
				>
					<div class="flex-1 flex flex-col justify-center items-between gap-6">
						<div class="flex-1">
							<img src={images[3]?.url} alt="marketplace-1" class="w-full h-full" />
						</div>
						<div class="flex-1">
							<img src={images[4]?.url} alt="marketplace-1" class="w-full h-full" />
						</div>
					</div>
					<div class="flex-1 overflow-hidden max-h-[400px]">
						<img src={images[5]?.url} alt="marketplace-1" class="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	</div>
</SectionLayout>
