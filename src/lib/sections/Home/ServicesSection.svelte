<script>
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	let services = [
		{
			title: 'Multimedia Productions',
			icon: 'https://ik.imagekit.io/avy76kxdy/Untitled%20design%20(2)%201.png?updatedAt=1697710985547',
			services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
		},
		{
			title: 'Multimedia Productions',
			icon: 'https://ik.imagekit.io/avy76kxdy/Untitled%20design%20(2)%201.png?updatedAt=1697710985547',
			services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
		},
		{
			title: 'Multimedia Productions',
			icon: 'https://ik.imagekit.io/avy76kxdy/Untitled%20design%20(2)%201.png?updatedAt=1697710985547',
			services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
		},
		{
			title: 'Multimedia Productions',
			icon: 'https://ik.imagekit.io/avy76kxdy/Untitled%20design%20(2)%201.png?updatedAt=1697710985547',
			services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
		}
	];
</script>

<SectionLayout>
	<h2 class="text-left"><OutlinedText text="OUR" className="mt-4" /> SERVICES</h2>
	<!-- <Slider /> -->
	<div class="w-full flex flex-col justify-between items-center gap-4 py-16 pb-8">
		{#each services as service}
			<div class="flex justify-between items-center border p-8 rounded-md">
				<p class="w-1/2">
					{service.title}
				</p>
				<div class="w-1/2">
					<img src={service.icon} class="h-16 w-16" alt="" />
					<ul class="flex flex-wrap gap-2 items-center">
						{#each service.services as s, i}
							<li class="text-sm">{s}</li>
							{#if i != service.services.length - 1}
								•
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</SectionLayout>
