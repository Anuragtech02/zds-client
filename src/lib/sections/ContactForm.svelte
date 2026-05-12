<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import CallIcon from '$lib/icons/CallIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import type { ContactForm } from '$lib/types/components';
	import { breakSentence, isValidEmail, isValidPhone } from '$lib/utils/functions';
	export let data: any = {};
	let showSuccess = false;
	let loading = false;
	let attachmentInput: HTMLInputElement;
	const MAX_FILE_SIZE = 10 * 1024 * 1024;
	// console.log(data);
	let {
		Title = 'Get in touch,',
		ContactEmail = '',
		PhoneNumber = '',
		CTAText = 'Submit',
		CTALink = '',
		address = ''
	} = data || {};
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
		},
		attachment: {
			value: null,
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
		if (contactForm.attachment.value && contactForm.attachment.value.size > MAX_FILE_SIZE) {
			contactForm.attachment.error = 'File must be under 10 MB';
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
		contactForm.attachment.error = '';
	}

	function resetContactForm() {
		if (attachmentInput) attachmentInput.value = '';

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
			},
			attachment: {
				value: null,
				error: ''
			}
		};
	}

	function handleFileChange(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const file = input.files?.[0] || null;

		contactForm.attachment.value = file;
		contactForm.attachment.error =
			file && file.size > MAX_FILE_SIZE ? 'File must be under 10 MB' : '';
	}

	async function submitForm(e: Event) {
		e.preventDefault();
		resetFormErrors();
		if (validateFields()) {
			console.log('Form submitted');
			try {
				const formData = new FormData();
				formData.append('name', contactForm.name.value);
				formData.append('email', contactForm.email.value);
				formData.append('phone', contactForm.phone.value);
				formData.append('message', contactForm.message.value);

				if (contactForm.attachment.value) {
					formData.append('attachment', contactForm.attachment.value);
				}

				loading = true;
				let res = await fetch('/contact/', {
					method: 'POST',
					body: formData
				});

				if (!res.ok) {
					throw new Error('Unable to submit form');
				}

				await res.json();
				// alert('Form submitted successfully');
				showSuccess = true;
				setTimeout(() => {
					showSuccess = false;
				}, 3000);
				resetContactForm();
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
			<p class="text-left max-w-[400px] pr-2">
				{@html address}
			</p>
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
		<div>
			<label
				for="attachment"
				class="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-borders-500 bg-bg-200 px-5 py-2 text-left transition duration-150 ease-out hover:border-borders hover:ease-in"
				class:border-red-500={(contactForm.attachment.error || '').length > 0}
			>
				<span class="min-w-0 flex-1 truncate text-fg-300">
					{contactForm.attachment.value?.name || 'Upload portfolio / resume / file'}
				</span>
				<span class="shrink-0 rounded-full border border-borders px-4 py-1 text-sm">Browse</span>
			</label>
			<input
				id="attachment"
				name="attachment"
				type="file"
				class="sr-only"
				bind:this={attachmentInput}
				on:change={handleFileChange}
			/>
			<div class="h-4 mt-1">
				{#if (contactForm.attachment.error || '').length > 0}
					<p class="text-xs text-red-500 text-left">{contactForm.attachment.error}</p>
				{/if}
			</div>
		</div>
		<p
			class="text-left pointer-events-none transition-all duration-300 ease-out"
			class:opacity-0={!showSuccess && !loading}
			class:opacity-1={showSuccess || loading}
			class:text-yellow-500={loading}
			class:text-green-500={showSuccess}
		>
			{loading ? 'Submitting...' : 'Form submitted successfully'}
		</p>
		<Button type="submit" link={CTALink} className="mt-2">{CTAText}</Button>
	</form>
</div>
