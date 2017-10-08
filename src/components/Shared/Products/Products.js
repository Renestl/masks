import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

import { products } from '../../../data/DummyData';

// FEATURED ITEMS
export const featuredItems = products.map(function(featureItem) {
	if(featureItem.featured === true) {
		return (
			<li
				key={featureItem.itemName}
				href={featureItem.imgSrc}
				itemName={featureItem.itemName}
				alt={featureItem.imgAlt}
				price={featureItem.price}
			/>
		)
	}
});