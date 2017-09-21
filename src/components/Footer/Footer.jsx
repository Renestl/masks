import React, { Component } from 'react';
import { Grid,Col, Row, MenuItem } from 'react-bootstrap';
import {catalogDropdown, catalogItems, myAccount, myAccountItems } from '../../data/DummyData';

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