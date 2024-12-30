<script lang="ts">
	import HomeSecondSection from '$lib/sections/Home/HomeSecondSection.svelte';
	import Hero from '$lib/sections/Home/Hero.svelte';
	import ServicesSection from '$lib/sections/Home/ServicesSection.svelte';
	import MarketplaceSection from '$lib/sections/Home/MarketplaceSection.svelte';
	import PartnersSection from '$lib/sections/Home/PartnersSection.svelte';
	import LocationsSection from '$lib/sections/Home/LocationsSection.svelte';
	import ContactSection from '$lib/sections/Home/ContactSection.svelte';
	import OurWork from '$lib/sections/Home/OurWork.svelte';
	import { homeSections } from '$lib/utils/contants';
	import { homeStore } from '$lib/stores/hero.store';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import InstagramIntegration from '$lib/sections/Home/InstagramIntegration.svelte';

	$: data = $homeStore;
</script>

<CustomHead seo={data?.seo} />
<Hero data={data[homeSections[0]]} />
<!-- <HomeSecondSection /> -->
<OurWork data={data[homeSections[1]]} />
<PartnersSection data={data[homeSections[2]]} />
<ServicesSection data={data[homeSections[3]]} />
<!-- <InstagramIntegration instagramHandle="zerodesignstudio" /> -->
<!-- <MarketplaceSection data={data[homeSections[4]]} /> -->
<FloatingActionButton />
<!-- <AboutSection /> -->
<!-- <LocationsSection /> -->
<ContactSection data={data[homeSections[5]]} />
