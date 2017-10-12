import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import {catalogItems} from './Navigation';

class Sidebar extends Component {
	render() {
		return (
			<Grid>
				<h2>Collections</h2>

				<h2>Product Types</h2>
				{catalogItems}
			</Grid>
		)
	}
}

export default Sidebar;