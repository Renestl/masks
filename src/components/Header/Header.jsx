import React, { Component } from 'react';
import './Header.css';

import TopBar from './TopBar';
import images from '../../assets/Images';

function Jumbotron() {
	return (
		<div className="jumbo">
			<h2 className="title1">Masks as unique as you are.</h2>
			<p></p>
			<img src={images.boatMask.uri} alt={images.boatMask.altText}  />
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