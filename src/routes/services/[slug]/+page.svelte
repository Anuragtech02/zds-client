<script lang="ts">
	import { goto, onNavigate } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import VideoPopup from '$lib/components/VideoPopup.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { popupStore } from '$lib/stores/popup.store.js';
	import { getImageUrl } from '$lib/utils/functions';
	import { onMount } from 'svelte';

	export let data;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		$popupStore.isShowreelOpen = false;
	});

	let services = data.services;
	services = services.map((s: any) => {
		let service = s.attributes;
		return {
			id: s.id,
			icon: getImageUrl(service?.Icon),
			title: service?.Title,
			slug: service?.slug
		};
	});

	let service = data.service.attributes;
	service = {
		image: getImageUrl(service?.Thumbnail),
		title: service?.Title,
		ShortDescription: service?.ShortDescriptionPoints,
		LongDescription: service?.LongDescription,
		icon: getImageUrl(service?.Icon),
		slug: service?.slug,
		MainVideo: service?.mainVideoLink,
		VideoPreviewUrl: service?.MainVideo?.data?.attributes?.previewUrl || ''
	};
</script>

<PageLayout
	title={service.title}
	icon={service.icon}
	description={''}
	bgImage=""
	className="pb-[50px]"
>
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<SectionLayout className="pt-0">
		<div
			on:click={() => {
				$popupStore.isShowreelOpen = true;
			}}
			style="background-image: url({service.VideoPreviewUrl || service.image});"
			class="h-[300px] cursor-pointer w-full bg-cover lg:h-[500px] bg-no-repeat bg-center rounded-xl relative"
		>
			<button>
				<img
					src="/images/Polygon14.png"
					alt="play"
					class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-8 w-8"
				/>
			</button>
		</div>
		<div class="desc-box flex flex-col justify-between gap-8 text-lg py-16 items-start !text-left">
			<h4 class="!text-left leading-10 tracking-wide">
				{service.ShortDescription}
			</h4>
			<div class="long-desc [&>*]:text-left my-10">
				{@html service.LongDescription}
			</div>
		</div>

		<div>
			<h5 class="text-left">Other Services</h5>
			<div class="w-full flex py-8 gap-4 overflow-x-auto">
				{#each services as ser}
					<div class="{ser.slug == service.slug ? 'selected-service' : ''} rounded-md p-[2px]">
						<a
							target="_self"
							href="/services/{ser.slug}"
							class={`p-2 bg-[#272727]  cursor-pointer flex flex-col justify-start items-start min-h-[6rem] min-w-[14rem]  rounded-md`}
						>
							<img src={ser.icon} class="h-12 w-12" alt="" />
							<p class="text-sm mt-2">{ser.title}</p>
						</a>
					</div>
				{/each}
			</div>
			<div />
		</div>
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>

{#if $popupStore.isShowreelOpen}
	<VideoPopup videoUrl={service?.MainVideo} />
{/if}

<style>
	div {
		font-family: 'Montserrat', sans-serif;
	}

	.long-desc p {
		text-align: left !important;
	}

	.selected-service {
		background: linear-gradient(to right, #ff439d, #2518d1 80%);
		/* border: 2px solid #fff; */
	}
</style>
