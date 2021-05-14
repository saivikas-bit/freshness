import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';

function SectionHeadline(props) {
	const { products } = props;

	return (
		<Box padding="2rem 4rem">
			<Grid container spacing={1} justify="space-evenly">
				<Grid item lg={12}>
					<Typography variant="h6" style={{ fontWeight: 'bold' }}>
						Section Headline
					</Typography>
				</Grid>
				{products &&
					products.map((product, i) => (
						<Grid item lg={3} key={i}>
							<ProductCard product={product} width="90%" />
						</Grid>
					))}
			</Grid>
		</Box>
	);
}

export default SectionHeadline;
