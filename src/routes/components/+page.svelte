<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import NavLink from '$lib/components/Header/NavLink.svelte';
	import { Button, Input, Logo, Marketplace } from '$lib/components/index';
</script>

<Header />
<section class="max-width-container [&>div]:my-4">
	<div>
		<Button>Click me</Button>
	</div>
	<div>
		<Marketplace />
	</div>

	<div>
		<Input placeholder="Name" type="email" />
	</div>
	<div>
		<Logo title="ZERO" subTitle="DESIGN STUDIO" />
	</div>
	<div>
		<NavLink>Home</NavLink>
	</div>
	<div>
		<Footer />
	</div>
</section>
