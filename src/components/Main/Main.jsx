import React, { Component } from 'react';
import './Main.css';

import FrontPage from './FrontPage/FrontPage';
import Catalog from './Catalog/Catalog';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<FrontPage />
				<Catalog />
			</div>
		)
	}
}

export default Main;