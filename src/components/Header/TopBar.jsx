import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import { catalogItems, blogItems } from "../Shared/Navigation/Navigation";

import images from '../../assets/Images';

class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<Navbar inverse collapseOnSelect fixedTop fluid>
					<Navbar.Header>
						<Navbar.Brand>
							<NavLink to="/">
								<img src={images.logoWhite.uri} alt={images.logoWhite.altText} />
							</NavLink>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem className="level-1_item_link">
								<Link to="/">home</Link>
							</NavItem>
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
							<NavItem className="level-1_item_link">
								<NavLink to="/about-us">
									about us
								</NavLink>
							</NavItem>
							<NavItem className="level-1_item_link">
								<NavLink to="/contact">
									contact us
								</NavLink>
							</NavItem>
							<NavItem className="level-1_item_link">
								<NavLink to="/account">
									my account
								</NavLink>
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default TopBar;