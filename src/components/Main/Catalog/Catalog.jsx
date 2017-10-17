import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import { productList } from "../../Shared/Products";

class Catalog extends Component {
	render() {
		return (
			<Grid className="catalog">
				<h2>Products</h2>
				<Row className="products">
					<Col>
						<Row className="product-sort">
							<Col sm={12}>
								<ul>
									<li><a href="/All">All</a></li>
									<li><a href="/Masks">Masks</a></li>
									<li><a href="/Plates">Plates</a></li>
									<li><a href="/Cups">Cups</a></li>
									<li><a href="/Other">Other</a></li>
								</ul>
							</Col>
						</Row>
						<Row className="product-list">
								{productList}
						</Row>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Catalog;