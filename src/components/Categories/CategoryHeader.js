import {
	Box,
	Button,
	Chip,
	FormControlLabel,
	Grid,
	Typography,
} from '@material-ui/core';
import { GridOn, Reorder } from '@material-ui/icons';
import React from 'react';

function CategoryHeader() {
	return (
		<Box padding="2rem">
			<Grid container>
				<Grid item container justify="space-between">
					<Typography variant="h5"> Fruits and Vegitables</Typography>
					<Box>
						<Button size="small" endIcon={<GridOn />}>
							Grid
						</Button>
						<Button size="small" endIcon={<Reorder />}>
							List
						</Button>
						<FormControlLabel control={<Chip label="18" />} label="products" />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default CategoryHeader;
