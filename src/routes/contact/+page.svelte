<script lang="ts">
	import ContactForm from '$lib/sections/ContactForm.svelte';
	export let data;
	console.log(data);
	let formData = data?.Form;
</script>

<p class="text-left my-4 mb-16">
	{data?.description}
</p>
<img
	src="/images/hero-gradient.png"
	alt="hero-gradient"
	class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
/>
<ContactForm data={formData} />
