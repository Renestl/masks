import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

class Account extends Component {
	render() {
		return (
			<Grid className="account">
				<Row>
					<Col sm={12}>
						<h2>Login or Create an Account</h2>
					</Col>
				</Row>
				
				<Row>
					<Col sm={12} md={6}>
							<p>New here?</p>
							<p>Registration is free and easy!</p>
							<ul>
								<li><span></span>Faster Checkout</li>
								<li><span></span>Save Multiple Shipping Addresses</li>
								<li><span></span>View and Track Orders and more</li>
							</ul>
						<button id="create_submit" type="submit">Create An Account</button>
					</Col>

					<Col sm={12} md={6}>
					Already registered?
						<form 
							action="" 
							method="" 
							className="account_form"
						>
							<input type="text" id="email_field" placeholder="Email Address" />
							<input type="text" id="phone_field" placeholder="Password" />

							<button id="login_submit" type="submit">Sign In</button>
						</form>
					</Col>
				</Row>

				
			</Grid>
		)
	}
}

export default Account;