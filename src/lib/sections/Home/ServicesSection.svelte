<script>
	import { goto } from '$app/navigation';
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
			<div
				role="button"
				tabindex="0"
				on:keypress={() => {
					goto(`/service/${service.id}`);
				}}
				on:click={() => {
					goto(`/service/${service.id}`);
				}}
				class="w-full flex flex-col md:flex-row justify-between items-center border border-[#3A3A3A] p-8 rounded-md"
			>
				<p class="md:w-1/2 pl-2 xl:pl-8 text-left text-lg lg:text-2xl">
					{service.title}
				</p>
				<div class="md:w-1/2 flex flex-col items-center justify-center md:items-start">
					<img src={service.icon} class="h-20 w-20 lg:h-28 lg:w-28" alt="" />
					<ul class="flex flex-wrap gap-2 items-center">
						{#each service.services as s, i}
							<li class="text-sm">
								{#if i != 0}
									•
								{/if}{s}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</SectionLayout>
