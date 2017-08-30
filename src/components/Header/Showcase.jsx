import React, { Component } from 'react';

class Showcase extends Component {
	render() {
		return (
			<div className="showcase">
				<div className="showcase_item showcase_item__color1">
					<a href="/masks">
						<span className="btn">Masks</span>
						<div className="showcase_item_image">
							<img src="http://via.placeholder.com/369x230" alt="Masks" className="showcase_image" />
						</div>
					</a>
				</div>
				<div className="showcase_item showcase_item__color2">
					<a href="/plates">
						<span className="btn">Plates</span>
						<div className="showcase_item_image">
							<img src="http://via.placeholder.com/369x230" alt="Plates" className="showcase_image" />
						</div>
					</a>
				</div>
				<div className="showcase_item showcase_item__color3">
					<a href="/cups">
						<span className="btn">Cups</span>
						<div className="showcase_item_image">
							<img src="http://via.placeholder.com/369x230" alt="Cups" className="showcase_image" />
						</div>
					</a>
				</div>
			</div>
		)
	}
}

export default Showcase;