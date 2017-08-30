import React, { Component } from 'react';

import Showcase from './Showcase';
import Featured from './Featured';

class FrontPage extends Component {
	render() {
		return (
			<div className="front-page">
				<Showcase />
				<Featured />
			</div>
		)
	}
}

export default FrontPage;