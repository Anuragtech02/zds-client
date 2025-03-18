<script lang="ts">
	import { Button } from '$lib/components';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import TextWithBg from '$lib/components/TextWithBG.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	// gsap.registerPlugin(ScrollTrigger);

	export let enableOurTeamCTA: boolean = true;
	const p1 =
		'We are more than just animators; we are storytellers, visionaries, and creators of immersive worlds. Our relentless quest of excellence in the art of animation is at the essence of who we are.';

	onMount(() => {
		const chars = document?.querySelectorAll('.char');
		const portion = 100 / (chars?.length || 1);

		chars?.forEach((char, i) => {
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
</script>

<SectionLayout>
	<div class="flex justify-between lg:items-start xl:items-center gap-6">
		<div>
			<div class="flex justify-between items-center gap-2">
				<div>
					<div class="flex justify-start items-center gap-2 md:gap-8 [&>h3]:text-left flex-wrap">
						<h3 class="w-full sm:w-auto">
							<OutlinedText text="WE" />
							<TextWithBg className="ml-2 md:ml-8">DESIGN</TextWithBg>
						</h3>
						<h3>
							<OutlinedText strokeWidth="w-stroke-1" text="AND" />
							<TextWithBg className="ml-2 md:ml-8">DEVELOP</TextWithBg>
						</h3>
					</div>
					<div
						class="flex justify-start items-center gap-2 md:gap-8 [&>h3:text-left] flex-wrap mt-4 sm:mt-0"
					>
						<h3>
							<OutlinedText strokeWidth="w-stroke-1" text="CONTENT" />
							<OutlinedText className="ml-2 md:ml-8" strokeWidth="w-stroke-1" text="OF" />
						</h3>
						<h3>
							<OutlinedText strokeWidth="w-stroke-1" text="THE" />
							<TextWithBg className="ml-2 md:ml-8">FUTURE</TextWithBg>
						</h3>
					</div>
				</div>
				<div class="w-[25%] mr-0 hidden sm:block md:hidden flex justify-end">
					<img src="/images/about-image.png" alt="about" class="img-float-anim" />
				</div>
			</div>
			<div class="mt-4 [&>p]:text-justify">
				<p class="text-left">
					{#each p1?.split('') as char, index}
						<span class="char" style="transition-delay: {index * 0.05}s"
							>{char === ' ' ? '\u00a0' : char}</span
						>
					{/each}
				</p>
				<p class="text-left mt-4">
					Our journey towards becoming one of the best animation studios in the business has been
					one of dedication, innovation, and a deep-rooted passion.
				</p>
				<p class="text-left mt-4">
					Our team of professionals blend cutting-edge technology with limitless creativity to
					breathe life into your concepts. Whether you're seeking VFX wizardry, stunning animations,
					or visually striking digital art, we've got you covered.
				</p>
			</div>
			{#if enableOurTeamCTA}
				<Button className="mt-8">Our Team</Button>
			{/if}
		</div>
		<div class="hidden md:block lg:w-[40%] xl:w-full">
			<img src="/images/about-image.png" alt="about" class="img-float-anim" />
		</div>
	</div>
</SectionLayout>

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
