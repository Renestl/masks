import React from 'react';
import { MenuItem } from 'react-bootstrap';

import {catalogDropdown, myAccount, blogDropdown } from '../../../data/DummyData';

// HEADER, FOOTER
export const catalogItems = catalogDropdown.map((catalogItem) => 
	<MenuItem 
		key={catalogItem.name} 
		href={catalogItem.href}
	>
		{catalogItem.name}
	</MenuItem>
);

// HEADER
export const blogItems = blogDropdown.map((blogItem) => 
<MenuItem 
	key={blogItem.name} 
	href={blogItem.href}
>
	{blogItem.name}
</MenuItem>
);

// FOOTER
export const myAccountItems = myAccount.map((accountItem) =>
	<MenuItem
		key={accountItem.name}
		href={accountItem.href}
	>
		{accountItem.name}
	</MenuItem>
);