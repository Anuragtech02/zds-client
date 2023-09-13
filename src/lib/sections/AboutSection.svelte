<script lang="ts">
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import TextWithBg from '$lib/components/TextWithBG.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<SectionLayout>
	<div class="flex justify-between items-center">
		<div>
			<div>
				<div class="flex justify-start items-center gap-8">
					<h2>
						<OutlinedText viewBox="0 0 130 50" text="WE" />
						<TextWithBg className="ml-6">DESIGN</TextWithBg>
					</h2>
					<h2>
						<OutlinedText strokeWidth="w-stroke-1" text="AND" />
					</h2>
					<h2>
						<TextWithBg>DEVELOP</TextWithBg>
					</h2>
				</div>
				<div class="flex justify-start items-center gap-8">
					<h2>
						<OutlinedText strokeWidth="w-stroke-1" text="CONTENT" />
					</h2>
					<h2>
						<OutlinedText strokeWidth="w-stroke-1" text="OF" />
					</h2>
					<h2>
						<OutlinedText strokeWidth="w-stroke-1" text="THE" />
					</h2>
					<h2>
						<TextWithBg>FUTURE</TextWithBg>
					</h2>
				</div>
			</div>
			<div class="mt-4">
				<p class="text-left">
					We are more than just animators; we are storytellers, visionaries, and creators of
					immersive worlds. Our relentless quest of excellence in the art of animation is at the
					essence of who we are.
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
		</div>
		<img src="/images/about-image.png" alt="about" />
	</div>
</SectionLayout>
