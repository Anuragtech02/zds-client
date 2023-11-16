<script>
	let showMenu = false;
</script>

<div
	class="fixed right-10 sm:right-20 bottom-20 z-50 floating-action-btn"
	on:mouseenter={() => (showMenu = true)}
	on:mouseleave={() => (showMenu = false)}
	aria-haspopup="true"
	role="button"
	tabindex="0"
>
	<div
		class="floating-icon rounded-full bg-white bg-opacity-10 border border-neutral-500 h-20 w-20 flex justify-center items-center p-3 cursor-pointer"
	>
		<img
			src="https://www.zerodesignstudios.com/wp-content/uploads/2019/12/Zero-Studio-Logo-e1577710110570.png"
			alt=""
			class="h-full w-full object-contain"
		/>
	</div>
	<div
		class="floating-menu w-48 p-4 rounded-md absolute bottom-[90%] right-[90%] bg-white bg-opacity-10 border border-neutral-500 backdrop-blur-sm transition-all"
		style="opacity: {showMenu ? 1 : 0}; visibility: {showMenu ? 'visible' : 'hidden'};"
	>
		<p class="pb-4 font-bold text-left">Lorem, ipsum.</p>
		<ul class="flex flex-col gap-6 items-start">
			<li class="flex w-full items-center gap-2 cursor-pointer">
				<img src="" alt="" class="h-10 w-10" />
				<p>Facebook</p>
			</li>
			<li class="flex w-full items-center gap-2 cursor-pointer">
				<img src="" alt="" class="h-10 w-10" />
				<p>Instagram</p>
			</li>
			<li class="flex w-full items-center gap-2 cursor-pointer">
				<img src="" alt="" class="h-10 w-10" />
				<p>Youtube</p>
			</li>
			<li class="flex w-full items-center gap-2 cursor-pointer">
				<img src="" alt="" class="h-10 w-10" />
				<p>Vimeo</p>
			</li>
		</ul>
	</div>
</div>
