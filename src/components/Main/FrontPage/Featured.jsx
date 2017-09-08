import React, { Component } from 'react';
import images from '../../../assets/Images';

function FeaturedItem(props) {
	var classNames= `featured_item`

	return(
		<div className={classNames}>
			<a href={props.link}>
				<img src={"http://via.placeholder.com/275x230"} alt={props.imgAlt} className="showcase_image" />
				<p>{props.itemName}</p>
				<h4>${props.price}</h4>
				<button>Add To Cart</button>
			</a>
		</div>
	)
}

class Featured extends Component {
	render() {
		return (
			<div className="featured">
				<h2>Featured Products</h2>
				<div className="featured_items">
					<FeaturedItem
						imgAlt='New Mask'
						itemName="New Blue Mask"
						price="50.00"
					/>
					<FeaturedItem
						imgAlt='New Mask 2'
						itemName="New Black Mask"
						price="150.00"
					/>
					<FeaturedItem
						imgAlt='New Plate'
						itemName="New Blue Plate"
						price="25.00"
					/>
					<FeaturedItem
						imgAlt='New Cup'
						itemName="New Blue Cup"
						price="20.00"
					/>
				</div>
				
			</div>
		)
	}
}

export default Featured;