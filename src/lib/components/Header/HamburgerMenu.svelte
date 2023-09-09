<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let isActive = false;
	let menu: SVGSVGElement;
	let top: SVGPathElement;
	let middle: SVGPathElement;
	let bottom: SVGPathElement;
	const STROKE_WIDTH = 2;

	let SETTINGS = {
		duration: 0.7,
		animationBackFactor: 2.7
	};

	interface Tweens {
		top: gsap.core.Tween;
		middle: gsap.core.Tween;
		bottom: gsap.core.Tween;
	}

	let TWEENS: Tweens;

	onMount(() => {
		initTweens();
		menu.addEventListener('click', onClickHandler);

		return () => {
			menu.removeEventListener('click', onClickHandler);
		};
	});

	function initTweens() {
		TWEENS = {
			top: gsap.to(top, {
				duration: SETTINGS.duration,
				scaleX: 1.2,
				y: 13,
				x: 1.5,
				rotation: -45,
				ease: 'back.inOut(' + SETTINGS.animationBackFactor + ')',
				paused: true
			}),

			middle: gsap.fromTo(
				middle,
				{
					duration: SETTINGS.duration,
					attr: {
						'stroke-dasharray': '0.609375 60.9375 19 182.8125',
						'stroke-dashoffset': 61.546875
					},
					ease: 'power3.inOut',
					paused: true
				},
				{
					duration: SETTINGS.duration,
					attr: {
						'stroke-dasharray': '0.609375 60.9375 115.78125 182.8125',
						'stroke-dashoffset': 20
					},
					ease: 'power3.inOut',
					paused: true
				}
			),

			bottom: gsap.to(bottom, {
				duration: SETTINGS.duration,
				scaleX: 1.2,
				y: -13,
				x: 1.5,
				rotation: 45,
				ease: 'back.inOut(' + SETTINGS.animationBackFactor + ')',
				paused: true
			})
		};
	}

	function onClickHandler() {
		if (isActive) {
			TWEENS.top.reverse();
			TWEENS.middle.reverse();
			TWEENS.bottom.reverse();
		} else {
			TWEENS.top.play();
			TWEENS.middle.play();
			TWEENS.bottom.play();
		}

		isActive = !isActive;
	}
</script>

<svg
	class="menu cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
	viewBox="0 0 39 39"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	bind:this={menu}
>
	<path
		class="menu__line-top stroke-fg"
		d="M10,14.5 29,14.5"
		stroke-width={STROKE_WIDTH}
		fill="none"
		bind:this={top}
	/>

	<path
		class="menu__line-middle stroke-fg"
		stroke-miterlimit="10"
		stroke-dasharray="0.609375 60.9375 19 182.8125"
		stroke-dashoffset="61.546875"
		d="M10,19.5
          h19.5
          c0,0,7.143703125-0.18646875,6.55078125-6.703125
          c-0.15234375-1.67578125-1.0018125-3.029203125-1.748296875-4.357640625
          C30.912375,4.314375,26.061140625,1.565484375,20.556046875,1.25165625
          C20.206265625,1.238859375,19.865015625,1.21875,19.5,1.21875
          C9.403875,1.21875,1.21875,9.403875,1.21875,19.5
          c0,10.09490625,8.185125,18.28125,18.28125,18.28125
          c10.09490625,0,18.28125-8.18634375,18.28125-18.28125
          C37.78125,9.4453125,29.5546875,1.21875,19.5,1.21875
          S1.142578125,9.4453125,1.142578125,19.5"
		stroke-width={STROKE_WIDTH}
		fill="none"
		bind:this={middle}
	/>

	<path
		class="menu__line-bottom stroke-fg"
		d="M10,24.5 29,24.5"
		stroke-width={STROKE_WIDTH}
		fill="none"
		bind:this={bottom}
	/>
</svg>
