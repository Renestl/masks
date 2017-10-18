import { MenuItem } from 'react-bootstrap';
import images from '../assets/Images';

// HEADER, FOOTER
export const catalogDropdown = [
	{href:'/catalog', name: 'All'},
	{href:'/masks', name: 'Masks'},
	{href:'/plates', name: 'Plates'},
	{href:'/cups', name: 'Cups'},
	{href:'/other', name: 'Other'}
];

// HEADER
export const blogDropdown = [
	{href:'/post1', name: 'Post1'},
	{href:'/post2', name: 'Post2'},
	{href:'/post3', name: 'Post3'},
	{href:'/post4', name: 'Post4'}
];

// FOOTER
export const information = [
	{href:'/search', name: 'Search'},
	{href:'/about', name: 'About Us'},
	{href:'/', name: 'Home'},
	{href:'/blog', name: 'Blog'},
]

export const myAccount = [
	{href:'/account', name: 'My Account'},
	{href:'/myAddresses', name: 'My Addresses'},
	{href:'/myCart', name: 'My Cart'}
];

export const socialMedia = [
	{
		twitter: "",
		facebook: "",
		youtube: "",
		pinterest: "",
		googlePlus: "",
	}
]

// PRODUCTS FOR FEATURED AND CATALOG

export const products = [
	{
		objectId: 0,
		imgsrc: images.deadpool.uri,
		imgAlt: images.deadpool.altText,
		itemName: images.deadpool.imgName,
		price: "50.00",
		productType: "mask",
		featured: true
	},
	{
		objectId: 1,
		imgsrc: images.egypt.uri,
		imgAlt: images.egypt.altText,
		itemName: images.egypt.imgName,
		price: "150.00",
		productType: "mask",
		featured: true
	},
	{
		objectId: 2,
		imgsrc: images.hero.uri,
		imgAlt: images.hero.altText,
		itemName: images.hero.imgName,
		price: "25.00",
		productType: "plate",
		featured: true
	},
	{
		objectId: 3,
		imgsrc: images.totumPole.uri,
		imgAlt: images.totumPole.altText,
		itemName: images.totumPole.imgName,
		price: "20.00",
		productType: "cup",
		featured: true
	},
	{
		objectId: 4,
		imgsrc:images.volto.uri,
		imgAlt: images.volto.altText,
		itemName: images.volto.imgName,
		price: "15.00",
		productType: "cup",
		featured: false
	},
	{
		objectId: 5,
		imgsrc: images.clown.uri,
		imgAlt: images.clown.altText,
		itemName: images.clown.imgName,
		price: "25.00",
		productType: "plate",
		featured: false
	},
	{
		objectId: 6,
		imgsrc: images.blackMask.uri,
		imgAlt: images.blackMask.altText,
		itemName: images.blackMask.imgName,
		price: "20.00",
		productType: "cup",
		featured: false
	},
	{
		objectId: 7,
		imgsrc:images.boatMask.uri,
		imgAlt: images.boatMask.altText,
		itemName: images.boatMask.imgName,
		price: "15.00",
		productType: "cup",
		featured: false
	}
]
