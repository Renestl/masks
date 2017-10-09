import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import { productList } from "../../Shared/Products/Products";

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
									<li><a href=""></a>All</li>
									<li><a href=""></a>Masks</li>
									<li><a href=""></a>Plates</li>
									<li><a href=""></a>Cups</li>
									<li><a href=""></a>Other</li>
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