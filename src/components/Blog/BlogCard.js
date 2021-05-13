import { Avatar, Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	blogimage: {
		height: '100%',
		borderRadius: '10px',
		position: 'absolute',
		width: '100%',
		objectFit: 'cover',
	},
	blogdata: {
		position: 'absolute',
		bottom: 0,
		width: '80%',
		color: 'white',
		padding: '1rem 1.5rem',
	},
	smallavatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	blogname: {
		fontSize: '12px',
		marginLeft: '0.3rem',
	},
	blogdate: {
		fontSize: '12px',
		marginLeft: '1.5rem',
	},
}));

//you have to set image width implictly

function BlogCard() {
	const classes = useStyles();
	return (
		<Box width="100%" height="400px" position="relative">
			<img
				src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80"
				alt=""
				className={classes.blogimage}
			/>
			<Box className={classes.blogdata}>
				<Typography
					variant="subtitle2"
					color="initial"
					style={{ width: '100%' }}
				>
					This is a space for your blog headline, it can be long don’t worry
					about that
				</Typography>
				<Box display="flex" paddingTop="0.4rem" alignItems="center">
					<Avatar
						src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						className={classes.smallavatar}
					/>
					<span className={classes.blogname}>Name</span>
					<span className={classes.blogdate}>1/2/2021</span>
				</Box>
			</Box>
		</Box>
	);
}

export default BlogCard;
