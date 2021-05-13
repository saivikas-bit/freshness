import React from 'react';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
	cardimage: {
		height: '180px',
		// width: '269px',
		borderRadius: '10px',
	},
	cardcontent: {
		paddingRight: 0,
		paddingLeft: 0,
	},
	button: {
		fontSize: '10px',
		textTransform: 'capitalize',
		padding: 0,
		justifyContent: 'flex-start',
	},
	card: {
		width: '100%',
	},
});

function BlogTag() {
	const classes = useStyles();

	return (
		<Box className={classes.card}>
			<CardMedia
				image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				className={classes.cardimage}
			/>
			<CardContent className={classes.cardcontent}>
				<Typography variant="caption" style={{ fontWeight: 'bold' }}>
					Space for your heding is here, write what you need
				</Typography>
			</CardContent>
			<CardActions className={classes.cardcontent}>
				<Button
					className={classes.button}
					variant="text"
					color="primary"
					size="small"
				>
					Author
				</Button>
				<Button
					className={classes.button}
					variant="text"
					color="primary"
					size="small"
				>
					16,6,2020
				</Button>
			</CardActions>
		</Box>
	);
}

export default BlogTag;
