<script>
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
</script>

<SectionLayout>
	<div class="second-section-home flex flex-col justify-around min-h-screen p-16">
		<div class="mb-auto sm:mb-0 self-start">
			<p class="text-left uppercase md:text-[1.5rem] lg:text-[2rem]">We are Hybrid of</p>
			<h2 class="text-left uppercase">Creative Agency &</h2>
			<span class="gradient-line" />
		</div>
		<div class="mb-auto sm:mb-0 self-end flex flex-col z-[3]">
			<h2 class="text-right sm:text-left uppercase">Content</h2>
			<h2 class="text-right sm:text-left uppercase">Production Studio</h2>
			<span class="gradient-line self-end" />
		</div>
		<a href="/" class="show-reel-btn z-[3]"> Show Reel </a>
		<div class="background-image-vr" />
	</div>
</SectionLayout>

<style>
	.second-section-home {
		position: relative;
		overflow: hidden;
	}
	.background-image-vr {
		z-index: 1;
		background: url(/images/personVR.png) no-repeat bottom;
		background-size: contain;
		height: 75%;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.show-reel-btn {
		align-self: center;
		padding: 1rem 3rem;
		border-radius: 50px;
		border: 1px solid #fff;
		backdrop-filter: blur(10px);
	}
	.gradient-line {
		display: inline-block;
		width: 20%;
		height: 5px;
		background: linear-gradient(to right, #ff439d, #2518d1);
	}
	@media screen and (max-width: 1100px) {
		.background-image-vr {
			background-size: cover;
		}
	}
	@media screen and (max-width: 500px) {
		.second-section-home div h2 {
			font-size: 1.5rem;
		}
		.second-section-home {
			padding: 2rem;
		}
	}
	@media screen and (max-width: 330px) {
		.second-section-home div h2 {
			font-size: 1.5rem;
		}
		.second-section-home {
			padding: 2rem;
		}
	}
</style>
