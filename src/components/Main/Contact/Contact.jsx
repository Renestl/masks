import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

class Contact extends Component {
	render() {
		return (
			<Grid className="contact">
				<Row>
					<Col sm={12}>
						<h2>Contact Us</h2>
					</Col>
				</Row>

				<Row>
					<Col sm={12}>
						Map
					</Col>
				</Row>

				<Row>
					<Col sm={12}>
						<form 
							action="" 
							method="" 
							className="contact_form"
						>
							<input type="text" id="name_field" placeholder="Your name..." />
							<input type="text" id="email_field" placeholder="Your email..." />
							<input type="text" id="phone_field" placeholder="Your phone number..." />
							<textarea placeholder="Your message..."></textarea>

							<button id="contact_submit" type="submit">Send</button>
							<button id="contact_delete" type="">Clear</button>
						</form>
					</Col>
				</Row>
				
			</Grid>
		)
	}
}

export default Contact;