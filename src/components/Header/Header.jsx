import React, { Component } from 'react';
import './Header.css';

import TopBar from './TopBar';

function Jumbotron() {
	return (
		<div className="jumbo">
			<h2 className="title1">Masks as unique as you are.</h2>
			<p></p>
			<img src="http://via.placeholder.com/800x350" alt="Custom Header" />
		</div>
	)
}

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<TopBar 
					placeholder='Search store'
				/>
				<Jumbotron />
			</div>
		)
	}
}

export default Header;