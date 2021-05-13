import { Box, Grid } from '@material-ui/core';
import React from 'react';
import CategoryMenu from './CategoryMenu';

function SubHeader() {
	return (
		<Box padding="2rem 2rem" paddingTop="2rem">
			<Grid container spacing={1} justify="space-evenly">
				<Grid item lg={3} container>
					<CategoryMenu />
				</Grid>
				<Grid item lg={4}>
					<Box>
						<img src="/images/Banner.png" style={{ width: '100%' }} alt="" />
					</Box>
				</Grid>
				<Grid item lg={4}>
					<Box>
						<img src="/images/Banner.png" style={{ width: '100%' }} alt="" />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SubHeader;
