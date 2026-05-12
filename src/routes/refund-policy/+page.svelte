<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
</script>

<CustomHead
	seo={{
		metaTitle: 'Refund and Cancellation Policy - Zero Design Studio',
		metaDescription:
			'Refund and Cancellation Policy for Zero Design Studio services. Learn about our refund process and cancellation terms.'
	}}
/>

<PageLayout
	title="Refund and Cancellation Policy"
	description="Our policy on refunds and project cancellations"
	bgImage="/images/headingBG.png"
	bgImageMobile="/images/headingBG.png"
	bgColor="#0F0F0F"
	renderTitleAsH1
>
	<SectionLayout className="custom-section mt-10 pt-0 z-[1] relative text-left">
		<div class="text-gray-300 space-y-8 policy-content">
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">1. Overview</h2>
				<p>
					At Zero Design Studio, we are committed to delivering high-quality services that meet your
					expectations. This Refund and Cancellation Policy outlines the terms for canceling
					projects and requesting refunds for our services.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">2. Service Deposits</h2>
				<p>
					Most projects require an initial deposit before work begins. This deposit secures your
					project timeline and covers initial planning and setup costs.
				</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>
						Deposits are typically non-refundable once work has commenced on your project, unless
						otherwise specified in your service agreement
					</li>
					<li>If we cancel or cannot fulfill the project, your deposit will be fully refunded</li>
					<li>Deposits may be refundable if cancellation occurs before any work begins</li>
				</ul>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">3. Cancellation by Client</h2>

				<h3 class="text-xl font-semibold text-white mt-4">Before Project Commencement</h3>
				<p>
					If you cancel a project before we begin work, you may be eligible for a full or partial
					refund of your deposit, minus any administrative fees and costs already incurred.
				</p>

				<h3 class="text-xl font-semibold text-white mt-4">After Project Commencement</h3>
				<p>If you choose to cancel after work has begun:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>You will be charged for all work completed up to the cancellation date</li>
					<li>Any non-refundable expenses incurred on your behalf will be billed</li>
					<li>The remaining balance, if any, will be refunded</li>
					<li>
						All materials, concepts, and work product created up to cancellation remain the property
						of Zero Design Studio unless otherwise agreed upon
					</li>
				</ul>

				<h3 class="text-xl font-semibold text-white mt-4">Cancellation Notice</h3>
				<p>
					Cancellations must be submitted in writing via email. The cancellation will be effective
					from the date we receive your written notice.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">4. Cancellation by Zero Design Studio</h2>
				<p>We reserve the right to cancel a project if:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>The client fails to provide necessary materials or information in a timely manner</li>
					<li>Payment terms are not met as agreed</li>
					<li>The project scope changes significantly from the original agreement</li>
					<li>We are unable to complete the project due to circumstances beyond our control</li>
				</ul>
				<p class="mt-4">
					In such cases, you will be charged only for work completed, and any remaining funds will
					be refunded promptly.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">5. Refund Eligibility</h2>

				<h3 class="text-xl font-semibold text-white mt-4">Full Refunds</h3>
				<p>Full refunds may be issued when:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>We are unable to deliver the agreed-upon services</li>
					<li>The project is canceled before any work begins (subject to administrative fees)</li>
					<li>There is a significant error or failure on our part that cannot be rectified</li>
				</ul>

				<h3 class="text-xl font-semibold text-white mt-4">Partial Refunds</h3>
				<p>Partial refunds may be issued when:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>The project is canceled after work has begun</li>
					<li>
						The deliverables do not meet the agreed-upon specifications and cannot be corrected
					</li>
					<li>Mutual agreement is reached for partial project completion</li>
				</ul>

				<h3 class="text-xl font-semibold text-white mt-4">No Refunds</h3>
				<p>Refunds will not be issued for:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Completed projects that meet the agreed-upon specifications</li>
					<li>Client dissatisfaction based on subjective preferences after approval</li>
					<li>
						Changes in client's business needs or strategy after project completion or approval
					</li>
					<li>Third-party costs or expenses already incurred</li>
				</ul>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">6. Refund Process</h2>
				<p>
					To request a refund, please contact us in writing with your project details and reason for
					the refund request. We will review your request within 5-7 business days and respond with
					our decision.
				</p>
				<p>
					If approved, refunds will be processed within 14 business days using the original payment
					method. Please note that depending on your financial institution, it may take additional
					time for the refund to appear in your account.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">7. Milestone-Based Projects</h2>
				<p>
					For projects with milestone-based payments, refunds will be calculated based on completed
					and approved milestones. Payments for completed milestones are generally non-refundable.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">8. Rush Orders and Expedited Services</h2>
				<p>
					Fees paid for rush orders or expedited services are non-refundable, as they involve
					rearranging our schedule and allocating additional resources to your project.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">9. Disputes</h2>
				<p>
					If you have concerns about your project or billing, please contact us immediately. We are
					committed to resolving issues amicably and will work with you to find a fair solution.
				</p>
				<p>
					Before initiating a chargeback or dispute with your payment provider, please contact us
					directly to discuss the issue. Chargebacks may result in suspension of services and legal
					action to recover costs.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">10. Modifications to This Policy</h2>
				<p>
					Zero Design Studio reserves the right to modify this Refund and Cancellation Policy at any
					time. Changes will be effective immediately upon posting to our website. Your continued
					use of our services constitutes acceptance of any modifications.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">11. Contact Information</h2>
				<p>
					For questions about this policy or to request a cancellation or refund, please contact us
					through the contact information provided on our website.
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
