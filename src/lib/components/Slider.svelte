<script lang="ts">
	export let slides = [
		{
			video: '/sample_videos/sample_video.mp4',
			title: 'Animation & Visual Packaging',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
		},
		{
			video: '/sample_videos/sample_video.mp4',
			title: 'Slide 2',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
		},
		{
			video: '/sample_videos/sample_video.mp4',
			title: 'Slide 3',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
		}
	];

	let currentSlide = 0;
</script>

<div class="slider">
	<div class="slides">
		{#each slides as slide, i}
			<div class="slide {i === currentSlide ? 'active' : ''}">
				<div class="content">
					<img
						src="/images/ThreeIntersectingCircles.svg"
						alt="circles"
						class="intersecting-circles"
					/>
					<p class="heading-slide">{slide.title}</p>
					<p class="desccription-slide">{slide.description}</p>
				</div>
				<video loop class="image" src={slide.video} autoplay={true} muted={true}>
					<track kind="captions" />
				</video>
			</div>
		{/each}
	</div>
</div>
<div class="indicators">
	{#each slides as slide, i}
		<input
			type="radio"
			id="slide{i}"
			name="slider"
			checked={i === currentSlide}
			on:change={() => (currentSlide = i)}
		/>
		<label for="slide{i}" />
	{/each}
</div>

<style>
	.slider {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 4rem;
		overflow: hidden;
		min-height: 600px;
	}

	.slides {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.5s ease-in-out;
		border-radius: 1rem;
	}

	.slide {
		padding: 4rem;
		position: absolute;
		top: 0;
		left: 0;
		flex: 1;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		border: 1px solid #3a3a3a;
		border-radius: 1rem;
	}

	.slide.active {
		opacity: 1;
	}

	.slide img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}

	.content {
		color: #fff;
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.content p {
		text-align: left;
	}
	.image {
		width: 50%;
		border-radius: 1rem;
	}
	.slide.active .content {
		transform: translateY(0);
	}

	.indicators {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}

	.indicators input[type='radio'] {
		display: none;
	}

	.indicators label {
		z-index: 1;
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		margin: 0 5px;
		cursor: pointer;
		transition: background-color 0.5s ease-in-out;
	}

	.indicators label:hover {
		background-color: #333;
	}

	.indicators input[type='radio']:checked + label {
		background: linear-gradient(to right, #2518d1, #ff439d);
	}
	.heading-slide {
		text-align: left !important;
		font-size: 40px !important;
		font-weight: 600 !important;
		line-height: 60px !important;
	}
	.desccription-slide {
		font-size: 20px;
		font-weight: 400;
		line-height: 40px;
	}
	.intersecting-circles {
		height: 70px;
	}
	@media screen and (max-width: 1100px) {
		.intersecting-circles {
			height: 55px;
		}
		.slide {
			flex-direction: column-reverse;
			gap: 1rem;
			justify-content: space-around;
			padding: 2rem;
		}
		.content {
			align-items: flex-start;
			height: 50%;
			width: 100%;
			gap: 1rem;
			justify-content: flex-start;
			width: 100%;
		}
		.image {
			height: 50%;
			margin: 0;
			width: 100%;
		}
		.desccription-slide {
			width: 100%;
			font-size: 20px;
			line-height: 40px;
		}
		.heading-slide {
			width: 100%;
			font-size: 30px !important;
			line-height: 40px !important;
		}
		.slider {
			padding: 2rem;
		}
	}
	@media screen and (max-width: 425px) {
		.intersecting-circles {
			height: 40px;
		}
		.slider {
			height: 100%;
			padding: 2rem;
		}
		.slide {
			padding: 1rem;
		}

		.content {
			gap: 1rem;
			justify-content: flex-start;
			width: 100%;
		}
		.image {
			width: 100%;
		}
		.desccription-slide {
			font-size: 16px;
			line-height: 30px;
		}
		.heading-slide {
			font-size: 20px !important;
			line-height: 30px !important;
		}
	}
</style>
