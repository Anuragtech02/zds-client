<script lang="ts">
	import { Button } from '$lib/components';
	import MemberCard from '$lib/components/MemberCard.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import TextWithBg from '$lib/components/TextWithBG.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	// gsap.registerPlugin(ScrollTrigger);

	export let enableOurTeamCTA: boolean = true;
	const p1 =
		'we excel in curating captivating, entertaining, and evolving experiences that span the realms of content, events, digital media, and more.';

	onMount(() => {
		const chars = document.querySelectorAll('.char');
		const portion = 100 / chars.length;

		chars.forEach((char, i) => {
			gsap.to(char, {
				color: 'white',
				scrollTrigger: {
					scrub: true,
					start: `${portion * i}% top`,
					end: `${portion * (i + 1)}% top`
				}
			});
		});

		// img float animation
		gsap.to('.img-float-anim', {
			y: 20,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});
	});
	const teamMembers = [
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		},
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		},
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		},
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		},
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		},
		{
			title: 'The Catalyst',
			name: 'Shubham Choubey',
			role: 'Founder & Creative director',
			image:
				'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
			linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
		}
	];
</script>

<div class="flex justify-between lg:items-start xl:items-center gap-6 pb-24">
	<div>
		<div class="flex justify-between items-center gap-2">
			<div>
				<div class="flex justify-start items-center gap-2 md:gap-8 [&>h3]:text-left flex-wrap">
					<h3 class="w-full sm:w-auto">
						<OutlinedText text="ZERO DESIGN STUDIO IS A" />
						<TextWithBg>MULTIDISCIPLINARY</TextWithBg>
						<OutlinedText strokeWidth="w-stroke-1" text="EXPERIENCE" />
						<TextWithBg className="ml-2 md:ml-8">DESIGN</TextWithBg>
						<OutlinedText strokeWidth="w-stroke-1" text="COMPANY" />
					</h3>
				</div>
			</div>
			<div class="w-[25%] mr-0 hidden sm:block md:hidden flex justify-end">
				<img src="/images/about-image.png" alt="about" class="img-float-anim" />
			</div>
		</div>
		<div class="mt-4 [&>p]:text-justify">
			<p class="text-left">
				{#each p1.split('') as char, index}
					<span class="char" style="transition-delay: {index * 0.05}s"
						>{char === ' ' ? '\u00a0' : char}</span
					>
				{/each}
			</p>
		</div>
	</div>
	<div class="hidden md:block lg:w-[40%] xl:w-full">
		<img src="/images/about-image.png" alt="about" class="img-float-anim" />
	</div>
</div>

<div class="relative overflow-hidden py-8">
	<div
		class="absolute right-0 top-2 h-[40%] w-[50%]"
		style="background-image: url(/images/net-bg.png);"
	/>
	<h3 class="text-left">
		<OutlinedText text="OUR" />
		TEAM
	</h3>
	<div
		class="bg-transparent relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
	>
		{#each teamMembers as member}
			<MemberCard {member} />
		{/each}
	</div>
</div>
<div class="relative">
	<div
		style="background-image: url(/images/decoration-left.png);"
		class="absolute h-80 -top-[38rem] z-[-1] w-40 -left-32"
	/>
</div>

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
