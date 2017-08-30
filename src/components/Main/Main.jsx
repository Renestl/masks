import React, { Component } from 'react';
import './Main.css';

import FrontPage from './FrontPage/FrontPage';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<FrontPage />
			</div>
		)
	}
}

export default Main;