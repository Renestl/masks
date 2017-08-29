import React, { Component } from 'react';
import './Header.css';

import TopBar from './TopBar';
import Showcase from './Showcase';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<TopBar 
					placeholder='Search store'
				/>
				<Showcase />
			</div>
		)
	}
}

export default Header;