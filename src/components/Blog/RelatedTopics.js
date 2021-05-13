import { Box, Button, Grid, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import React from 'react';
import BlogTag from './BlogTag';

function RelatedTopics() {
	return (
		<Box padding="2rem">
			<Grid container style={{ width: '100%' }}>
				<Grid item container justify="space-between" alignItems="center">
					<Grid item>
						<Typography variant="caption" style={{ fontWeight: 'bold' }}>
							Related Topics
						</Typography>
					</Grid>
					<Grid item>
						<Button endIcon={<ArrowRight fontSize="small" />} size="small">
							Button
						</Button>
					</Grid>
				</Grid>
				<Grid item container spacing={8}>
					<Grid item lg={3}>
						<BlogTag />
					</Grid>
					<Grid item lg={3}>
						<BlogTag />
					</Grid>
					<Grid item lg={3}>
						<BlogTag />
					</Grid>
					<Grid item lg={3}>
						<BlogTag />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default RelatedTopics;
