<script lang="ts">
	export let video;
	console.log(video);
	let heading = video.title;
	let category = video.category;
	let src = video.thumbnail;
</script>

<div class="item">
	<div class="item-content">
		<div class="h-full w-full relative">
			<p class="absolute top-0 left-0 w-full p-2 px-4 text-left backdrop-blur rounded-t-xl">
				{heading}
			</p>
			<img {src} alt="img" class="rounded-xl object-cover h-full w-full" />
			<p class="absolute bottom-2 left-2 rounded-2xl px-4 py-1 backdrop-blur">
				{category}
			</p>
		</div>
	</div>
</div>

<style>
	.item {
		display: block;
		position: absolute;
		width: 550px;
		aspect-ratio: 2;
		margin: 1rem;
		z-index: 1;
		background: #000;
		color: #fff;
	}
	@media screen and (min-width: 1550px) {
		.item {
			width: 600px;
			margin: 2rem;
		}
	}

	@media screen and (min-width: 1850px) {
		.item {
			width: 700px;
			margin: 2rem;
		}
	}

	@media screen and (max-width: 750px) {
		.item {
			width: 500px;
			margin: 1rem 0;
		}
	}

	@media screen and (max-width: 550px) {
		.item {
			width: 400px;
			margin: 1rem 0;
		}
	}
	@media screen and (max-width: 450px) {
		.item {
			width: 300px;
			margin: 1rem 0;
		}
	}

	.item.muuri-item-dragging {
		z-index: 3;
	}
	.item.muuri-item-releasing {
		z-index: 2;
	}
	.item.muuri-item-hidden {
		z-index: 0;
	}
	.item-content {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
