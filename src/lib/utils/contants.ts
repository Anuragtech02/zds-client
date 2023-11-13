import type { Link } from '$lib/types/components';

export const NAV_LINKS: Link[] = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Work',
		url: '/work'
	},
	{
		name: 'About',
		url: '/about'
	},

	{
		name: 'Contact Us',
		url: '/contact'
	}
];
export const homeSections = ['Hero', 'Works', 'Brands', 'Service', 'MarketPlace', 'Form'];

export const HOME_SERVICES = [
	{
		id: 1,
		title: 'Multimedia Productions',
		icon: '/images/services/R1.png',
		services: ['Content Production', 'VFX', 'Animation & Visual Packaging', 'Anamorphic Content']
	},
	{
		id: 2,
		title: 'Event Experiences',
		icon: '/images/services/R2.png',
		services: ['Entertainment Technology ', 'Immersive Experiences', 'Multimedia Show Design']
	},
	{
		id: 3,
		title: 'Event Experiences',
		icon: '/images/services/R3.png',
		services: [
			'New Media Art Installations',
			'Digital Art Curation',
			'Art-Tech Collaborations',
			'Interactive Installations'
		]
	},
	{
		id: 4,
		title: 'Entertainment Technology',
		icon: '/images/services/R4.png',
		services: [
			'LED Technology Integration',
			'Audio-Visual Production',
			'Virtual and Augmented Reality (VR/AR)',
			'Permanent shows & museums'
		]
	}
];
