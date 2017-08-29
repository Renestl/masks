import React, { Component } from 'react';

class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				{/* HEADER BRAND */}
				<section id="logo" className="top-bar_logo">
					<a href="/"><img src="http://via.placeholder.com/100x100" alt="Company Brand" />Millie's Masks</a>
				</section>
			</div>
		)
	}
}

export default TopBar;