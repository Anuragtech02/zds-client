<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let service: any;
	let container: HTMLAnchorElement;

	function handleHover(e, isEntering) {
		const direction = getDirection(e);
		const scaleValue = isEntering ? 1 : 0;

		// Adjust the transformOrigin based on the direction
		let origin;
		switch (direction) {
			case 0:
				origin = '50% 0%';
				break; // top
			case 1:
				origin = '100% 50%';
				break; // right
			case 2:
				origin = '50% 100%';
				break; // bottom
			case 3:
				origin = '0% 50%';
				break; // left
		}
		const hoverElement = container.querySelector('.scale');

		gsap.to(hoverElement, {
			duration: 0.3,
			transformOrigin: origin,
			scale: scaleValue,
			ease: 'power1.out'
		});
	}

	onMount(() => {
		container.addEventListener('mouseenter', (e) => handleHover(e, true));
		container.addEventListener('mouseleave', (e) => handleHover(e, false));
	});

	function getDirection(e) {
		/* Implement logic to determine the direction of mouse enter/leave */
		// This usually involves comparing the mouse coordinates with the element's bounding box
		// Return a number (0, 1, 2, 3) indicating the direction (top, right, bottom, left)
		const { width, height, top, left } = container.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) * (width > height ? height / width : 1);
		const y = (e.clientY - top - height / 2) * (height > width ? width / height : 1);
		const direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
		return direction;
	}

	// onMount(() => {
	// 	let ripples = document.createElement('span');
	// 	ripples.classList.add('ripple-span');
	// 	let cleartimeout: any;
	// 	container.addEventListener('mouseover', function (e) {
	// 		let x = e.clientX - e.target.offsetLeft;
	// 		let y = e.clientY - e.target.offsetTop;
	// 		ripples.style.left = x + 'px';
	// 		ripples.style.top = y + 'px';
	// 		container.appendChild(ripples);

	// 		cleartimeout = setTimeout(() => {
	// 			ripples.remove();
	// 		}, 3000);
	// 	});

	// 	container.addEventListener('mouseout', function () {
	// 		ripples.remove(cleartimeout);
	// 	});
	// });
</script>

<a
	bind:this={container}
	href={`/service/${service.id}`}
	class="card-cont relative w-full flex flex-col md:flex-row justify-between items-center border border-[#3A3A3A] p-8 rounded-md"
>
	<p class="md:w-1/2 pl-2 xl:pl-8 text-left text-lg lg:text-2xl">
		{service.title}
	</p>
	<div class="md:w-1/2 flex flex-col items-center justify-center md:items-start">
		<img src={service.icon} class="h-20 w-20 lg:h-28 lg:w-28" alt="" />
		<ul class="flex flex-wrap gap-2 items-center">
			{#each service.services as s, i}
				<li class="text-sm">
					{#if i != 0}
						•
					{/if}{s}
				</li>
			{/each}
		</ul>
	</div>
	<span class="scale" />
</a>

<style>
	.card-cont {
		position: relative;
		overflow: hidden; /* To contain the filling effect within the borders */
	}

	.card-cont:hover {
		color: black;
	}

	.card-cont:hover p,
	.card-cont:hover img,
	.card-cont:hover ul {
		z-index: 1;
	}
	.scale {
		/* content: ''; */
		position: absolute;
		display: inline-block;
		top: 0;
		left: 0;
		width: 1000px;
		height: 1000px;
		border-radius: 50%;
		background: white; /* The fill color */
		transform-origin: center;
		transform: scale(0);
		z-index: 0;
	}
</style>
