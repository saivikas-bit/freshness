import {
	Box,
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';
import React from 'react';
import CategoryMenu from '../Blog/CategoryMenu';
import BlogListCard from './BlogListCard';
import BlogTag from './BlogTag';

function BlogsContainer() {
	return (
		<Grid container style={{ padding: '1rem' }}>
			<Grid
				item
				lg={2}
				style={{ boxSizing: 'border-box', marginRight: '2rem' }}
			>
				<CategoryMenu />
				<Box paddingTop="1rem">
					<Typography
						variant="caption"
						style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
					>
						Join our list
					</Typography>
					<Box>
						<Typography
							variant="caption"
							style={{ fontWeight: 'lighter', opacity: '0.5' }}
						>
							Signup to be the first to hear about exclusive deals, special
							offers, recepies from our masters and others.
						</Typography>
					</Box>
					<Box paddingTop="1rem">
						<TextField
							variant="outlined"
							size="small"
							placeholder="your email address"
							InputProps={{
								endAdornment: (
									<InputAdornment>
										<Button>Subscribe</Button>
									</InputAdornment>
								),
							}}
						/>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				lg={6}
				container
				spacing={2}
				style={{ boxSizing: 'border-box' }}
			>
				<Grid item lg={4}>
					<BlogTag />
				</Grid>
				<Grid item lg={4}>
					<BlogTag />
				</Grid>
				<Grid item lg={4}>
					<BlogTag />
				</Grid>
				<Grid item lg={4}>
					<BlogTag />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default BlogsContainer;
