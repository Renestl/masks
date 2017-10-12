import React, { Component } from 'react';

import Showcase from './Showcase';
import Featured from './Featured';

import images from '../../../assets/Images';

function Jumbotron() {
	return (
		<div className="jumbo">
			<h2 className="title1">Masks as unique as you are.</h2>
			<p></p>
			<img src={images.boatMask.uri} alt={images.boatMask.altText}  />
		</div>
	)
}

class FrontPage extends Component {
	render() {
		return (
			<div className="front-page">
				<Jumbotron />
				<Showcase />
				<Featured />
			</div>
		)
	}
}

export default FrontPage;