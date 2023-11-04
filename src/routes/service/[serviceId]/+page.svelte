<script>
	import { goto } from '$app/navigation';

	const services = [
		{
			id: 1,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		},
		{
			id: 2,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		},
		{
			id: 3,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		},
		{
			id: 4,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		},
		{
			id: 5,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		},
		{
			id: 6,
			title: 'Animation &  Visual Packaging',
			icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
			description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
			image:
				'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
		}
	];

	export let data;
</script>

<div class="mt-[-8rem]">
	<div
		style="background-image: url({data.image});"
		class="h-[300px] lg:h-[500px] bg-no-repeat bg-center rounded-md relative"
	>
		<button>
			<img
				src="/images/Polygon14.png"
				alt=""
				class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-8 w-8"
			/>
		</button>
	</div>
	<div class="desc-box flex flex-col justify-between gap-8 text-lg py-16 items-start text-left">
		{@html data.description}
	</div>
	<div>
		<h5 class="text-left">OTHER SERVICES</h5>
		<div class="w-full flex py-8 gap-4 overflow-x-auto">
			{#each services as service}
				<div
					role="button"
					tabindex="0"
					on:keypress={() => {
						goto(`/service/${service.id}`);
					}}
					on:click={() => {
						goto(`/service/${service.id}`);
					}}
					class={`cursor-pointer h-[8rem] rounded-md w-[12rem] p-4 gap-2 flex flex-col justify-start items-start bg-[#FFFFFF1A] ${
						service.id == data.id ? 'border-2' : ''
					}`}
				>
					<img src={service.icon} class="h-8 w-8" alt="" />
					<p class="text-sm">{service.title}</p>
				</div>
			{/each}
		</div>
		<div />
	</div>
</div>

<style>
	div {
		font-family: 'Montserrat', sans-serif;
	}
</style>
