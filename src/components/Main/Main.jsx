import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './Main.css';

import FrontPage from './FrontPage/FrontPage';
import Blog from './Blog/Blog';
import Catalog from './Catalog/Catalog';
import About from './About/About';
import Contact from './Contact/Contact';
import Account from './Account/Account';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<Switch>

					<Route exact path='/' component={FrontPage}/>
					<Route path='/blog' component={Blog}/>
					<Route path='/catalog' component={Catalog}/>
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/account' component={Account}/>
				</Switch>
			</div>
		)
	}
}

export default Main;