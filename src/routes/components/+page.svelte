<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import MetaverseButton from '$lib/components/MetaverseButton.svelte';
</script>

<section class="max-width-container">
	<Button>Click me</Button>
	<MetaverseButton />
	<Input placeholder="Name" type="email" />
</section>
