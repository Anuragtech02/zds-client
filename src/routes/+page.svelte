<script lang="ts">
	import HomeSecondSection from '$lib/sections/Home/HomeSecondSection.svelte';
	import Hero from '$lib/sections/Home/Hero.svelte';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import ServicesSection from '$lib/sections/Home/ServicesSection.svelte';
	import MarketplaceSection from '$lib/sections/Home/MarketplaceSection.svelte';
	import BannerCTA from '$lib/sections/Home/BannerCTA.svelte';
	import PartnersSection from '$lib/sections/Home/PartnersSection.svelte';
	import LocationsSection from '$lib/sections/Home/LocationsSection.svelte';
	import ContactSection from '$lib/sections/Home/ContactSection.svelte';
	import OurWork from '$lib/sections/Home/OurWork.svelte';
	import { homeSections } from '$lib/utils/contants';
	export let data: any;
</script>

<Hero data={data[homeSections[0]]} />
<!-- <HomeSecondSection /> -->
<OurWork data={data[homeSections[1]]} />
<PartnersSection data={data[homeSections[2]]} />
<ServicesSection data={data[homeSections[3]]} />
<MarketplaceSection data={data[homeSections[4]]} />
<!-- <AboutSection /> -->
<!-- <LocationsSection /> -->
<ContactSection data={data[homeSections[5]]} />
