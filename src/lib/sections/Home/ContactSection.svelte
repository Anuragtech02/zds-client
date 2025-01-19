<script lang="ts">
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import ContactForm from '../ContactForm.svelte';
	import Button from '$lib/components/Button.svelte';
	export let data: any;
</script>

<SectionLayout type="wrapper" className="max-w-[100vw] overflow-x-hidden !pt-0 sm:!py-[50px]">
	<div class="gradient-1">
		<div
			class="max-width-container w-full flex p-8 justify-between items-center flex-col sm:flex-row"
		>
			<h3 class="uppercase sm:text-left">Liked our work? let&apos;s work together!</h3>
			<Button link="/contact" className="whitespace-nowrap mt-4 sm:mt-0">Contact Us</Button>
		</div>
	</div>
</SectionLayout>
