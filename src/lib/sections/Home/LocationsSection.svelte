<script lang="ts">
	import Grid from '$lib/icons/Grid.svelte';

	export let locations = [
		{
			name: 'Delhi',
			image: '/images/Delhi.png'
		},
		{
			name: 'Mumbai',
			image: '/images/Mumbai.png'
		},
		{
			name: 'Bangalore',
			image: '/images/Banglore.png'
		},
		{
			name: 'Dubai',
			image: '/images/Dubai.png'
		},
		{
			name: 'Toronto',
			image: '/images/Toronto.png'
		}
	];
</script>

<div
	class="min-h-screen relative flex flex-col justify-around md:justify-start md:gap-32 location-section"
>
	<h2 class="uppercase">Locations</h2>
	<div
		class="locations-container flex justify-between lg:justify-center md:gap-8 flex-wrap items-start gap-[1rem] p-[1rem]"
	>
		{#each locations as { name, image }}
			<div class="location relative overflow-hidden">
				<img src={image} alt={name} />
				<span
					class="location-backdrop absolute top-0 left-0 flex justify-center items-start py-6 h-full w-full"
				>
					<span class="flex justify-center items-center">
						<img src={'/images/mdi_location.svg'} alt="location" />
						<p>{name}</p>
					</span>
				</span>
			</div>
		{/each}
	</div>
	<!-- <img src="/images/Grid.svg" alt="grid" class="background-image" /> -->
	<div class="background-image max-w-[100vw] overflow-x-hidden">
		<Grid />
	</div>
</div>

<style>
	.location-backdrop {
		background: linear-gradient(to right, #ff439e72, #2418d175);
		border-radius: 1rem;
	}
	.location-backdrop p {
		font-weight: bolder;
		font-size: 16px;
	}
	@media screen and (max-width: 350px) {
		.locations-container {
			justify-content: center;
		}
		.location-section {
			gap: 5rem;
		}
	}
	/* .background-image {
		position: absolute;
		bottom: 0;
		right: 0;
		object-fit: cover;
		width: 100%;
		height: 50%;
		z-index: -1;
	} */
	.background-image {
		z-index: -1;
		height: 100%;
		width: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		/* background-image: url('/images/Grid.png'); */
		/* background-repeat: repeat-x; */
		/* background-repeat: no-repeat; */
		/* background-size: 250% 250%; */
		/* background-position: bottom; */
	}
</style>
