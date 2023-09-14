<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

	onMount(() => {
		gsap.from('.text-reveal', {
			duration: 1.5,
			opacity: 0,
			y: '100%',
			stagger: 0.3,
			ease: 'power3.out'
		});
	});
</script>

<SectionLayout type="wrapper">
	<div class="max-width-container">
		<div class="flex flex-col justify-between items-start h-[60vh]">
			<div class="flex justify-between items-start sm:items-end flex-col sm:flex-row gap-10 w-full">
				<div>
					<h1 class="text-left">Engage.</h1>
					<h1 class="text-left">
						<OutlinedText text="Entertain." className="mt-4 text-reveal" /> <br />
					</h1>
					<h1 class="text-left uppercase">
						<OutlinedText text="Evolve." className="mt-4 text-reveal" /> <br />
					</h1>
				</div>
				<!-- <h1 class="text-left uppercase">
					<span class="text-reveal">Engage.</span> <br />
				</h1> -->
				<p class="max-w-[400px] px-4 text-left mt-8 border-l-2">
					Translating Ideas & Imaginations Into Creative Audio-Visual Communication Experiences.
				</p>
			</div>
			<Button>Our Work</Button>
		</div>
	</div>
</SectionLayout>
