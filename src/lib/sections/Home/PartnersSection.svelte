<script>
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<div>
	<SectionLayout>
		<h3 class="uppercase">
			Partners
			<OutlinedText text="we&apos;ve worked with" />
		</h3>
		<div class="w-full rounded-xl border-2 border-borders-500 p-10 mt-8">
			<div class="flex flex-wrap justify-betwen items-center gap-8">
				<div class="w-[300px] h-[150px] bg-white/100" />
				<div class="w-[300px] h-[150px] bg-white/100" />
				<div class="w-[300px] h-[150px] bg-white/100" />
				<div class="w-[300px] h-[150px] bg-white/100" />
				<div class="w-[300px] h-[150px] bg-white/100" />
				<div class="w-[300px] h-[150px] bg-white/100" />
			</div>
		</div>
	</SectionLayout>
</div>
