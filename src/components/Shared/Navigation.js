import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {catalogDropdown, myAccount, blogDropdown, information } from '../../data/DummyData';

// HEADER, FOOTER
export const catalogItems = catalogDropdown.map((catalogItem) => 
	<MenuItem 
		key={catalogItem.name} 
		href={catalogItem.href}
	>
		<Link to={catalogItem.href}>
			{catalogItem.name}
		</Link>		
	</MenuItem>
);

// HEADER
export const blogItems = blogDropdown.map((blogItem) => 
<MenuItem 
	key={blogItem.name} 
	href={blogItem.href}
>
	<Link to={blogItem.href}>
		{blogItem.name}
	</Link>
</MenuItem>
);

// FOOTER
export const infoItems = information.map((infoItem) =>
	<MenuItem
		key={infoItem.name}
		href={infoItem.href}
	>
		<Link to={infoItem.href}>
			{infoItem.name}
		</Link>
	</MenuItem>
);

export const myAccountItems = myAccount.map((accountItem) =>
	<MenuItem
		key={accountItem.name}
		href={accountItem.href}
	>
		<Link to={accountItem.href}>
			{accountItem.name}
		</Link>
	</MenuItem>
);