<script lang="ts">
	export let type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'textarea' = 'text';
	export let placeholder: string = '';
	export let value: string = '';
	export let containerClassName: string = '';
	export let inputClassName: string = '';
	export let error: string = '';
	export let name: string = '';
	export let hideError: boolean = false;
	export let rows: number = 5;

	$: if (type === 'textarea') {
		inputClassName = 'resize-none';
	}

	$: if (name === '') {
		name = placeholder.toLowerCase();
	}

	const COMMON_CLASS =
		'w-full rounded-md py-2 px-5 outline-0 border border-borders-500 bg-bg-200 focus:border-borders hover:border-borders transition duration-150 ease-out hover:ease-in placeholder:text-fg-300';
</script>

<div class={`${containerClassName}`}>
	{#if type === 'password'}
		<input
			{name}
			type="password"
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
		/>
	{:else if type === 'email'}
		<input
			{name}
			type="email"
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
		/>
	{:else if type === 'number'}
		<input
			{name}
			type="number"
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
		/>
	{:else if type === 'tel'}
		<input
			{name}
			type="tel"
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
		/>
	{:else if type === 'textarea'}
		<textarea
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
			{rows}
		/>
	{:else}
		<input
			{name}
			type="text"
			{placeholder}
			bind:value
			class={`${COMMON_CLASS} ${inputClassName}`}
			class:border-red-500={error?.length > 0}
		/>
	{/if}
	{#if !hideError}
		<div class="h-4 mt-1">
			{#if error?.length > 0}
				<p class="text-xs text-red-500 text-left">{error}</p>
			{/if}
		</div>
	{/if}
</div>
