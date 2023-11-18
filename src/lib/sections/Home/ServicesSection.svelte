<script lang="ts">
	import { goto } from '$app/navigation';
	import HomeServiceCard from '$lib/components/HomeServiceCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { HOME_SERVICES } from '$lib/utils/contants';
	import { getImageUrl } from '$lib/utils/functions';
	export let data: {
		title: string;
		services: {
			data: Array<{
				attributes: {
					Title: string;
					slug: string;
					Icon: any;
					ShortDescriptionPoints: string;
				};
			}>;
		};
	} = {
		title: '',
		services: {
			data: []
		}
	};
	console.log(data);
	let sectionTitle: string[] = [];
	let services: Array<{
		Icon: string;
		slug: string;
		Title: string;
		ShortDescriptionPoints: string[];
	}> = [];

	$: {
		if (data?.title) {
			sectionTitle = data.title.split(',');
		}
		if (data?.services?.data?.length) {
			services = data.services.data.map((item, i) => ({
				Title: item.attributes.Title,
				slug: item.attributes.slug,
				Icon: getImageUrl(item.attributes.Icon, 'original'),
				ShortDescriptionPoints: item.attributes.ShortDescriptionPoints.split(',')
			}));
		}
	}
</script>

<SectionLayout className="pt-0">
	<h2 class="text-left">
		<OutlinedText text={sectionTitle?.[0]} className="mt-4" />
		{sectionTitle?.[1]}
	</h2>
	<!-- <Slider /> -->
	<div class="w-full flex flex-col justify-between items-center gap-4 py-16 pb-8">
		{#each services as service}
			<HomeServiceCard {service} />
		{/each}
	</div>
</SectionLayout>
