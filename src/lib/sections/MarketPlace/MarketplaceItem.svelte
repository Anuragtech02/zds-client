<script lang="ts">
	import Cart from '$lib/icons/Cart.svelte';

	export let item = {
		title: 'Lorem Ipsum Dolor',
		description:
			'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		category: ['Filter1'],
		thumbnail:
			'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	};
	let isHovered = false;
</script>

<div class="flex flex-col justify-between items-start gap-4 border border-[#3A3A3A] rounded-2xl">
	<div class="h-48 md:h-64 w-full rounded-2xl">
		<img
			src={item.thumbnail}
			alt="thumbnail"
			class="w-full h-full object-cover rounded-2xl rounded-b-md"
		/>
	</div>
	<div class="p-4 flex flex-col justify-between items-start gap-4">
		<p class="text-left text-lg">{item.title}</p>
		<p class="text-left text-gray-400">{item.description}</p>
		<button
			on:mouseenter={(e) => (isHovered = true)}
			on:mouseleave={(e) => (isHovered = false)}
			class="flex justify-between items-center gap-2 px-8 py-2 mb-4 bg-black border rounded-3xl hover:bg-white hover:text-black"
		>
			<Cart color={isHovered ? 'black' : 'white'} /> Buy Now
		</button>
	</div>
</div>
