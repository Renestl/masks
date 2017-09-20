import React, { Component } from 'react';
import { Grid,Col, Row, MenuItem } from 'react-bootstrap';

// DATA
const catalogDropdown = [
	{href:'/masks', name: 'Masks'},
	{href:'/plates', name: 'Plates'},
	{href:'/cups', name: 'Cups'},
	{href:'/other', name: 'Other'}
];

const catalogItems = catalogDropdown.map((catalogItem) => 
	<MenuItem 
		key={catalogItem.name} 
		href={catalogItem.href}
	>
		{catalogItem.name}
	</MenuItem>
);

const myAccount = [
	{href:'/myAccount', name: 'My Account'},
	{href:'/myAddresses', name: 'My Addresses'},
	{href:'/myCart', name: 'My Cart'}
];

const myAccountItems = myAccount.map((accountItem) =>
	<MenuItem
		key={accountItem.name}
		href={accountItem.href}
	>
		{accountItem.name}
	</MenuItem>
);


// FUNCTIONS
function FootNav (props, children) {
	return (
		<div>
			<h3>{props.columnHeader}</h3>
			{props.children}
		</div>
	)
};

class Footer extends Component {
	render() {
		return (
			<Grid className="footer" fluid>
				<Row>
					<Col xs={12} sm={6} lg={3}>
						<FootNav 
							columnHeader='Information'
						>
						</FootNav>
					</Col>

					<Col xs={12} sm={6} lg={3}>
						<FootNav 
							columnHeader='Catalog'
						>{catalogItems}
						</FootNav>
					</Col>

					<Col xs={12} sm={6} lg={3}>
						<FootNav 
							columnHeader='My Account'
						> {myAccountItems}
						</FootNav>
					</Col>
					
					<Col xs={12} sm={6} lg={3}>
						<FootNav 
							columnHeader='Contact Us'
						>
						</FootNav>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Footer;