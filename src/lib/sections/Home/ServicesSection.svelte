<script lang="ts">
	import { goto } from '$app/navigation';
	import HomeServiceCard from '$lib/components/HomeServiceCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { HOME_SERVICES } from '$lib/utils/contants';
	import { getImageUrl } from '$lib/utils/functions';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
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

	onMount(() => {
		let isSmallDevice = window.innerWidth < 800;
		gsap.to('.card-stack .card', {
			stagger: 0.2, // Delay between each card's animation
			y: (i) => i * (isSmallDevice ? 350 : 320), // Adjust the position of each card (example: 30px down per card)
			ease: 'expo.out',
			duration: 0.2,
			delay: 1,
			scrollTrigger: {
				trigger: '.card-stack', // Element that triggers the animation
				start: 'top center', // When the top of '.card-stack' hits the center of the viewport
				// You can adjust 'start' and 'end' according to your needs
				toggleActions: 'play none none none' // Defines what happens when scrolling forward and backward
			}
		});
	});

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
	<div class="card-stack w-full flex flex-col justify-between items-center gap-4 py-16 pb-8 mt-8">
		{#each services as service}
			<div class="w-full card">
				<HomeServiceCard {service} />
			</div>
		{/each}
	</div>
</SectionLayout>

<style>
	.card-stack {
		position: relative;
		min-height: 1200px;
	}

	.card-stack .card {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /* Adjust as needed */
		transition: transform 0.3s ease;
	}
	@media screen and (max-width: 768px) {
		.card-stack {
			min-height: 1400px;
		}
	}
</style>
