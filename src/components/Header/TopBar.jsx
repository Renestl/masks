import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { catalogDropDown, blogDropdown } from '../../data/DummyData';
import { catalogItems, blogItems } from "../Shared/Navigation/Navigation";

import images from '../../assets/Images';

class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<Navbar inverse collapseOnSelect fixedTop fluid>
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
							<NavDropdown 
								title="Catalog" 
								className="level-1_item_link"
								id="nav-catalog-dropdown"
							>
								{catalogItems}						
							</NavDropdown>
								
							<NavDropdown 
								title="Blog" 
								className="level-1_item_link"
								id="blog-catalog-dropdown"
							>
								{blogItems}
							</NavDropdown>
							<NavItem href="/about-us" className="level-1_item_link">about us</NavItem>
							<NavItem href="/contact" className="level-1_item_link">contact us</NavItem>
							<NavItem href="/client-login" className="level-1_item_link">my account</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default TopBar;