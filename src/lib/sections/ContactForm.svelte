<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import CallIcon from '$lib/icons/CallIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';

	interface ContactForm {
		name: {
			value: string;
			error?: string;
		};
		email: {
			value: string;
			error?: string;
		};
		phone: {
			value: string;
			error?: string;
		};
		message: {
			value: string;
			error?: string;
		};
	}

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

		const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		const phoneRegex = /^[0-9]{10}$/;

		if (contactForm.name.value === '') {
			contactForm.name.error = 'Name is required';
			isValid = false;
		}
		if (contactForm.email.value === '') {
			contactForm.email.error = 'Email is required';
			isValid = false;
		}
		if (contactForm.phone.value === '') {
			contactForm.phone.error = 'Phone is required';
			isValid = false;
		}
		if (contactForm.message.value === '') {
			contactForm.message.error = 'Message is required';
			isValid = false;
		}

		if (contactForm.email.value !== '' && !emailRegex.test(contactForm.email.value)) {
			contactForm.email.error = 'Invalid email address';
			isValid = false;
		}

		if (contactForm.phone.value !== '' && !phoneRegex.test(contactForm.phone.value)) {
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

	function submitForm(e: Event) {
		e.preventDefault();
		resetFormErrors();
		if (validateFields()) {
			console.log('Form submitted');
			// TODO: Send form data to server
		}
	}
</script>

<div class="relative w-full flex flex-col sm:flex-row">
	<div class="w-full flex flex-1 justify-between items-start gap-4">
		<div>
			<div class="max-w-[350px]">
				<svg viewBox="0 0 450 50">
					<text y="50">GIVE US A</text>
				</svg>
				<span class="inline-block text-[3rem] font-bold font-dela-gothic mt-4">SHOUT</span>
			</div>
			<div class="mt-8">
				<div class="flex justify-start items-center">
					<MailIcon />
					<p class="ml-4">info@zerodesignstudios.com</p>
				</div>
				<div class="flex justify-start items-center mt-4">
					<CallIcon />
					<p class="ml-4">8837636101, 8837636101</p>
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
		<Button type="submit" className="mt-2">Submit</Button>
	</form>
</div>

<style>
	svg {
		font: bold 68px 'Dela Gothic One', cursive;
		width: 90%;
		height: 60px;
	}

	text {
		fill: none;
		@apply stroke-fg;
		stroke-width: 3px;
		stroke-linejoin: round;
	}
</style>
