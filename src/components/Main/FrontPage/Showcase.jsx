import React, { Component } from 'react';

function ShowcaseItem(props) {
	var classNames= `showcase_item showcase_item__color${props.color}`

	return(
		<div className={classNames}>
			<a href={props.link}>
				<span className="btn">{props.itemName}</span>
				<div className="showcase_item_image">
					<img src="http://via.placeholder.com/369x230" alt={props.imgAlt} className="showcase_image" />
				</div>
			</a>
		</div>
	)
}

class Showcase extends Component {
	render() {
		return (
			<div className="showcase">
				<ShowcaseItem
					color='1'
					link='/Masks'
					itemName="Masks"
					imgAlt="Masks"
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