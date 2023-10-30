<script lang="ts">
	export let video;
	console.log(video);
	let heading = video.title;
	let category = video.category;
	let src = video.thumbnail;
	export let fixedWidth = true;
	export let absolute = true;
</script>

<div
	class={`item ${fixedWidth ? 'w-[300px] m-6 responsive-item' : 'w-full'} ${
		absolute ? 'absolute' : ''
	}`}
>
	<div class="item-content">
		<div class="h-full w-full relative">
			<p class="absolute top-0 left-0 w-full p-2 px-4 text-left backdrop-blur rounded-t-xl">
				{heading}
			</p>
			<button class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-4 w-4">
				<img src="/images/Polygon14.png" alt="" />
			</button>
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

		aspect-ratio: 2;
		z-index: 1;
		background: #000;
		color: #fff;
	}
	@media screen and (min-width: 450px) {
		.item.responsive-item {
			width: 300px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 550px) {
		.item.responsive-item {
			width: 400px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 750px) {
		.item.responsive-item {
			width: 500px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 1250px) {
		.item.responsive-item {
			width: 40%;
			margin: 2rem;
		}
	}

	@media screen and (min-width: 1850px) {
		.item.responsive-item {
			width: 700px;
			margin: 2rem;
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
