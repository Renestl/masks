import React, { Component, Image } from 'react';
import images from '../../../assets/Images';

function ShowcaseItem(props) {
	var classNames= `showcase_item showcase_item__color${props.color}`

	return(
		<div className={classNames}>
			<a href={props.link}>
				<span className="btn">{props.itemName}</span>
				<div className="showcase_item_image">
					<img
						src={images.blackMask.uri}
						alt={images.blackMask.altText}
					/>
				</div>
			</a>
		</div>
	)
}
// http://via.placeholder.com/369x230
class Showcase extends Component {
	render() {
		return (
			<div className="showcase">
				<ShowcaseItem
					color='1'
					link='/Masks'
					itemName="Masks"
				/>
				<ShowcaseItem
					color='2'
					link='/Plates'
					itemName="Plates"
					imgAlt="Plates"
				/>
				<ShowcaseItem
					color='3'
					link='/Cups'
					itemName="Cups"
					imgAlt="Cups"
				/>
			</div>
		)
	}
}

export default Showcase;