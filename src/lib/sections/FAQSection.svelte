<script lang="ts">
	import { slide } from 'svelte/transition';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';

	export let faqs: { question: string; answer: string }[] = [];
	export let title: string = 'Frequently Asked Questions';

	let activeIndex: number | null = null;

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

{#if faqs && faqs.length > 0}
	<SectionLayout className="text-white">
		<div class="flex flex-col md:flex-row gap-10 md:gap-20">
			<div class="md:w-1/3">
				<h3 class="text-3xl md:text-4xl font-bold leading-tight sticky top-24">
					{title}
				</h3>
			</div>
			<div class="md:w-2/3 flex flex-col gap-4">
				{#each faqs as faq, i}
					<div class="border-b border-white/20 last:border-none">
						<button
							class="w-full py-6 flex justify-between items-center text-left group focus:outline-none"
							on:click={() => toggle(i)}
							aria-expanded={activeIndex === i}
						>
							<span
								class="text-xl font-medium group-hover:text-primary transition-colors duration-300"
							>
								{faq.question}
							</span>
							<span
								class="ml-4 transform transition-transform duration-300 {activeIndex === i
									? 'rotate-180'
									: 'rotate-0'}"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</span>
						</button>
						{#if activeIndex === i}
							<div transition:slide={{ duration: 300 }} class="overflow-hidden">
								<div class="pb-6 text-gray-300 leading-relaxed [&_*]:text-left">
									{@html faq.answer}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</SectionLayout>
{/if}
