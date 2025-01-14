<script lang="ts">
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import WhatsappIcon from '$lib/icons/WhatsappIcon.svelte'; // You'll need to create this icon component
	import { TimelineLite, gsap } from 'gsap';
	import { onMount } from 'svelte';

	let showMenu = false;
	let menu: HTMLDivElement;

	// Phone number for WhatsApp (replace with your number)
	const WHATSAPP_NUMBER = '+919977098856';
	const WHATSAPP_MESSAGE = "Hi there, I'm connecting you via the website zeriodesignstudios.com";

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

	const openWhatsApp = () => {
		const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
	};
</script>

<div class="fixed right-4 md:right-8 bottom-4 z-50 p-4" on:mouseenter={show} on:mouseleave={hide}>
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

		<!-- WhatsApp FAB Button -->
		<div
			class="floating-icon rounded-full bg-white bg-opacity-10 border border-neutral-500 h-16 w-16 hover:h-20 hover:w-20 flex justify-center items-center cursor-pointer transition-all duration-200 ease-out"
			on:click={openWhatsApp}
		>
			<div class="w-7 h-7">
				<WhatsappIcon className="h-full w-full" />
			</div>
		</div>
	</div>
</div>

<style>
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
