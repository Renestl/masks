import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class SecondaryBar extends Component {
	render() {
		return (
			<div className='secondarybar'>
				<Col xs={12} md={4} mdOffset={8}>
					{/* HEADER CART */}
					<div id="header_cart">
						<a href="/cart" aria-label="View shopping cart">
							<span 
								className="icon fa fa-shopping-cart fa-2x fa-fw" aria-hidden="true"
							>
								<span id="cart_items">0</span>
							</span>
						</a>
					</div>
				</Col>
				

				{/* HEADER SEARCH */}
				<div id="header_search">
					<span 
						className="icon fa fa-search fa-2x fa-fw" aria-hidden="true"
						aria-label="Search">
					</span>

					<form 
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
					</form>
				</div>
			</div>
		)
	}
}
			

export default SecondaryBar;