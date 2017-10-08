import React from 'react';
import { MenuItem } from 'react-bootstrap';

// HEADER, FOOTER
export const catalogDropdown = [
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
	{href:'', name: 'Search'},
	{href:'', name: 'About Us'},
	{href:'', name: 'Home'},
	{href:'', name: 'Blog'},
]

export const myAccount = [
	{href:'/myAccount', name: 'My Account'},
	{href:'/myAddresses', name: 'My Addresses'},
	{href:'/myCart', name: 'My Cart'}
];

// export const contactUs = [
// 	{
// 		address1:"1234 This Road",
// 		address2: "",
// 		city: "Saint Louis",
// 		state: "MO",
// 		zipcode: "63101",
// 		phone: "1-987-654-3210",
// 		email: "compEmail@gmail.com"
// 	},
// ];

// PRODUCTS FOR FEATURED AND CATALOG

export const products = [
	{
		imgsrc: "http://via.placeholder.com/275x230",
		imgAlt: 'New Mask',
		itemName: "New Blue Mask",
		price: "50.00",
		productType: "mask",
		featured: true
	},
	{
		imgsrc: "http://via.placeholder.com/275x230",
		imgAlt: 'New Mask ',
		itemName: "New Black Mask",
		price: "150.00",
		productType: "mask",
		featured: true
	},
	{
		imgsrc: "http://via.placeholder.com/275x230",
		imgAlt: 'New Plate',
		itemName: "New Blue Plate",
		price: "25.00",
		productType: "plate",
		featured: true
	},
	{
		imgsrc: "http://via.placeholder.com/275x230",
		imgAlt: 'New Cup',
		itemName: "New Blue Cup",
		price: "20.00",
		productType: "cup",
		featured: true
	},
	{
		imgsrc:"http://via.placeholder.com/275x230",
		imgAlt: "Random Cup",
		itemName: "Random Red Cup",
		price: "15.00",
		productType: "cup",
		featured: false
	}
]
