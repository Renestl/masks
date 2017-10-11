import React, { Component } from 'react';
import './Main.css';

import FrontPage from './FrontPage/FrontPage';
import Blog from './Blog/Blog';
import Catalog from './Catalog/Catalog';
import Contact from './Contact/Contact';
import Account from './Account/Account';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<FrontPage />
				<Blog/>
				<Catalog />
				<Contact />
				<Account />
			</div>
		)
	}
}

export default Main;