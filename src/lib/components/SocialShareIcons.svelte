<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { Socials } from '$lib/types/components';

	const ComponentConfig = {
		Facebook: FacebookIcon,
		Instagram: InstagramIcon,
		Vimeo: VimeoIcon,
		Youtube: YoutubeIcon
	};

	export let icons: Array<{
		name: Socials;
		link: string;
		width: number;
		height: number;
	}> = (Object.keys(Socials) as Array<keyof typeof Socials>).map((name) => ({
		name: Socials[name],
		link: `https://${name.toLowerCase()}.com`,
		width: 24,
		height: 24
	}));
</script>

<div class="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
	{#each icons as { name, link, width, height }}
		<a href={link}>
			<svelte:component this={ComponentConfig[name]} {width} {height} />
		</a>
	{/each}
</div>
