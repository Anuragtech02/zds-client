<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import VimeoIcon from '$lib/icons/VimeoIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	import { TimelineLite, gsap } from 'gsap';
	import { commonStore } from '$lib/stores/commons.store';
	import { onMount } from 'svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';

	export let logo: string = '/logo.png';
	let showMenu = false;
	let menu: HTMLDivElement;
	let listItems: {
		[key: string]: HTMLLIElement;
	} = {};

	onMount(() => {
		gsap.set(menu, { autoAlpha: 0, y: 20 });
		logo = getImageUrl($commonStore.header.Logo);
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
	class="fixed right-10 md:right-10 bottom-8 z-50 floating-action-btn"
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
			src={logo}
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
		<p class="pb-4 font-bold text-left">Let's Connect</p>
		<ul class="flex flex-col gap-6 items-start [&>li:hover]:text-accent-1">
			<li bind:this={listItems['Facebook']} class="flex w-full items-center gap-2 cursor-pointer">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.facebook.com/zerodesignstudios?mibextid=ZbWKwL"
					class="flex w-full items-center gap-2"
				>
					<FacebookIcon className="h-10 w-10" />
					<p>Facebook</p>
				</a>
			</li>
			<li bind:this={listItems['Instagram']} class="flex w-full items-center gap-2 cursor-pointer">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://instagram.com/zerodesignstudio?igshid=NzZlODBkYWE4Ng=="
					class="flex w-full items-center gap-2"
				>
					<InstagramIcon className="h-10 w-10" />
					<p>Instagram</p>
				</a>
			</li>
			<li bind:this={listItems['Youtube']} class="flex w-full items-center gap-2 cursor-pointer">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://youtube.com/@zerodesignstudio4231?si=hWojL8UxRSs61Xkl"
					class="flex w-full items-center gap-2"
				>
					<YoutubeIcon className="w-10 h-10" />
					<p>Youtube</p>
				</a>
			</li>
			<li bind:this={listItems['Linkedin']} class="flex w-full items-center gap-2 cursor-pointer">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/company/zero-design-studio/"
					class="flex w-full items-center gap-2"
				>
					<LinkedinIcon className="w-10 h-10" />
					<p>Linkedin</p>
				</a>
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
