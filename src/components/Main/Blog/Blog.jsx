import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';

import BlogPosts from './BlogPosts';

import {blogDropdown} from '../../../data/DummyData';

const Blog = (postNumber) => (
	<Switch>
		<Route exact path='/blog' component={BlogPosts} />
	</Switch>
)

export default Blog;