<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
</script>

<CustomHead
	seo={{
		metaTitle: 'Shipping Policy - Zero Design Studios',
		metaDescription:
			'Shipping and delivery policy for Zero Design Studios physical products and materials.'
	}}
/>

<PageLayout
	title="Shipping Policy"
	description="Delivery terms for physical products and materials"
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
					Zero Design Studios primarily provides digital and experiential services. However, this
					Shipping Policy applies when we deliver physical products, materials, or equipment as part
					of our service offerings or marketplace items.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">2. Digital Deliverables</h2>
				<p>
					Most of our deliverables are digital and will be provided electronically through secure
					file transfer methods, cloud storage links, or email. These digital deliverables do not
					require physical shipping.
				</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Digital files are typically delivered within the agreed project timeline</li>
					<li>Large files may be shared via cloud storage platforms (Google Drive, Dropbox, etc.)</li>
					<li>Access to digital deliverables will be provided upon receipt of full payment</li>
				</ul>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">3. Physical Products</h2>
				<p>When physical items are part of your order, the following terms apply:</p>

				<h3 class="text-xl font-semibold text-white mt-4">Shipping Methods</h3>
				<p>We use reliable courier services based on the size, weight, and destination:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Domestic shipping within India</li>
					<li>International shipping (where applicable)</li>
					<li>Express or standard shipping options available</li>
				</ul>

				<h3 class="text-xl font-semibold text-white mt-4">Processing Time</h3>
				<p>
					Orders are typically processed within 3-5 business days. Custom items or specialized
					equipment may require additional processing time, which will be communicated at the time
					of order.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">4. Shipping Costs</h2>
				<p>Shipping costs are calculated based on:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Package weight and dimensions</li>
					<li>Shipping destination</li>
					<li>Selected shipping method (standard or express)</li>
					<li>Any special handling requirements</li>
				</ul>
				<p class="mt-4">
					Shipping costs will be clearly communicated before you complete your order. For large
					event installations or equipment, shipping/delivery costs will be included in the project
					proposal.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">5. Delivery Timeframes</h2>
				<p>Estimated delivery times vary by location and shipping method:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Domestic (India): 3-7 business days for standard shipping</li>
					<li>Domestic Express: 1-3 business days</li>
					<li>International: 7-21 business days depending on destination</li>
				</ul>
				<p class="mt-4">
					Please note that these are estimates and actual delivery times may vary due to factors
					beyond our control, such as customs clearance, weather conditions, or courier delays.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">6. No Refunds Upon Purchase</h2>
				<p class="font-semibold text-white">
					All sales are final. Once a purchase is made and payment is processed, no refunds will be
					given. Please ensure you review your order carefully before completing the purchase.
				</p>
				<p>
					This no-refund policy applies to all physical products, marketplace items, and any
					purchases made through our website. We encourage you to contact us before making a
					purchase if you have any questions or concerns about a product.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">7. Order Tracking</h2>
				<p>
					Once your order ships, you will receive a tracking number via email. You can use this
					tracking number to monitor your shipment's progress through the courier's website.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">8. Delivery Issues</h2>

				<h3 class="text-xl font-semibold text-white mt-4">Incorrect Address</h3>
				<p>
					Please ensure your shipping address is accurate and complete. We are not responsible for
					orders shipped to incorrect addresses provided by the customer. Address changes after
					shipment may incur additional fees.
				</p>

				<h3 class="text-xl font-semibold text-white mt-4">Failed Delivery Attempts</h3>
				<p>
					If the courier is unable to deliver your package after multiple attempts, it may be
					returned to us. You may be responsible for re-shipping costs.
				</p>

				<h3 class="text-xl font-semibold text-white mt-4">Lost or Damaged Shipments</h3>
				<p>
					If your shipment is lost or damaged in transit, please contact us immediately. We will
					work with the courier to file a claim and arrange for a replacement or refund as
					appropriate.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">9. Installation and On-Site Delivery</h2>
				<p>
					For event installations, immersive experiences, or large-scale projects, we provide
					specialized delivery and installation services:
				</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>Professional installation team</li>
					<li>Equipment setup and configuration</li>
					<li>On-site technical support</li>
					<li>Post-event dismantling and removal (if included in agreement)</li>
				</ul>
				<p class="mt-4">
					Delivery and installation terms for these services will be outlined in your project
					proposal.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">10. International Shipping</h2>
				<p>For international orders:</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>
						Customers are responsible for any customs duties, taxes, or fees imposed by their
						country
					</li>
					<li>Customs clearance delays may affect delivery times</li>
					<li>We cannot control or predict customs charges</li>
					<li>All international shipments require accurate customs documentation</li>
				</ul>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">11. Undeliverable Packages</h2>
				<p>
					If a package is returned to us as undeliverable due to an incorrect address or failed
					delivery attempts, we will contact you to arrange re-shipment. Additional shipping charges
					may apply.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">12. Force Majeure</h2>
				<p>
					We are not liable for delays or failures in delivery caused by circumstances beyond our
					reasonable control, including but not limited to natural disasters, strikes, government
					actions, pandemics, or transportation disruptions.
				</p>
			</div>

			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-white">13. Contact Us</h2>
				<p>
					If you have questions about shipping, need to update your delivery address, or have
					concerns about your shipment, please contact us through the contact information provided
					on our website.
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
