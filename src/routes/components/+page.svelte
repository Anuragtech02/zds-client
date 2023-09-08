<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import NavLink from '$lib/components/Header/NavLink.svelte';
	import { Button, Input, Logo, MetaverseButton } from '$lib/components/index';
</script>

<section class="max-width-container [&>div]:my-4">
	<Header />
	<div>
		<Button>Click me</Button>
	</div>
	<div>
		<MetaverseButton />
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
</section>
