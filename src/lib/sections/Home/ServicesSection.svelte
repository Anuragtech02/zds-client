<script lang="ts">
	import { goto } from '$app/navigation';
	import HomeServiceCard from '$lib/components/HomeServiceCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

	let services = [
		{
			id: 1,
			title: 'Multimedia Productions',
			icon: '/images/services/R1.png',
			services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
		},
		{
			id: 2,
			title: 'Event Experiences',
			icon: '/images/services/R2.png',
			services: ['Entertainment Technology ', 'Immersive Experiences', 'Multimedia Show Design']
		},
		{
			id: 3,
			title: 'Event Experiences',
			icon: '/images/services/R3.png',
			services: [
				'New Media Art Installations',
				'Digital Art Curation',
				'Art-Tech Collaborations',
				'Interactive Installations'
			]
		},
		{
			id: 4,
			title: 'Entertainment Technology',
			icon: '/images/services/R4.png',
			services: [
				'LED Technology Integration',
				'Audio-Visual Production',
				'Virtual and Augmented Reality (VR/AR)',
				'Permanent shows & museums'
			]
		}
	];
</script>

<SectionLayout>
	<h2 class="text-left"><OutlinedText text="OUR" className="mt-4" /> SERVICES</h2>
	<!-- <Slider /> -->
	<div class="w-full flex flex-col justify-between items-center gap-4 py-16 pb-8">
		{#each services as service}
			<HomeServiceCard {service} />
		{/each}
	</div>
</SectionLayout>
