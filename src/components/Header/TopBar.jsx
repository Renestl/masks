import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import images from '../../assets/Images';

class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<Navbar inverse collapseOnSelect fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">
								<img src={images.logoWhite.uri} alt={images.logoWhite.altText} />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem href="/" className="level-1_item_link">home</NavItem>
							<NavItem href="/catalog" className="level-1_item_link">catalog</NavItem>
							<NavItem href="/blog" className="level-1_item_link">blog</NavItem>
							<NavItem href="/about-us" className="level-1_item_link">about us</NavItem>
							<NavItem href="/contact" className="level-1_item_link">contact us</NavItem>
							<NavItem href="/client-login" className="level-1_item_link">my account</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>


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

export default TopBar;