<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import { TimelineLite, gsap } from 'gsap';
	import { onMount } from 'svelte';

	let showMenu = false;
	let menu: HTMLDivElement;
	let currentIconIndex = 0;

	const socialIcons = [
		{
			component: FacebookIcon,
			name: 'Facebook',
			link: 'https://www.facebook.com/zerodesignstudios'
		},
		{ component: InstagramIcon, name: 'Instagram', link: 'https://instagram.com/zerodesignstudio' },
		{ component: YoutubeIcon, name: 'Youtube', link: 'https://youtube.com/@zerodesignstudio4231' },
		{
			component: LinkedinIcon,
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/company/zero-design-studio/'
		}
	];

	let listItems: {
		[key: string]: HTMLLIElement;
	} = {};

	onMount(() => {
		gsap.set(menu, { autoAlpha: 0, y: 20 });
		startIconAnimation();
	});

	function startIconAnimation() {
		const interval = setInterval(() => {
			if (!showMenu) {
				currentIconIndex = (currentIconIndex + 1) % socialIcons.length;
			}
		}, 3000); // Change icon every 3 seconds

		return () => clearInterval(interval);
	}

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

<!-- Added a wrapper div with padding to create a larger hover area -->
<div class="fixed right-4 md:right-8 bottom-4 z-50 p-4" on:mouseenter={show} on:mouseleave={hide}>
	<!-- Inner container for proper positioning -->
	<div class="relative">
		<!-- Menu positioned above the FAB -->
		<div
			class="floating-menu w-48 p-4 rounded-md absolute bottom-[calc(100%+0.5rem)] right-0 bg-white bg-opacity-10 border border-neutral-500 backdrop-blur-sm transition-all"
			class:visible={showMenu === true}
			class:hidden={showMenu === false}
			bind:this={menu}
		>
			<p class="pb-4 font-bold text-left">Let's Connect</p>
			<ul class="flex flex-col gap-6 items-start [&>li:hover]:text-accent-1">
				{#each socialIcons as { component: Icon, name, link }, i}
					<li
						bind:this={listItems[name]}
						class="flex w-full items-center gap-2 cursor-pointer opacity-0 transform translate-y-4"
					>
						<a target="_blank" rel="noreferrer" href={link} class="flex w-full items-center gap-2">
							<svelte:component this={Icon} className="h-10 w-10" />
							<p>{name}</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- FAB Button -->
		<div
			class="floating-icon rounded-full bg-white bg-opacity-10 border border-neutral-500 h-16 w-16 hover:h-20 hover:w-20 flex justify-center items-center cursor-pointer transition-all duration-200 ease-out overflow-hidden"
		>
			<div class="icon-container relative w-full h-full p-4">
				{#each socialIcons as icon, index}
					{#if index === currentIconIndex}
						<div class="absolute inset-0 sliding-icon flex items-center justify-center">
							<div class="w-7 h-7">
								<!-- Added size constraint for icons -->
								<svelte:component this={icon.component} className="h-full w-full" />
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.sliding-icon {
		animation: slideIcon 3s ease-in-out;
	}

	@keyframes slideIcon {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		15% {
			transform: translateX(0);
			opacity: 1;
		}
		85% {
			transform: translateX(0);
			opacity: 1;
		}
		100% {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	.icon-container :global(svg) {
		width: 100%;
		height: 100%;
	}

	/* For the menu animations */
	.visible {
		visibility: visible;
		opacity: 1;
	}

	.hidden {
		visibility: hidden;
		opacity: 0;
	}
</style>
