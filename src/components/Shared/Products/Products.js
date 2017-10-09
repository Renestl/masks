import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

import { products } from '../../../data/DummyData';

// export const thumbnailInstance = (
// 	<Thumbnail src={productItem.imgsrc} alt={products.imgAlt}>
// 		<h3>{products.itemName}</h3>
// 		<p>${products.price}</p>
// 		<p>
// 			<Button bsStyle="primary">Add To Cart</Button>
// 		</p>
// 	</Thumbnail>
// )

// class ThumbnailInstance extends Component {
// 	render() {
// 		return (
// 			<Thumbnail src={this.props.imgsrc} alt={products.imgAlt}>
// 			<h3>{products.itemName}</h3>
// 			<p>${products.price}</p>
// 			<p>
// 				<Button bsStyle="primary">Add To Cart</Button>
// 			</p>
// 		</Thumbnail>
// 		)
// 	}
// }

// FEATURED ITEMS
export const featuredItems = products.map(function(featureItem) {
	if(featureItem.featured === true) {
		return (
			<li
				key={featureItem.itemName}
				href={featureItem.imgSrc}
				itemName={featureItem.itemName}
				alt={featureItem.imgAlt}
				price={featureItem.price}
			/>
		)
	}
});

export const productList = products.map(function(productItem) {
	return (
		<Col xs={6} md={4} key={productItem.objectId}>
			<Thumbnail src={productItem.imgsrc} alt={productItem.imgAlt}>
				<h3>{productItem.itemName}</h3>
				<p>${productItem.price}</p>
				<p>
					<Button bsStyle="primary">Add To Cart</Button>
				</p>
			</Thumbnail>
		</Col>
	)
});