<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';

	export let Facebook: Boolean = false;
	export let Instagram: Boolean = false;
	export let Youtube: Boolean = false;
	export let Vimeo: Boolean = false;
</script>

<main>
	<span class="flex flex-row justify-center items-center gap-8">
		{#if Facebook}
			<FacebookIcon width={26} height={26} />
		{/if}
		{#if Instagram}
			<InstagramIcon width={26} height={26} />
		{/if}
		{#if Youtube}
			<YoutubeIcon width={32} height={32} />
		{/if}
		{#if Vimeo}
			<VimeoIcon width={26} height={26} />
		{/if}
	</span>
</main>
