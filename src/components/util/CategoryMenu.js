import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
	underline: {
		textDecoration: 'underline',
	},
});

function CategoryMenu() {
	const classes = useStyles();
	return (
		<Box display="flex" flexDirection="column" justifyContent="space-between">
			<Box flex="1">
				<Typography variant="subtitle1" component="div">
					Category Menu
				</Typography>
				<Typography
					variant="subtitle1"
					color="primary"
					className={classes.underline}
					component="div"
				>
					Bakery
				</Typography>
				<Typography
					variant="subtitle1"
					color="primary"
					component="div"
					className={classes.underline}
				>
					Fruits and Vegitables
				</Typography>
				<Typography
					variant="subtitle1"
					color="primary"
					component="div"
					className={classes.underline}
				>
					Meat and Fish
				</Typography>
				<Typography
					variant="subtitle1"
					color="primary"
					component="div"
					className={classes.underline}
				>
					Drinks
				</Typography>
				<Typography
					variant="subtitle1"
					color="primary"
					component="div"
					className={classes.underline}
				>
					Chiken
				</Typography>
			</Box>
			<Box>
				<Button variant="outlined" endIcon={<ArrowRight />}>
					more categories
				</Button>
			</Box>
		</Box>
	);
}

export default CategoryMenu;
