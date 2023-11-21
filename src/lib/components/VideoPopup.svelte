<script>
	import { popupStore } from '$lib/stores/popup.store';

	export let videoUrl =
		'https://assets.adidas.land/alts/site/chapter-2/video/alts-by-adidas-chapter-2-d.mp4';

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
	<div
		class="max-w-[1200px] max-h-[80vh] w-full border border-accent-1 rounded-md overflow-hidden"
		role="dialog"
		aria-modal="true"
		aria-label="Video Player"
		on:click={(e) => {
			e.stopPropagation();
		}}
		tabindex="-1"
	>
		<video src={videoUrl} controls class="h-full w-full object-contain" autoplay>
			<track kind="captions" />
		</video>
	</div>
</div>
