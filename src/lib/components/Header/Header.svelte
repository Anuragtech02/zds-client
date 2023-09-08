<script lang="ts">
	import Input from '../Input.svelte';
	import Logo from '../Logo.svelte';
	import MetaverseButton from '../Marketplace.svelte';
	import NavLink from './NavLink.svelte';
</script>

<header class="w-full bg-bg-300 backdrop-blur-xl">
	<div class="max-width-container">
		<div class="flex justify-between items-center py-4">
			<Logo title="ZERO" subTitle="DESIGN STUDIO" />
			<nav class="flex items-center gap-8">
				<Input
					placeholder="Search"
					inputClassName="!rounded-full border-fg-300 placeholder:text-fg-300"
					hideError
				/>
				<NavLink url="/" active={true}>Home</NavLink>
				<NavLink url="/work">Work</NavLink>
				<NavLink url="/about">About</NavLink>
				<NavLink url="/services">Our Services</NavLink>
				<NavLink url="/contact">Contact Us</NavLink>
				<MetaverseButton />
			</nav>
		</div>
	</div>
</header>
