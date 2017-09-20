import React, { Component } from 'react';
import './Main.css';

import FrontPage from './FrontPage/FrontPage';
import Products from './Products/Products';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<FrontPage />
				<Products />
			</div>
		)
	}
}

export default Main;