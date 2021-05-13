import {
	Box,
	Button,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import {
	Add,
	ArrowDropDown,
	CompareArrowsOutlined,
	FavoriteBorder,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
	price: {
		textDecoration: ' line-through',
		opacity: '0.5',
	},
});

function DeliveryCard() {
	const classes = useStyles();
	return (
		<Grid container direction="column">
			<Grid item container>
				<Paper
					style={{
						padding: '0.5rem',
						flex: 1,
					}}
				>
					<Box display="flex" justifyContent="space-between">
						<Box>
							<Typography variant="h5" color="primary">
								₹35 Ruppes
							</Typography>
							<Typography variant="subtitle1" className={classes.price}>
								₹25 Ruppes
							</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Button variant="outlined" style={{ marginRight: '0.4rem' }}>
								1 | pcs <ArrowDropDown />
							</Button>
							<Button variant="contained" color="primary" startIcon={<Add />}>
								Add to Cart
							</Button>
						</Box>
					</Box>
				</Paper>
			</Grid>
			<Grid item>
				<Button startIcon={<CompareArrowsOutlined color="secondary" />}>
					Compare
				</Button>
				<Button
					startIcon={<FavoriteBorder color="secondary" />}
					style={{ marginLeft: '1rem' }}
				>
					Add to Favorite
				</Button>
			</Grid>
		</Grid>
	);
}

export default DeliveryCard;
