import React, { Component } from 'react';
import './Header.css';

import TopBar from './TopBar';
import SecondaryBar from './SecondaryBar';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<TopBar 
					placeholder='Search store'
				/>
				<SecondaryBar />
			</div>
		)
	}
}

export default Header;