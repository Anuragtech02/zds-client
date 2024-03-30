<script lang="ts">
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import ContactForm from '$lib/sections/ContactForm.svelte';
	export let data;

	let formData = data?.Form;
</script>

<SectionLayout className="pt-0 pb-[50px]">
	<p class="text-left my-16 mb-16">
		{data?.description}
	</p>
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<ContactForm data={formData} />
</SectionLayout>
<FloatingActionButton />
