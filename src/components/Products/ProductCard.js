import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../models/Product';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Typography,
} from '@material-ui/core';

function ProductCard(props) {
	const clientId = 'pS4hSb2cvAyN1m6YEI1HpcrWik-vCfDQuVw-X8T20h4';
	let [products, setProducts] = useState([]);
	let { product } = props;
	let { width } = props;

	useEffect(() => {
		axios
			.get('/search/photos', {
				params: {
					query: 'food',
					client_id: clientId,
					page: 2,
					orientation: 'landscape',
				},
			})
			.then(({ data }) => {
				// let value;
				let product = data.results.map(
					(product) =>
						new Product({
							name: product['alt_description'],
							image: product['urls']['small'],
							description: product['description'],
							price: (
								Math.floor(Math.random() * (50 - 100) + 100) + '₹'
							).toString(),
						})
				);
				setProducts(product);
			});
	}, []);
	return (
		<div style={{ width: width }}>
			<Paper
				variant="outlined"
				style={{
					padding: '1rem',
				}}
			>
				<CardMedia
					image={product.image}
					style={{ width: '100%', height: '180px', borderRadius: '8px' }}
				/>
				<CardContent style={{ padding: 0 }}>
					<Typography variant="h6" style={{ fontWeight: 'bold' }}>
						{product.name}
					</Typography>
					<Typography variant="subtitle1" noWrap={true}>
						{product.description || 'this is test description for the product'}
					</Typography>
				</CardContent>
				<CardActions style={{ justifyContent: 'space-between' }}>
					<Typography variant="h5" style={{ flex: 1, fontWeight: 'bolder' }}>
						{product.price}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						disableElevation
						style={{ borderRadius: '10px' }}
					>
						Buy now
					</Button>
				</CardActions>
			</Paper>
		</div>
	);
}

export default ProductCard;
