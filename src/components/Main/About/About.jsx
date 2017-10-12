import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class About extends Component {
	render() {
		return (
			<Grid className="about-us">
				<Row>
					<Col sm={12}>
						<h2>About Millie's Masks</h2>
					</Col>
				</Row>

				<Row>
					<Col sm={12}>
						<p>Pick what fits your personality.</p>
					</Col>
				</Row>

				<Row>
					<Col sm={12}>
						<p>Whoa a real live robot; or is that some kind of cheesy New Year's costume? I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man.</p>
					</Col>
				</Row>

				<Row>
					<Col sm={4}>
						<span>Icon Here</span>
						<p>Interesting. No, wait, the other thing: tedious. I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. You're going back for the Countess, aren't you? Fry! Quit doing the right thing, you jerk!</p>
					</Col>
					<Col sm={4}>
						<span>Icon Here</span>
						<p>Aww, it's true. I've been hiding it for so long.You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Hey, you add a one and two zeros to that or we walk! You're going back for the Countess, aren't you? We're rescuing ya.</p>
					</Col>
					<Col sm={4}>
						<span>Icon Here</span>
						<p>Spare me your space age technobabble, Attila the Hun!We'll need to have a look inside you with this camera. Bender, we're trying our best. Hello, little man. I will destroy you! Shut up and take my money! In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.</p>
					</Col>
				</Row>
				
			</Grid>
		)
	}
}

export default About;