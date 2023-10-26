<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	onMount(() => {
		gsap.from('.text-reveal', 1.8, {
			y: 100,
			ease: 'power4.out',
			delay: 0.2,
			skewY: 7,
			stagger: {
				amount: 0.3
			}
		});

		// fade in up btn
		gsap.to('.our-work-btn', 1.8, {
			y: 0,
			ease: 'power4.out',
			delay: 0.3,
			opacity: 1
		});

		// left reveal
		gsap.from('.left-reveal', 1.8, {
			x: -100,
			ease: 'power4.out',
			delay: 0.4,
			opacity: 0
		});
	});
</script>

<SectionLayout type="wrapper" padding="pt-[50px]" className="py-0">
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<div class="max-width-container relative z-[1] flex justify-between items-center h-screen">
		<div class="flex flex-col justify-between items-start w-full">
			<div class="flex justify-start items-start sm:items-end flex-col sm:flex-row w-full">
				<div class="w-full uppercase flex flex-col justify-center items-start">
					<div class="relative h-[70px] md:h-[80px] lg:h-[100px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute">Engage.</h1>
					</div>
					<div class="relative md:mt-12 h-[80px] md:h-[100px] xl:h-[140px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute">
							<OutlinedText text="Entertain." className="text-reveal" /> <br />
						</h1>
					</div>
					<div class="relative md:mt-4 h-[80px] md:h-[100px] xl:h-[130px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute uppercase">
							<OutlinedText text="Evolve." className="text-reveal" /> <br />
						</h1>
					</div>
				</div>
				<div class="overflow-hidden border-l-2 max-w-[400px] mt-10 sm:mt-0 md:ml-20">
					<p class="left-reveal px-4 text-left w-full">
						Translating Ideas & Imaginations Into Creative Audio-Visual Communication Experiences.
					</p>
				</div>
			</div>
			<Button className="mt-20 our-work-btn translate-y-[100px] opacity-0" link="/work"
				>Our Work</Button
			>
		</div>
	</div>
</SectionLayout>
