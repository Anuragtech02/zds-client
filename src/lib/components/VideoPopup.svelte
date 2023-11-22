<script>
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { popupStore } from '$lib/stores/popup.store';
	import { extractVideoID } from '$lib/utils/functions';

	export let videoUrl = 'https://www.youtube.com/watch';
	export let title = 'Showreel';
	let videoId = extractVideoID(videoUrl);
	if (!videoId) {
		videoId = '';
	}
	function handleClose() {
		$popupStore.isShowreelOpen = false;
	}
</script>

<div
	class="fixed inset-0 left-0 top-0 w-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-[1000000]"
	on:click={handleClose}
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	}}
	role="button"
	tabindex="0"
>
	<SectionLayout className="w-full">
		<div
			class="h-[300px] md:h-[500px] xl:h-[80vh] w-full border border-accent-1 rounded-md overflow-hidden"
			role="dialog"
			aria-modal="true"
			aria-label="Video Player"
			on:click={(e) => {
				e.stopPropagation();
			}}
			tabindex="-1"
		>
			<iframe
				class="w-full h-full"
				src="https://www.youtube.com/embed/{videoId}"
				{title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	</SectionLayout>
</div>
