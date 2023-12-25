<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import CallIcon from '$lib/icons/CallIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import type { ContactForm } from '$lib/types/components';
	import { breakSentence, isValidEmail, isValidPhone } from '$lib/utils/functions';
	export let data: any;
	let showSuccess = false;
	let loading = false;
	// console.log(data);
	let { Title, ContactEmail, PhoneNumber, CTAText, CTALink, address } = data;
	let { initialWords, lastWord } = breakSentence(Title);
	let contactForm: ContactForm = {
		name: {
			value: '',
			error: ''
		},
		email: {
			value: '',
			error: ''
		},
		phone: {
			value: '',
			error: ''
		},
		message: {
			value: '',
			error: ''
		}
	};

	function validateFields() {
		let isValid = true;

		const email = contactForm.email.value;
		const phone = contactForm.phone.value;

		if (contactForm.name.value === '') {
			contactForm.name.error = 'Name is required';
			isValid = false;
		}
		if (email === '') {
			contactForm.email.error = 'Email is required';
			isValid = false;
		}
		if (phone === '') {
			contactForm.phone.error = 'Phone is required';
			isValid = false;
		}
		if (contactForm.message.value === '') {
			contactForm.message.error = 'Message is required';
			isValid = false;
		}

		if (email !== '' && !isValidEmail(email)) {
			contactForm.email.error = 'Invalid email address';
			isValid = false;
		}

		if (phone !== '' && !isValidPhone(phone)) {
			contactForm.phone.error = 'Invalid phone number';
			isValid = false;
		}

		return isValid;
	}

	function resetFormErrors() {
		contactForm.name.error = '';
		contactForm.email.error = '';
		contactForm.phone.error = '';
		contactForm.message.error = '';
	}

	async function submitForm(e: Event) {
		e.preventDefault();
		resetFormErrors();
		if (validateFields()) {
			console.log('Form submitted');
			try {
				let formData = {
					name: contactForm.name.value,
					email: contactForm.email.value,
					phone: contactForm.phone.value,
					message: contactForm.message.value
				};
				loading = true;
				let res = await fetch('/contact/', {
					headers: {
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({
						formData
					})
				});
				const data = await res.json();
				console.log(data);
				// alert('Form submitted successfully');
				showSuccess = true;
				setTimeout(() => {
					showSuccess = false;
				}, 3000);
				contactForm = {
					name: {
						value: '',
						error: ''
					},
					email: {
						value: '',
						error: ''
					},
					phone: {
						value: '',
						error: ''
					},
					message: {
						value: '',
						error: ''
					}
				};
			} catch (error) {
				console.log(error);
				alert('Something went wrong');
			}
			loading = false;
		}
	}
	let numbers = PhoneNumber?.split(',')?.map((num: string) => num.trim()) || [];
</script>

<div class="relative w-full flex flex-col sm:flex-row">
	<div class="w-full flex flex-1 justify-between items-start gap-4">
		<div>
			<h2 class="uppercase text-left">
				<OutlinedText text={initialWords} />
				<br />
				{lastWord}
			</h2>
			<p class="text-left max-w-[400px] pr-2">{address}</p>
			<div class="mt-8">
				<div class="flex justify-start items-center">
					<MailIcon />
					<a href="mailto:{ContactEmail}" class="ml-4">{ContactEmail}</a>
				</div>
				<div class="flex justify-start items-center mt-4">
					<CallIcon />
					<!-- <p class="ml-4">{PhoneNumber}</p> -->
					<div class="flex justify-start ml-4 gap-2">
						{#each numbers as num}
							<a href={`tel:+91${num}`}>
								{num}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<img
			src="/images/contact-img.png"
			alt="contact"
			class="relative pointer-events-none w-20 sm:w-36 md:w-50 sm:absolute sm:-top-4 sm:-right-10"
		/>
	</div>
	<form class="mt-8 sm:mt-0 [&>div]:mt-2 flex-1 z-[1]" on:submit={submitForm}>
		<Input
			placeholder="Name"
			type="text"
			error={contactForm.name.error}
			bind:value={contactForm.name.value}
		/>
		<Input
			placeholder="Email"
			type="email"
			error={contactForm.email.error}
			bind:value={contactForm.email.value}
		/>
		<Input
			placeholder="Phone"
			type="tel"
			error={contactForm.phone.error}
			bind:value={contactForm.phone.value}
		/>
		<Input
			placeholder="Message"
			type="textarea"
			error={contactForm.message.error}
			bind:value={contactForm.message.value}
		/>
		<p
			class="text-left pointer-events-none transition-all duration-300 ease-out"
			class:opacity-0={!showSuccess && !loading}
			class:opacity-1={showSuccess || loading}
			class:text-yellow-500={loading}
			class:text-green-500={showSuccess}
		>
			{loading ? 'Submiting...' : 'Form submitted successfully'}
		</p>
		<Button type="submit" link={CTALink} className="mt-2">{CTAText}</Button>
	</form>
</div>
