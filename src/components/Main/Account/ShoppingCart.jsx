import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import { productList } from "../../Shared/Products";

class ShoppingCart extends Component {
	render() {
		return (
			<Grid className="catalog">
				<h2>Shopping Cart</h2>
				<Row className="shopping-cart">
					<Col>
						<span className="empty-cart">It appears that your cart is current empty</span>

					</Col>
				</Row>
			</Grid>
		)
	}
}

export default ShoppingCart;