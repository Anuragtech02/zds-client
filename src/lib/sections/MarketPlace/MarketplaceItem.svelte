<script lang="ts">
	export let item = {
		title: 'Lorem Ipsum Dolor',
		description:
			'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		category: ['Filter1'],
		thumbnail: 'https://picsum.photos/200/300'
	};
</script>

<div class="flex flex-col justify-between items-start gap-4 border rounded-2xl">
	<div class="h-48 w-full rounded-2xl">
		<img
			src={item.thumbnail}
			alt="thumbnail"
			class="w-full h-full object-cover rounded-2xl rounded-b-md"
		/>
	</div>
	<div class="p-4 flex flex-col justify-between items-start gap-4">
		<p class="text-left text-lg">{item.title}</p>
		<p class="text-left">{item.description}</p>
		<button class="px-4 py-2 mb-4 bg-black border rounded-2xl hover:bg-white hover:text-black">
			Buy Now
		</button>
	</div>
</div>
