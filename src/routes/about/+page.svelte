<script lang="ts">
	import { Button } from '$lib/components';
	import MemberCard from '$lib/components/MemberCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import TextWithBg from '$lib/components/TextWithBG.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions.js';
	import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import CheckerLottieAnimation from './CheckerLottieAnimation.svelte';
	import DecorationLeft from '$lib/components/DecorationLeft.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';

	// gsap.registerPlugin(ScrollTrigger);
	export let data;
	console.log(data);
	let title = data.About_Title;
	let description = data.About_Description;
	let image = getImageUrl(data.Image);

	export let enableOurTeamCTA: boolean = true;
	const p1 = description;
	// onMount(() => {
	// 	const chars = document.querySelectorAll('.char');
	// 	const portion = 100 / chars.length;

	// 	chars.forEach((char, i) => {
	// 		gsap.to(char, {
	// 			color: 'white',
	// 			scrollTrigger: {
	// 				scrub: true,
	// 				start: `${portion * i}% top`,
	// 				end: `${portion * (i + 1)}% top`
	// 			}
	// 		});
	// 	});

	// 	// img float animation
	// 	gsap.to('.img-float-anim', {
	// 		y: 20,
	// 		duration: 2,
	// 		repeat: -1,
	// 		yoyo: true,
	// 		ease: 'power1.inOut'
	// 	});
	// });
	let members = data.Team_Members.data.map((member: any) => ({
		title: member.attributes.Good_At,
		name: member.attributes.Name,
		role: member.attributes.Designation,
		image: getImageUrl(member.attributes.Image),
		linkedIn: member?.attributes?.LinkedIn
	}));
	const teamMembers = members;
</script>

<div class="flex justify-between lg:items-start xl:items-center gap-6 pb-24">
	<div>
		<div class="flex justify-between items-center gap-2">
			<div>
				<div class="flex justify-start items-center gap-2 md:gap-8 [&>h3]:text-left flex-wrap">
					<h3 class="w-full sm:w-auto">
						<OutlinedText text="ZERO DESIGN" />
						<OutlinedText text="STUDIO IS A" />
						<TextWithBg>MULTIDISCIPLINARY</TextWithBg>
						<OutlinedText strokeWidth="w-stroke-1" text="EXPERIENCE" />
						<TextWithBg>DESIGN</TextWithBg>
						<OutlinedText strokeWidth="w-stroke-1" text="COMPANY" />
					</h3>
				</div>
			</div>
			<div class="w-[25%] mr-0 hidden sm:block md:hidden flex justify-end">
				<img src={image} alt="about" />
			</div>
		</div>
		<div class="mt-12 [&>p]:text-left">
			<p class="text-left capitalize">
				<!-- {#each p1.split('') as char, index}
					<span class="char" style="transition-delay: {index * 0.05}s"
						>{char === ' ' ? '\u00a0' : char}</span
					>
				{/each} -->
				{p1}
			</p>
		</div>
	</div>
	<div class="hidden md:block lg:w-[40%] xl:w-full">
		<img src={image} alt="about" />
	</div>
</div>

<div class="relative overflow-hidden py-8 pt-0">
	<h3 class="text-left">
		<OutlinedText text="OUR" />
		TEAM
	</h3>
	<div
		class="bg-transparent relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-8 py-8"
	>
		{#each teamMembers as member}
			<MemberCard {member} />
		{/each}
	</div>
</div>
<FloatingActionButton />

<style>
	.char {
		display: inline-block;
		transition: color 0.5s;
		color: black;
	}
	.char.highlight {
		color: white;
	}
</style>
