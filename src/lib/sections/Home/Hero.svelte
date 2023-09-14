<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

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
	});
</script>

<SectionLayout type="wrapper" className="py-0">
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
					<div class="relative md:mt-10 h-[80px] md:h-[100px] xl:h-[140px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute">
							<OutlinedText text="Entertain." className="text-reveal" /> <br />
						</h1>
					</div>
					<div class="relative md:mt-6 h-[80px] md:h-[100px] xl:h-[140px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute uppercase">
							<OutlinedText text="Evolve." className="text-reveal" /> <br />
						</h1>
					</div>
				</div>
				<!-- <h1 class="text-left uppercase">
					<span class="text-reveal">Engage.</span> <br />
				</h1> -->
				<p class="max-w-[400px] px-4 text-left border-l-2 mt-10 sm:mt-0 md:ml-20">
					Translating Ideas & Imaginations Into Creative Audio-Visual Communication Experiences.
				</p>
			</div>
			<Button className="mt-20">Our Work</Button>
		</div>
	</div>
</SectionLayout>
