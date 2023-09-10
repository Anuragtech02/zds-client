<script lang="ts">
	export let width: number = 18;
	export let height: number = 14;
	export let className: string = '';

	// Tailwind class for color
	export let color: string = 'fill-fg';
</script>

<svg
	{width}
	{height}
	viewBox="0 0 18 14"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
>
	<path
		d="M15.668 3.66927L9.0013 7.83594L2.33464 3.66927V2.0026L9.0013 6.16927L15.668 2.0026M15.668 0.335938H2.33464C1.40964 0.335938 0.667969 1.0776 0.667969 2.0026V12.0026C0.667969 12.4446 0.843563 12.8686 1.15612 13.1811C1.46868 13.4937 1.89261 13.6693 2.33464 13.6693H15.668C16.11 13.6693 16.5339 13.4937 16.8465 13.1811C17.159 12.8686 17.3346 12.4446 17.3346 12.0026V2.0026C17.3346 1.56058 17.159 1.13665 16.8465 0.824093C16.5339 0.511532 16.11 0.335938 15.668 0.335938Z"
		class={color}
	/>
</svg>
