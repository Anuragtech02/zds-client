<script lang="ts">
	import { goto } from '$app/navigation';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';

	export let data;

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
	console.log(services);
	let service = data.service.attributes;
	service = {
		image: getImageUrl(service?.Thumbnail),
		title: service?.Title,
		ShortDescription: service?.ShortDescriptionPoints,
		LongDescription: service?.LongDescription,
		icon: getImageUrl(service?.Icon),
		slug: service?.slug
	};
	console.log(service);
</script>

<PageLayout title={service.title} icon={service.icon} description={''} bgImage="">
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<div class="mt-[-8rem]">
		<div
			style="background-image: url({service.image});"
			class="h-[300px] lg:h-[500px] bg-no-repeat bg-center rounded-md relative"
		>
			<button>
				<img
					src="/images/Polygon14.png"
					alt=""
					class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-8 w-8"
				/>
			</button>
		</div>
		<div class="desc-box flex flex-col justify-between gap-8 text-lg py-16 items-start text-left">
			<h4 class="text-left leading-10 tracking-wide">
				{service.ShortDescription}
			</h4>
			{@html service.LongDescription}
		</div>

		<div>
			<h5 class="text-left">OTHER SERVICES</h5>
			<div class="w-full flex py-8 gap-4 overflow-x-auto">
				{#each services as ser}
					<div
						role="button"
						tabindex="0"
						on:keypress={() => {
							goto(`/service/${ser.slug}`);
						}}
						on:click={() => {
							goto(`/service/${ser.slug}`);
						}}
						class={`cursor-pointer min-h-[6rem] rounded-md min-w-[14rem] p-2 gap-2 flex flex-col justify-start items-start bg-[#FFFFFF1A] ${
							ser.slug == service.slug ? 'border-2' : ''
						}`}
					>
						<img src={ser.icon} class="h-12 w-12" alt="" />
						<p class="text-sm">{ser.title}</p>
					</div>
				{/each}
			</div>
			<div />
		</div>
	</div>
</PageLayout>

<style>
	div {
		font-family: 'Montserrat', sans-serif;
	}
</style>
