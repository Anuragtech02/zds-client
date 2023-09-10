<script lang="ts">
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import TextWithBg from '$lib/components/TextWithBG.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<SectionLayout>
	<div class="flex justify-start items-center">
		<OutlinedText
			className="w-[100px] min-w-[100px]"
			viewBox="0 0 130 50"
			strokeWidth="stroke-1"
			text="WE"
		/>
		<TextWithBg className="ml-8">DESIGN</TextWithBg>
		<OutlinedText
			className="w-[130px] min-w-[130px] ml-8"
			viewBox="0 0 185 50"
			strokeWidth="stroke-1"
			text="AND"
		/>
		<TextWithBg className="ml-8">DEVELOP</TextWithBg>
	</div>
	<br />
	<div class="flex justify-start items-center gap-8">
		<OutlinedText
			className="w-[320px] min-w-[320px]"
			viewBox="0 0 430 50"
			strokeWidth="stroke-1"
			text="CONTENT"
		/>
		<OutlinedText
			className="w-[90px] min-w-[90px]"
			viewBox="0 0 120 50"
			strokeWidth="stroke-1"
			text="OF"
		/>
		<OutlinedText
			className="w-[120px] min-w-[120px]"
			viewBox="0 0 180 50"
			strokeWidth="stroke-1"
			text="THE"
		/>
		<TextWithBg>FUTURE</TextWithBg>
	</div>
</SectionLayout>
