import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class BlogPosts extends Component {
	render() {
		return (
			<Grid>
				<Row className="section_header">
						<Col xs={12}>
							<h3>Blog</h3>
						</Col>
				</Row>
				<Row>
						<Col xs={12} sm={6} md={4} lg={3}>
							<p className="blog_title">Uh, is the puppy mechanical in any way?</p>
							<p className="blog_descipt">I'm just glad my fat, ugly mama isn't alive to see this day. Then throw her in the laundry room, which will hereafter be referred to as "the brig". You, a bobsleder!? That I'd like to see! I just told you! You've killed me!</p>
							<p className="blog_date">1/1/2018</p>
						</Col>
						<Col xs={12} sm={6} md={4} lg={3}>
							<p className="blog_title">Uh, is the puppy mechanical in any way?</p>
							<p className="blog_descipt">I'm just glad my fat, ugly mama isn't alive to see this day. Then throw her in the laundry room, which will hereafter be referred to as "the brig". You, a bobsleder!? That I'd like to see! I just told you! You've killed me!</p>
							<p className="blog_date">1/1/2018</p>
						</Col>
				</Row>
			</Grid>
		)
	}
}

export default BlogPosts;