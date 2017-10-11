import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './Main.css';

import FrontPage from './FrontPage/FrontPage';
import Blog from './Blog/Blog';
import Catalog from './Catalog/Catalog';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<Switch>

					<Route exact path='/' component={FrontPage}/>
					<Route path='/blog' component={Blog}/>
					<Route path='/catalog' component={Catalog}/>
				</Switch>
			</div>
		)
	}
}

export default Main;