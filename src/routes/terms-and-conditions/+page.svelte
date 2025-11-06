<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
</script>

<CustomHead
	seo={{
		metaTitle: 'Terms and Conditions - Zero Design Studios',
		metaDescription: 'Terms and Conditions for Zero Design Studios services and website usage.'
	}}
/>

<PageLayout
	title="Terms and Conditions"
	description="Please read these terms carefully before using our services"
	bgImage="/images/headingBG.png"
	bgImageMobile="/images/headingBG.png"
	bgColor="#0F0F0F"
	renderTitleAsH1
>
	<SectionLayout className="custom-section mt-10 pt-0 z-[1] relative text-left">
		<div class="text-gray-300 space-y-8 policy-content">
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">1. Introduction</h2>
				<p>
					Welcome to Zero Design Studios. These Terms and Conditions govern your use of our
					website and services. By accessing or using our services, you agree to be bound by these
					terms.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">2. Services</h2>
				<p>
					Zero Design Studios provides experiential marketing, multimedia production, content
					creation, and experience design services. The specific scope, deliverables, timeline, and
					pricing for each project will be outlined in a separate service agreement or proposal.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">3. Intellectual Property</h2>
				<p>
					All content, designs, code, and materials created by Zero Design Studios remain our
					intellectual property until full payment is received. Upon full payment, the agreed-upon
					deliverables will be transferred to the client as specified in the service agreement.
				</p>
				<p>
					Clients retain ownership of any materials, content, or assets they provide to us. By
					providing these materials, clients grant us the right to use them for the specific
					project.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">4. Payment Terms</h2>
				<p>
					Payment terms will be specified in individual project proposals. Generally, we require a
					deposit before work begins, with the remainder due upon project completion or as outlined
					in milestone-based agreements.
				</p>
				<p>Late payments may incur additional charges as specified in the service agreement.</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">5. Project Timeline</h2>
				<p>
					We strive to meet all agreed-upon deadlines. However, timelines may be affected by client
					delays in providing feedback, materials, or approvals. Any significant delays caused by
					the client may result in adjusted timelines and potentially additional costs.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">6. Revisions and Changes</h2>
				<p>
					The number of revisions included in each project will be specified in the service
					agreement. Additional revisions beyond the agreed-upon scope may incur extra charges.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">7. Cancellation Policy</h2>
				<p>
					Either party may cancel a project with written notice. If a client cancels a project
					after work has begun, they will be charged for work completed up to the cancellation date,
					plus any non-refundable expenses incurred.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">8. Confidentiality</h2>
				<p>
					We respect the confidentiality of client information and will not disclose any proprietary
					information without permission, except as required by law. We may showcase completed work
					in our portfolio unless a non-disclosure agreement specifies otherwise.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">9. Limitation of Liability</h2>
				<p>
					Zero Design Studios shall not be liable for any indirect, incidental, special, or
					consequential damages arising from the use of our services. Our total liability shall not
					exceed the total amount paid by the client for the specific project in question.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">10. Warranties</h2>
				<p>
					We warrant that our services will be performed in a professional and workmanlike manner.
					However, we do not guarantee specific results or outcomes from our services.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">11. Website Use</h2>
				<p>
					You agree to use our website only for lawful purposes and in a manner that does not
					infringe upon the rights of others or restrict their use of the website.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">12. Changes to Terms</h2>
				<p>
					We reserve the right to modify these Terms and Conditions at any time. Changes will be
					effective immediately upon posting to our website. Your continued use of our services
					constitutes acceptance of any changes.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">13. Governing Law</h2>
				<p>
					These Terms and Conditions shall be governed by and construed in accordance with the laws
					of India. Any disputes arising from these terms shall be subject to the exclusive
					jurisdiction of the courts in the location where Zero Design Studios is registered.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">14. Contact Information</h2>
				<p>
					If you have any questions about these Terms and Conditions, please contact us through the
					contact information provided on our website.
				</p>
			</div>

			<p class="text-sm text-gray-400 pt-8">Last updated: November 2025</p>
		</div>
	</SectionLayout>
</PageLayout>

<style>
	:global(.policy-content h2),
	:global(.policy-content h3),
	:global(.policy-content p),
	:global(.policy-content ul),
	:global(.policy-content li) {
		text-align: left !important;
	}

	:global(.policy-content ul) {
		list-style-position: outside;
		margin-left: 1.5rem;
	}
</style>
