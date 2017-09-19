import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

class SecondaryBar extends Component {
	render() {
		return (
			<Grid className='secondarybar' fluid>
				<Row>
					{/* Possible Announcements Bar where the current mdOffset is */}
					<Col xs={2} xsOffset={7} sm={1} smOffset={7} md={1} mdOffset={9} id="header_cart">
						{/* HEADER CART */}
							<a href="/cart" aria-label="View shopping cart">
								<span 
									className="icon fa fa-shopping-cart fa-lg fa-fw" aria-hidden="true"
								>
									<span id="cart_items">0</span>
								</span>
							</a>
					</Col>
					
					<Col xs={2} sm={1} md={1} id="header_search">
						{/* HEADER SEARCH */}
							<span 
								className="icon fa fa-search fa-lg fa-fw" aria-hidden="true"
								aria-label="Search">
							</span>

							{/* <form 
								action="/search" 
								method="GET" 
								className="search_form"
							>
								<input type="text" id="search_field" placeholder="Search store" />
								<button id="search_submit" type="submit" >
									<span 
										className="icon fa fa-search fa-2x fa-fw" aria-hidden="true"
										aria-label="Search">
									</span>
								</button>
							</form> */}
					</Col>
				</Row>	
			</Grid>
		)
	}
}
			

export default SecondaryBar;