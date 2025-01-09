<script lang="ts">
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import TextWithGradient from './TextWithGradient.svelte';

	export let member = {
		title: 'The Catalyst',
		name: 'Shubham Choubey',
		role: 'Founder & Creative director',
		image:
			'https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=',
		linkedIn: 'https://www.linkedin.com/'
	};
</script>

<div
	class="p-4 overflow-hidden flex flex-col gap-6 bg-transparent backdrop-blur-sm hover:-translate-y-8 transition-transform duration-300 ease-in-out"
>
	<div class="relative overflow-hidden rounded-3xl h-[300px] bg-gray-50">
		<img src={member.image} alt={member.name} class="h-full object-cover w-full" />
	</div>
	<div class="flex gap-4 justify-between">
		<div>
			<!-- <p class="text-left text-sm">
				{member.title}
			</p> -->
			<p class="text-md text-left">
				<strong>
					{member.name}
				</strong>
			</p>
			<div class="flex items-center gap-2">
				<div class="w-2 h-2 rounded-full bg-white" />
				<p class="text-sm text-left">
					{member.role}
				</p>
			</div>
		</div>
		<!-- <a href={member.linkedIn} target="_blank" rel="noopener">
			<LinkedinIcon height={24} width={24} className="cursor-pointer" />
		</a> -->
	</div>
</div>
