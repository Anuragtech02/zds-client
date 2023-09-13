<script>
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<SectionLayout type="wrapper">
	<div class="max-width-container">
		<div class="flex flex-col justify-between items-start h-[60vh]">
			<div class="flex justify-between items-end gap-10 w-full">
				<div>
					<h1 class="text-left uppercase">
						<span>Engage.</span> <br />
						<OutlinedText text="Entertain." className="mt-4" /> <br />
						<OutlinedText text="Evolve." className="mt-4" /> <br />
					</h1>
				</div>
				<p class="max-w-[400px] px-4 text-left mt-8 border-l-2">
					Translating Ideas & Imaginations Into Creative Audio-Visual Communication Experiences.
				</p>
			</div>
			<Button>Our Work</Button>
		</div>
	</div>
</SectionLayout>
