import React, { Component } from 'react';
import { Grid,Col, Row } from 'react-bootstrap';

import { catalogItems, myAccountItems, infoItems } from "../Shared/Navigation";

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
						{infoItems}
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
							1234 This Road
							Saint Louis, MO 63101
							1-987-654-3210
							compEmail@gmail.com
						</FootNav>
					</Col>
				</Row>
				<Row className="socialMedia">
					<Col xs={12}>
						FB, Tweet, IG, G+ icons go here
					</Col>
				</Row>
				<Row className="copyright">
					<Col xs={12}>
						&copy; 2017 Millie's Masks. All Rights Reserved.
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Footer;