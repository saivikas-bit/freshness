import { Box, Grid } from '@material-ui/core';
import React from 'react';
import CategoryCard from './CategoryCard';
import ListCategories from './ListCategories';

function CategoryGrid() {
	return (
		<Box padding="2rem">
			<Grid container justify="space-around">
				<Grid item lg={3}>
					<ListCategories />
				</Grid>
				<Grid item container direction="column" spacing={1} lg={8}>
					<Grid item>
						<CategoryCard />
					</Grid>
					<Grid item>
						<CategoryCard />
					</Grid>
					<Grid item>
						<CategoryCard />
					</Grid>
					<Grid item>
						<CategoryCard />
					</Grid>
					<Grid item>
						<CategoryCard />
					</Grid>
					<Grid item>
						<CategoryCard />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default CategoryGrid;
