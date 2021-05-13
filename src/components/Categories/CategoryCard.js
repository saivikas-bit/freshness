import {
	Box,
	Button,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import { ArrowRight, FavoriteBorder, Star } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
	cardimage: {
		height: '35vh',
		borderRadius: '8px',
		width: '100%',
		objectFit: 'cover',
		padding: 0,
		whiteSpace: 'nowrap',
	},
	typo: {
		flex: 1,
	},
});

function CategoryCard() {
	const classes = useStyles();
	return (
		<Paper variant="outlined">
			<Grid container alignItems="flex-end">
				<Grid item lg={4}>
					<img
						className={classes.cardimage}
						src="https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					/>
				</Grid>
				<Grid
					item
					container
					lg={8}
					style={{ padding: '1rem' }}
					justify="space-between"
				>
					<Grid
						item
						container
						direction="column"
						justify="space-between"
						lg={5}
					>
						<Grid item>
							<Typography variant="h6" style={{ fontWeight: 'bold' }}>
								Product1
							</Typography>
							<Typography variant="caption">
								this is product desciption
							</Typography>
							<Box>
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</Box>
						</Grid>
						<Grid item style={{ flex: 1, paddingTop: '1rem' }}>
							<Box>
								<Box display="flex">
									<Typography variant="caption" className={classes.typo}>
										Freshness
									</Typography>
									<Typography variant="caption" className={classes.typo}>
										new
									</Typography>
								</Box>
								<Box display="flex">
									<Typography variant="caption" className={classes.typo}>
										Farm:
									</Typography>
									<Typography variant="caption" className={classes.typo}>
										Grocery Tarm Feilds
									</Typography>
								</Box>
								<Box display="flex">
									<Typography variant="caption" className={classes.typo}>
										Delivery
									</Typography>
									<Typography variant="caption" className={classes.typo}>
										India
									</Typography>
								</Box>
								<Box display="flex">
									<Typography variant="caption" className={classes.typo}>
										Stock
									</Typography>
									<Typography
										variant="caption"
										color="primary"
										className={classes.typo}
									>
										399pcs
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Grid item container direction="column" lg={4}>
						<Typography variant="h5">₹36</Typography>
						<Typography variant="caption">₹12</Typography>
						<Box display="flex" flexDirection="column">
							<Typography variant="caption">Free Shipping </Typography>
							<Typography variant="caption">Delivery in Day </Typography>
						</Box>
						<Box display="flex" flexDirection="column" padding="1rem">
							<Box>
								<Button
									endIcon={<ArrowRight />}
									variant="contained"
									color="primary"
									fullWidth={false}
								>
									Add to Cart
								</Button>
							</Box>
							<Box paddingTop="0.5rem">
								<Button startIcon={<FavoriteBorder />} variant="outlined">
									Add to Cart
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default CategoryCard;
