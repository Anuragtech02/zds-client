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
		linkedIn: 'https://www.linkedin.com/in/shubham-choubey-1b1b3b1b0/'
	};
</script>

<div
	class=" overflow-hidden p-6 py-8 flex flex-col gap-6 bg-transparent backdrop-blur-sm rounded-md border-[1px] border-[#3A3A3A]"
>
	<img src={member.image} alt={member.name} class="h-[300px] object-cover" />
	<div class="flex gap-4 justify-between">
		<div>
			<p class="text-left text-sm">
				{member.title}
			</p>
			<p class="text-md text-left">
				<strong>
					{member.name}
				</strong>
			</p>
			<p class="text-sm text-left">
				{member.role}
			</p>
		</div>
		<a href={member.linkedIn}>
			<LinkedinIcon height={24} width={24} className="cursor-pointer" />
		</a>
	</div>
</div>
