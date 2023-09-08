<script lang="ts">
	import { Button, Input, Logo, MetaverseButton } from '$lib/components/index';
</script>

<section class="max-width-container [&>div]:my-4">
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
</section>
