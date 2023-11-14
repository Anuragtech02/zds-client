<script lang="ts">
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import ContactForm from '../ContactForm.svelte';
	export let data: any;

	console.log(data);
</script>

<SectionLayout type="wrapper" className="max-w-[100vw] overflow-x-hidden">
	<div class="max-width-container">
		<ContactForm {data} />
	</div>
</SectionLayout>
