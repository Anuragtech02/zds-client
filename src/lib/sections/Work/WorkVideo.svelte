<script lang="ts">
	let heading = 'Lorem Ipsum Dolor';
	let category = 'Animation & Visual Packaging';
	let src = '/sample_videos/sample_video.mp4';
</script>

<div class="h-full lg:w-[47%] relative">
	<p class="absolute top-0 left-0 w-full p-2 px-4 text-left backdrop-blur rounded-t-xl">
		{heading}
	</p>
	<video {src} loop autoplay muted class="rounded-xl object-cover" />
	<p class="absolute bottom-2 left-2 rounded-2xl px-4 py-1 backdrop-blur">
		{category}
	</p>
</div>
