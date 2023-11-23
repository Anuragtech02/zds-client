<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import { onMount } from 'svelte';
	export let hashtag = '';
	export let quote = '';
	export let url;

	const FACEBOOK_BLUE = '#3b5998';

	const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
	const parametersObject = {
		u: url,
		...(quote !== '' ? { quote } : {}),
		...(hashtag !== '' ? { hashtag } : {})
	};

	const params = Object.entries(parametersObject)
		.filter(([, value]) => value ?? false)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');

	const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;

	function handleClick() {
		const config = {
			height: 550,
			width: 400,
			location: 'no',
			toolbar: 'no',
			status: 'no',
			directories: 'no',
			menubar: 'no',
			scrollbars: 'yes',
			resizable: 'no',
			centerscreen: 'yes',
			chrome: 'yes'
		};
		if (!window) return;
		return window.open(
			urlWithParameters,
			'',
			Object.keys(config)
				.map((key) => `${key}=${config[key]}`)
				.join(',')
		);
	}
</script>

<button on:click={handleClick}><FacebookIcon width={48} /></button>

<style>
	button {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}

	@media (prefers-reduced-motion: reduce) {
		button {
			transition: all 2s ease-in-out;
		}
	}

	button:focus,
	button:hover {
		transform: scale(1.1);
	}
</style>
