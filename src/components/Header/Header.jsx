import React, { Component } from 'react';
import './Header.css';

import TopBar from './TopBar';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<TopBar 
					placeholder='Search store'
				/>
			</div>
		)
	}
}

export default Header;