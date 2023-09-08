<script lang="ts">
	export let type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'textarea' = 'text';
	export let placeholder: string = '';
	export let value: string = '';
	export let containerClassName: string = '';
	export let inputClassName: string = '';
	export let error: string = '';
	export let name: string = '';

	$: if (type === 'textarea') {
		inputClassName = 'resize-none';
	}

	$: if (name === '') {
		name = placeholder.toLowerCase();
	}

	const COMMON_CLASS =
		'rounded-md py-2 px-5 outline-0 border border-borders-500 bg-bg-200 focus:border-borders hover:border-borders transition duration-150 ease-out hover:ease-in placeholder:text-fg-500';
</script>

<div class={`${containerClassName}`}>
	{#if type === 'password'}
		<input
			{name}
			type="password"
			{placeholder}
			{value}
			class={`${COMMON_CLASS} ${inputClassName}`}
		/>
	{:else if type === 'email'}
		<input {name} type="email" {placeholder} {value} class={`${COMMON_CLASS} ${inputClassName}`} />
	{:else if type === 'number'}
		<input {name} type="number" {placeholder} {value} class={`${COMMON_CLASS} ${inputClassName}`} />
	{:else if type === 'tel'}
		<input {name} type="tel" {placeholder} {value} class={`${COMMON_CLASS} ${inputClassName}`} />
	{:else if type === 'textarea'}
		<textarea {placeholder} {value} class={`${COMMON_CLASS} ${inputClassName}`} />
	{:else}
		<input {name} type="text" {placeholder} {value} class={`${COMMON_CLASS} ${inputClassName}`} />
	{/if}
	{#if error?.length > 0}
		<p class="text-sm text-red-500">{error}</p>
	{/if}
</div>
