import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	blogimage: {
		height: '85vh',
		borderRadius: '8px',
		maxWidth: '100vw',
		minWidth: '98vw',
		objectFit: 'cover',
		position: 'absolute',
		boxSizing: 'border-box',
	},
	span: {
		color: '#fff',
		marginLeft: '2rem',
	},
	subtitle: {
		width: '30%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	text: {
		color: '#fff',
		flex: 1,
	},
});

function BlogDetail() {
	const classes = useStyles();
	return (
		<Box>
			<Box padding="1rem" position="relative" height="85vh">
				<img
					src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
					alt=""
					className={classes.blogimage}
				/>
				<Box
					position="absolute"
					display="flex"
					alignItems="center"
					bottom="0"
					justifyContent="center"
					width="90%"
					padding="1rem 6rem"
				>
					<Box flex="1"></Box>
					<Typography variant="h4" className={classes.text}>
						Space for your heading, can be larger so don’t worry - large heading
						looks better
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default BlogDetail;
