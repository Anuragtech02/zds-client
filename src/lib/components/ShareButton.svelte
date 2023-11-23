<script lang="ts">
	export let title: string = '';
	export let url = '';
	export let siteTitle: string = '';
	let webShareAPISupported = false;
	$: {
		if (typeof window !== 'undefined' && window)
			webShareAPISupported = window && typeof navigator.share !== 'undefined';
	}

	$: handleWebShare;
	const handleWebShare = async () => {
		try {
			navigator.share({
				title,
				text: `Shared from ${siteTitle}`,
				url
			});
		} catch (error) {
			webShareAPISupported = false;
		}
	};
</script>

{#if webShareAPISupported}
	<button on:click={handleWebShare}>Share</button>
{/if}
