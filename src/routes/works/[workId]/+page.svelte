<script>
	let heading = 'Lorem Ipsum is simply dummy text of the printing and typesetting.';
	let description =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
	let images = [
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	];
</script>

<div>
	<div class="text-left w-3/4 flex flex-col justify-between gap-4">
		<h4 class="text-left">
			{heading}
		</h4>
		<p class="text-left">
			{description}
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
		<img
			src={images[0]}
			alt="Image 1"
			class="col-span-2 md:col-span-2 max-h-[500px] w-full object-cover"
		/>
		<img
			src={images[1]}
			alt="Image 2"
			class="col-span-2 md:col-span-1 max-h-[500px] w-full object-cover"
		/>
		<img
			src={images[2]}
			alt="Image 3"
			class="col-span-2 md:col-span-1 max-h-[500px] w-full object-cover"
		/>
		<img
			src={images[2]}
			alt="Image 3"
			class="col-span-2 md:col-span-2 max-h-[500px] w-full object-cover"
		/>
		<img
			src={images[3]}
			alt="Image 4"
			class="col-span-2 md:col-span-2 max-h-[500px] w-full object-cover"
		/>
		<!-- Add more images as needed -->
	</div>
</div>
