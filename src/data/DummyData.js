import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';

// function LinkItems() {
// 	return(
// 		<MenuItem 
// 		key={} 
// 		href={catalogItem.href}
// 	>
// 		{catalogItem.name}
// 	</MenuItem>
// 	)
// }

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

export const contactUs = [
	{href:'/ContactUs', name: 'Contact Us'},
	{href:'/TBD', name: 'TBD'},
	{href:'/TBD', name: 'TBD'},
];

export const contactItems = contactUs.map((contactItem) =>
	<MenuItem
		key={contactItem.name}
		href={contactItem.href}
	>
		{contactItem.name}
	</MenuItem>
)