import React, { Component } from 'react';

class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				{/* HEADER BRAND */}
				<section id="logo" className="top-bar_logo">
					<a href="/"><img src="http://via.placeholder.com/100x100" alt="Company Brand" />Millie's Masks</a>
				</section>
				{/* HEADER MENU */}
				<section id="menu">
					<ul className="level-1">
						<li className="level-1_item">
							<a href="/" className="level-1_item_link">home</a>
						</li>
						<li className="level-1_item">
							<a href="/catalog" className="level-1_item_link">catalog</a>
						</li>
						<li className="level-1_item">
							<a href="/blog" className="level-1_item_link">blog</a>
						</li>
						<li className="level-1_item">
							<a href="/about-us" className="level-1_item_link">about us</a>
						</li>
						<li className="level-1_item">
							<a href="/contact" className="level-1_item_link">contact us</a>
						</li>
						<li className="level-1_item">
							<a href="/client-login" className="level-1_item_link">my account</a>
						</li>
					</ul>
				</section>
			</div>
		)
	}
}

export default TopBar;