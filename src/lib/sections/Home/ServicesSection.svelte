<script lang="ts">
	import HomeServiceCard from '$lib/components/HomeServiceCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
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
		gsap.registerPlugin(ScrollTrigger);
		let isSmallDevice = window.innerWidth < 800;
		gsap.fromTo(
			'.card-stack .card',
			{
				y: 100,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
				delay: isSmallDevice ? 1 : 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.card-stack',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: false,
					// markers: true,
					// toggleActions: 'restart none none none'
					toggleActions: 'play none none none'
				}
			}
		);
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
	<div class="card-stack w-full flex flex-col justify-between items-center gap-4 py-16 pb-8">
		{#each services as service}
			<div class="w-full card">
				<HomeServiceCard {service} />
			</div>
		{/each}
	</div>
</SectionLayout>

<style>
	/* .card-stack {
		position: relative;
		min-height: 1200px;
	} */

	/* .card-stack .card {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; 
		transition: transform 0.3s ease;
	} */
	/* @media screen and (max-width: 768px) {
		.card-stack {
			min-height: 1300px;
		}
	} */
</style>
