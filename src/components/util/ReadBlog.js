import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import BlogCard from '../Blog/BlogCard';
import BlogDetail from '../Blog/BlogDetailCard';
import BlogListCard from '../Blog/BlogListCard';
import BlogTag from '../Blog/BlogTagCard';

function ReadBlog() {
	return (
		<Box padding="2rem 4.5rem">
			<Grid container spacing={4} justify="space-evenly">
				<Grid item lg={12}>
					<Typography variant="h6" style={{ fontWeight: 'bold' }}>
						Read Our Blog Posts
					</Typography>
				</Grid>
				<Grid item lg={4}>
					<BlogCard />
				</Grid>
				<Grid item lg={3} container>
					<BlogTag />
				</Grid>
				<Grid
					item
					lg={4}
					container
					direction="column"
					spacing={1}
					justify="space-between"
				>
					<Grid item>
						<BlogListCard />
					</Grid>
					<Grid item>
						<BlogListCard />
					</Grid>
					<Grid item>
						<BlogListCard />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ReadBlog;
