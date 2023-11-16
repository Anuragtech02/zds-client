<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import ShowreelPopup from '$lib/components/ShowreelPopup.svelte';
	import { popupStore } from '$lib/stores/popup.store';

	export let data: any;

	let container: HTMLDivElement;
	let activeWordIdx: number;
	let heading: string[] = [];
	let description: string[] = [];
	let Title: string, Description: string, CTAText: string, CTALink: string, Background_Video;
	// const { Title, Description, CTAText, CTALink, Background_Video } = data;
	// console.log(data);
	Title = data?.Title || '';
	Description = data?.Description || '';
	CTAText = data?.CTAText || '';
	CTALink = data?.CTALink || '';
	Background_Video = data?.Background_Video || '';

	heading = Title.split(',');
	description = Description.split(',');
	let previousActiveWordIdx = -1;

	$: activeWordIdx !== undefined &&
		gsap.from(`.left-reveal-${activeWordIdx + 1}`, 1.8, {
			x: -100,
			ease: 'power4.out',
			delay: 0.4,
			opacity: 0
		});

	onMount(() => {
		activeWordIdx = 0;
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
		// gsap.from('.left-reveal-1', 1.8, {
		// 	x: -100,
		// 	ease: 'power4.out',
		// 	delay: 0.4,
		// 	opacity: 0
		// });

		// timer to update active word
		setInterval(() => {
			activeWordIdx = activeWordIdx === heading.length - 1 ? 0 : activeWordIdx + 1;
		}, 3000);

		// let previousActiveWordIdx = -1;
	});
	// GSAP animation functions
	// function animateIn(textElement: string) {
	// 	gsap.to(textElement, {
	// 		opacity: 1,
	// 		x: 0,
	// 		ease: 'power4.out',
	// 		duration: 1.8
	// 	});
	// }

	// function animateOut(textElement: string) {
	// 	gsap.to(textElement, {
	// 		opacity: 0,
	// 		x: -100,
	// 		ease: 'power4.in',
	// 		duration: 1.8
	// 	});
	// }
	// $: if (activeWordIdx !== undefined) {
	// 	if (previousActiveWordIdx !== -1) {
	// 		// Animate out the previous text element
	// 		if (previousActiveWordIdx === 0) animateOut('.left-reveal-1');
	// 		else if (previousActiveWordIdx === 1) animateOut('left-reveal-2');
	// 		else if (previousActiveWordIdx === 2) animateOut('left-reveal-3');
	// 	}

	// 	// Animate in the new text element
	// 	if (activeWordIdx === 0) animateIn('.left-reveal-1');
	// 	else if (activeWordIdx === 1) animateIn('left-reveal-2');
	// 	else if (activeWordIdx === 2) animateIn('left-reveal-3');

	// 	previousActiveWordIdx = activeWordIdx;
	// }
</script>

<SectionLayout type="wrapper" padding="pt-[50px]" className="py-0">
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<div class="max-width-container relative z-[1] flex justify-between items-center h-screen">
		<div class="flex flex-col justify-between items-start w-full">
			<div class="flex justify-start items-stretch flex-col sm:flex-row w-full">
				<div class="w-full uppercase flex flex-col justify-center items-start">
					<div class="relative h-[70px] md:h-[80px] lg:h-[100px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute">
							<OutlinedText
								text={heading[0]}
								className="text-reveal"
								isActive={activeWordIdx === 0}
							/> <br />
						</h1>
					</div>
					<div class="relative md:mt-8 h-[80px] md:h-[100px] xl:h-[140px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute">
							<OutlinedText
								text={heading[1]}
								className="text-reveal"
								isActive={activeWordIdx === 1}
							/> <br />
						</h1>
					</div>
					<div class="relative md:mt-4 h-[80px] md:h-[100px] xl:h-[130px] w-full overflow-hidden">
						<h1 class="text-reveal text-left absolute uppercase">
							<OutlinedText
								text={heading[2]}
								className="text-reveal"
								isActive={activeWordIdx === 2}
							/> <br />
						</h1>
					</div>
				</div>
				<div class="flex flex-col justify-between w-full">
					<div class="flex justify-start items-center h-full w-full">
						<div
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20"
							class:opacity-0={activeWordIdx !== 0}
							class:opacity-100={activeWordIdx === 0}
						>
							<p class="left-reveal-1 px-4 text-left w-full min-w-[100%]">
								{description[activeWordIdx]}
							</p>
						</div>
					</div>
					<div class="flex justify-start items-center h-full w-full">
						<div
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20"
							class:opacity-0={activeWordIdx !== 1}
							class:opacity-100={activeWordIdx === 1}
						>
							<p class="left-reveal-2 px-4 text-left w-full min-w-[100%]">
								{description[activeWordIdx]}
							</p>
						</div>
					</div>
					<div class="flex justify-start items-center h-full w-full">
						<div
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20"
							class:opacity-0={activeWordIdx !== 2}
							class:opacity-100={activeWordIdx === 2}
						>
							<p class="left-reveal-3 px-4 text-left w-full min-w-[100%]">
								{description[activeWordIdx]}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Button
				className="mt-20 our-work-btn translate-y-[100px] opacity-0"
				onClick={() => {
					$popupStore.isShowreelOpen = true;
				}}>{CTAText}</Button
			>
		</div>
	</div>

	{#if $popupStore.isShowreelOpen}
		<ShowreelPopup />
	{/if}
</SectionLayout>
