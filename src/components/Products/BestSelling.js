import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import CategoryMenu from '../util/CategoryMenu';
import ProductCard from './ProductCard';

function BestSelling(props) {
	const { products } = props;

	return (
		<Box padding="2rem">
			<Grid container spacing={1} justify="space-evenly">
				<Grid item lg={3} container>
					<CategoryMenu />
				</Grid>
				<Grid item lg={8} container>
					{products &&
						products.map((product, key) => (
							<Grid item lg={4} key={key}>
								<ProductCard product={product} width="90%" />
							</Grid>
						))}
				</Grid>
			</Grid>
		</Box>
	);
}

export default BestSelling;
