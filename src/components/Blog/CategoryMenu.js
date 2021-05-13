import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	typography: {
		textDecoration: 'underline',
	},
});

function CategoryMenu() {
	const classes = useStyles();
	return (
		<Grid container direction="column" spacing={1}>
			<Grid item>
				<Typography
					variant="body1"
					style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
				>
					Archieves
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="caption"
					color="primary"
					className={classes.typography}
				>
					March 2020
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="caption"
					color="primary"
					className={classes.typography}
				>
					Feb 2020
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="caption"
					color="primary"
					className={classes.typography}
				>
					April 2020
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="caption"
					color="primary"
					className={classes.typography}
				>
					April 2020
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="caption"
					color="primary"
					className={classes.typography}
				>
					April 2020
				</Typography>
			</Grid>
		</Grid>
	);
}

export default CategoryMenu;
