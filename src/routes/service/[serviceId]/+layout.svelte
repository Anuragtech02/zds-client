<script>
	import PageLayout from '$lib/layout/PageLayout.svelte';
	export let data;
</script>

<PageLayout title={data.title} icon={data.icon} description={''} bgImage="">
	<img
		src="/images/hero-gradient.png"
		alt="hero-gradient"
		class="absolute top-0 -left-[150px] pointer-events-none z-[0]"
	/>
	<slot />
</PageLayout>
