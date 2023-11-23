<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string = 'Zero Design Studio';
	export let url: string = '';
	export let description: string =
		'We are a creative studio based in New York City. We specialize in design, development, and strategy.';
	export let image: string =
		'https://www.zerodesignstudios.com/wp-content/uploads/2019/12/Zero-Studio-Logo-e1577710110570.png';
	onMount(() => {
		if (typeof window !== 'undefined' && window) {
			url = window.location.href;
		}
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
