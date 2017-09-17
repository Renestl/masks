import React, { Component } from 'react';

class SecondaryBar extends Component {
	render() {
		return (
			<div className='secondarybar'>
				{/* HEADER CART */}
				<div id="header_cart">
					<a href="/cart">
						<span className="icon">Cart icon</span>
						<span id="cart_items">0</span>
					</a>
				</div>

				{/* HEADER SEARCH */}
				<div id="header_search">
					<span className="icon"></span>
					<form action="/search" method="GET" className="search_form">
						<input type="text" id="search_field" placeholder={this.props.placeholder} />
						<button id="search_submit">
							<span className="icon">search glass icon</span>
						</button>
					</form>
				</div>
			</div>
		)
	}
}
			

export default SecondaryBar;