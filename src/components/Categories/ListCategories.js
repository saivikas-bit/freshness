import {
	Box,
	Checkbox,
	Chip,
	FormControlLabel,
	Grid,
	Typography,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';
import React from 'react';

function ListCategories() {
	return (
		<Grid container direction="column" spacing={2}>
			<Grid item>
				<Typography variant="h6">Categories</Typography>
				<Box display="flex" justifyContent="space-between">
					<Typography>Category Name</Typography>
					<Chip label="12" />
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography>Category Name</Typography>
					<Chip label="12" />
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography>Category Name</Typography>
					<Chip label="12" />
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography>Category Name</Typography>
					<Chip label="12" />
				</Box>
			</Grid>
			<Grid item container direction="column">
				<Typography variant="h6">Brands</Typography>
				<FormControlLabel control={<Checkbox />} label="Filter by Brand" />
				<FormControlLabel control={<Checkbox />} label="Filter by Brand" />
				<FormControlLabel control={<Checkbox />} label="Filter by Brand" />
				<FormControlLabel control={<Checkbox />} label="Filter by Brand" />
			</Grid>
			<Grid item direction="column" container>
				<Typography variant="h6">Rating</Typography>
				<FormControlLabel
					control={<Checkbox />}
					label={
						<>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</>
					}
				/>
				<FormControlLabel
					control={<Checkbox />}
					label={
						<>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</>
					}
				/>
				<FormControlLabel
					control={<Checkbox />}
					label={
						<>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</>
					}
				/>
				<FormControlLabel
					control={<Checkbox />}
					label={
						<>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</>
					}
				/>
			</Grid>
		</Grid>
	);
}

export default ListCategories;
