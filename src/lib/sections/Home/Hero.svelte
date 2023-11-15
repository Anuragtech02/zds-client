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
	let activeWordIdx = 0;
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

		// timer to update active word
		setInterval(() => {
			activeWordIdx = activeWordIdx === heading.length - 1 ? 0 : activeWordIdx + 1;
			// change the margin to pand bottom of .left-reveal using gsap
			if (activeWordIdx === 0 && container?.style) {
				// container.style.alignItems = 'flex-start';
			} else if (activeWordIdx === 1 && container?.style) {
				// container.style.alignItems = 'center';
			} else if (activeWordIdx === 2 && container?.style) {
				// container.style.alignItems = 'flex-end';
			}
		}, 3000);
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
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20 transition-all duration-300 ease-out"
							class:opacity-0={activeWordIdx !== 0}
							class:opacity-100={activeWordIdx === 0}
						>
							<p class="left-reveal px-4 text-left w-full min-w-[100%]">
								{description[activeWordIdx]}
							</p>
						</div>
					</div>
					<div class="flex justify-start items-center h-full w-full">
						<div
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20 transition-all duration-300 ease-out"
							class:opacity-0={activeWordIdx !== 1}
							class:opacity-100={activeWordIdx === 1}
						>
							<p class="left-reveal px-4 text-left w-full min-w-[100%]">
								{description[activeWordIdx]}
							</p>
						</div>
					</div>
					<div class="flex justify-start items-center h-full w-full">
						<div
							class="overflow-hidden border-l-2 max-w-[400px] w-full mt-10 sm:mt-0 md:ml-20 transition-all duration-300 ease-out"
							class:opacity-0={activeWordIdx !== 2}
							class:opacity-100={activeWordIdx === 2}
						>
							<p class="left-reveal px-4 text-left w-full min-w-[100%]">
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
