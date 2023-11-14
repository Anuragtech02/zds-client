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

<SectionLayout>
	<h2 class="text-left">
		<OutlinedText text={sectionTitle?.[0]} className="mt-4" />
		{sectionTitle?.[1]}
	</h2>
	<!-- <Slider /> -->
	<div class="w-full flex flex-col justify-between items-center gap-4 py-16 pb-8">
		{#each services as service}
			<div
				role="button"
				tabindex="0"
				on:keypress={() => {
					goto(`/service/${service.slug}`);
				}}
				on:click={() => {
					goto(`/service/${service.slug}`);
				}}
				class="w-full flex flex-col md:flex-row justify-between items-center border border-[#3A3A3A] p-8 rounded-md"
			>
				<p class="md:w-1/2 pl-2 xl:pl-8 text-left text-lg lg:text-2xl">
					{service.Title}
				</p>
				<div class="md:w-1/2 flex flex-col items-center justify-center md:items-start">
					<img src={service.Icon} class="h-20 w-20 lg:h-28 lg:w-28" alt="" />
					<ul class="flex flex-wrap gap-2 items-center">
						{#each service.ShortDescriptionPoints as point, i}
							<li class="text-sm">
								{#if i != 0}
									•
								{/if}{point}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</SectionLayout>
