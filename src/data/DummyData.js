import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';

// HEADER, FOOTER
export const catalogDropdown = [
	{href:'/masks', name: 'Masks'},
	{href:'/plates', name: 'Plates'},
	{href:'/cups', name: 'Cups'},
	{href:'/other', name: 'Other'}
];

export const catalogItems = catalogDropdown.map((catalogItem) => 
	<MenuItem 
		key={catalogItem.name} 
		href={catalogItem.href}
	>
		{catalogItem.name}
	</MenuItem>
);

// HEADER
export const blogDropdown = [
	{href:'/post1', name: 'Post1'},
	{href:'/post2', name: 'Post2'},
	{href:'/post3', name: 'Post3'},
	{href:'/post4', name: 'Post4'}
];

export const blogItems = blogDropdown.map((blogItem) => 
<MenuItem 
	key={blogItem.name} 
	href={blogItem.href}
>
	{blogItem.name}
</MenuItem>
);

// FOOTER
export const myAccount = [
	{href:'/myAccount', name: 'My Account'},
	{href:'/myAddresses', name: 'My Addresses'},
	{href:'/myCart', name: 'My Cart'}
];

export const myAccountItems = myAccount.map((accountItem) =>
	<MenuItem
		key={accountItem.name}
		href={accountItem.href}
	>
		{accountItem.name}
	</MenuItem>
);

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