import { error } from '@sveltejs/kit';
const services = [
	{
		id: 1,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	},
	{
		id: 2,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	},
	{
		id: 3,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	},
	{
		id: 4,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	},
	{
		id: 5,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	},
	{
		id: 6,
		title: 'Animation &  Visual Packaging',
		icon: 'https://ik.imagekit.io/avy76kxdy/fi_4120873.png?updatedAt=1697625509794',
		description: `<h4>Elevate Your Brand through Stunning Animation</h4>
		
		Animation isn't just our craft; it's our passion.
		Our animation and visual packaging services are designed to make your brand stand out. 
		
		
		
		We bring your ideas to life in ways that captivate and leave a lasting impression, whether they be 2D masterpieces or immersive 3D animations.
		
		`,
		image:
			'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1878'
	}
];

export function load({ params }: any) {
	const service = services.find((service) => service.id == params.serviceId);
	if (!service) throw error(404);

	return service;
}
