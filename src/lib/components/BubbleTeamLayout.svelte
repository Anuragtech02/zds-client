<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

	gsap.registerPlugin(ScrollTrigger);

	export let members: {
		name: string;
		image: string;
		role: string;
		title: string;
		linkedIn?: string;
	}[];

	let container: HTMLElement;

	const colors = [
		'#D7B4B4', // muted pink
		'#68A6A6', // muted turquoise
		'#9999BB', // muted purple
		'#BBAA77', // muted gold
		'#A6A6A6' // muted grey
	];

	const getRandomRotation = () => Math.random() * 40 - 20;
	const getRandomOffset = () => Math.random() * 100 - 50;

	onMount(() => {
		const bubbles = container?.querySelectorAll('.background-bubble');
		bubbles?.forEach((bubble) => {
			gsap.to(bubble, {
				y: getRandomOffset(),
				x: getRandomOffset(),
				scrollTrigger: {
					trigger: container,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1.5
				}
			});
		});
	});
</script>

<!-- Full-width container for background -->
<div class="relative w-full min-h-[800px]" bind:this={container}>
	<!-- Background Bubbles Layer - Full width -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		{#each Array(12) as _, i}
			<div
				class="background-bubble absolute rounded-full opacity-30"
				style="
            width: 300px;
            height: 300px;
            background-color: {colors[i % colors.length]};
            left: {(i % 4) * 33}%;
            top: {Math.floor(i / 4) * 33}%;
            transform: translate(-50%, -50%) rotate({getRandomRotation()}deg);
            will-change: transform;
            z-index: 1;
          "
			/>
		{/each}
	</div>

	<!-- Contained section for team members -->
	<SectionLayout className="py-[50px] relative z-50">
		<!-- Team Members Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
			{#each members as member, i}
				<div class="group relative aspect-square">
					<div
						class="member-card absolute inset-0 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-0 overflow-hidden rounded-full"
						style="transform: rotate({getRandomRotation()}deg)"
					>
						<!-- Member Image Container -->
						<div class="absolute inset-0 rounded-full overflow-hidden z-[2]">
							<img
								src={member.image}
								alt={member.name}
								class="w-full h-full object-cover object-center"
							/>
							<div
								class="bg-gray-400 w-[90%] aspect-square absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full -z-[2]"
							/>
						</div>

						<div
							class="absolute top-[100%] left-1/2 -translate-x-1/2 group-hover:top-0 transition-all duration-300 z-[1] w-[200px]"
						>
							<img
								src="https://res.cloudinary.com/dccjqha6a/image/upload/v1701106728/zds_logo_ef2db07d5b.png"
								class="w-full aspect-square"
								alt=""
							/>
						</div>

						<!-- Hover Overlay -->
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[2]"
						>
							<div
								class="h-full flex flex-col items-center justify-end text-white p-4 pb-10 max-w-[90%] w-full mx-auto"
							>
								<p class="font-bold text-base">{member.name}</p>
								<p class="opacity-80 text-sm">{member.role}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</SectionLayout>
</div>

<style>
	:global(body) {
		background-color: #000;
		color: white;
	}

	.member-card {
		will-change: transform;
	}

	.member-card:hover {
		z-index: 60;
	}
</style>
