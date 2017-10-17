import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

import ShoppingCart from './ShoppingCart';
import Login from './Login';

class Account extends Component {
	render() {
		return (
			<Grid className="account">
				<Login />
				<ShoppingCart />
			</Grid>
		)
	}
}

export default Account;