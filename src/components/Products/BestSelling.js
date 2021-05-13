import { Box, Grid } from '@material-ui/core';
import React from 'react';
import CategoryMenu from '../util/CategoryMenu';
import ProductCard from './ProductCard';

function BestSelling() {
	return (
		<Box padding="2rem">
			<Grid container spacing={1} justify="space-evenly">
				<Grid item lg={3} container>
					<CategoryMenu />
				</Grid>
				<Grid item lg={8} container>
					<Grid item lg={4}>
						<ProductCard
							product={{
								name: 'product1',
								description: 'this is product a',
								image:
									'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
								price: '80₹',
							}}
							width="90%"
						/>
					</Grid>
					<Grid item lg={4}>
						<ProductCard
							product={{
								name: 'product1',
								description: 'this is product a',
								image:
									'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
								price: '80₹',
							}}
							width="90%"
						/>
					</Grid>
					<Grid item lg={4}>
						<ProductCard
							width="90%"
							product={{
								name: 'product1',
								description: 'this is product a',
								image:
									'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
								price: '80₹',
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default BestSelling;
