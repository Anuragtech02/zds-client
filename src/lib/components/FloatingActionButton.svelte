<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { TimelineLite, gsap } from 'gsap';
	import { onMount } from 'svelte';

	let showMenu = false;
	let menu: HTMLDivElement;
	let listItems: {
		[key: string]: HTMLLIElement;
	} = {};

	onMount(() => {
		gsap.set(menu, { autoAlpha: 0, y: 20 });
	});

	const show = () => {
		showMenu = true;
		gsap.to(menu, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' });
		let tl = new TimelineLite();
		tl.staggerTo(Object.values(listItems), 0.2, { autoAlpha: 1, y: 0, ease: 'power2.out' }, 0.1);
	};

	const hide = () => {
		showMenu = false;
		gsap.to(menu, { autoAlpha: 0, y: 20, duration: 0.3, ease: 'power2.in' });
		let tl = new TimelineLite();
		tl.staggerTo(Object.values(listItems), 0.2, { autoAlpha: 0, y: 40, ease: 'power2.in' }, 0.1);
	};
</script>

<div
	class="fixed right-20 bottom-20 z-50 floating-action-btn"
	on:mouseenter={show}
	on:mouseleave={hide}
	aria-haspopup="true"
	role="button"
	tabindex="0"
>
	<div
		class="floating-icon rounded-full bg-white bg-opacity-10 border border-neutral-500 h-16 w-16 hover:h-20 hover:w-20 flex justify-center items-center p-3 cursor-pointer transition-all duration-200 ease-out"
	>
		<img
			src="https://www.zerodesignstudios.com/wp-content/uploads/2019/12/Zero-Studio-Logo-e1577710110570.png"
			alt=""
			class="h-full w-full object-contain"
			class:circle-active={showMenu === true}
		/>
	</div>
	<div
		class="floating-menu w-48 p-4 rounded-md absolute bottom-[90%] right-[90%] bg-white bg-opacity-10 border border-neutral-500 backdrop-blur-sm transition-all"
		class:visible={showMenu === true}
		class:hidden={showMenu === false}
		bind:this={menu}
	>
		<p class="pb-4 font-bold text-left">Lorem, ipsum.</p>
		<ul class="flex flex-col gap-6 items-start [&>li:hover]:text-accent-1">
			<li bind:this={listItems['Facebook']} class="flex w-full items-center gap-2 cursor-pointer">
				<FacebookIcon className="h-10 w-10" />
				<p>Facebook</p>
			</li>
			<li bind:this={listItems['Instagram']} class="flex w-full items-center gap-2 cursor-pointer">
				<InstagramIcon className="h-10 w-10" />
				<p>Instagram</p>
			</li>
			<li bind:this={listItems['Youtube']} class="flex w-full items-center gap-2 cursor-pointer">
				<YoutubeIcon className="w-10 h-10" />
				<p>Youtube</p>
			</li>
			<li bind:this={listItems['Vimeo']} class="flex w-full items-center gap-2 cursor-pointer">
				<VimeoIcon className="w-10 h-10" />
				<p>Vimeo</p>
			</li>
		</ul>
	</div>
</div>

<style>
	.circle-active {
		animation: rotateCircle 10s linear infinite;
	}
	@keyframes rotateCircle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
