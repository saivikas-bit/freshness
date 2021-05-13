import {
	Box,
	Grid,
	makeStyles,
	Paper,
	Tab,
	Tabs,
	Typography,
} from '@material-ui/core';
import { RateReview, Star } from '@material-ui/icons';
import React from 'react';
import DeliveryCard from './DeliveryCard';
import TableDetail from './TableDetail';

const useStyles = makeStyles({
	image: {
		width: '100%',
		height: '50vh',
		borderRadius: '8px',
		objectFit: 'cover',
	},
	typo: {
		flex: 1,
		whiteSpace: 'nowrap',
	},
});

function ProductDetail() {
	const classes = useStyles();

	return (
		<Box style={{ width: '100vw' }}>
			<Grid container spacing={2}>
				<Grid lg={6} item container direction="column" spacing={2}>
					<Grid item>
						<img
							src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
							className={classes.image}
						/>
					</Grid>
					<Grid item>
						<img
							src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
							className={classes.image}
						/>
					</Grid>
					<Grid item>
						<img
							src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
							className={classes.image}
						/>
					</Grid>
				</Grid>
				<Grid lg={6} item container direction="column" spacing={2}>
					<Grid item>
						<Typography variant="h5" style={{ fontWeight: 'bold' }}>
							Carrots from Tomissy Farm
						</Typography>
						<Typography
							variant="caption"
							style={{ display: 'flex', opacity: '0.5' }}
						>
							<Star fontSize="small" />
							<Star fontSize="small" />
							<Star fontSize="small" />
							<Star fontSize="small" />
							<Star fontSize="small" />
							(1 customer review)
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1">
							Carrots from Tomissy Farm are one of the best on the market.
							Tomisso and his family are giving a full love to his Bio products.
							Tomisso’s carrots are growing on the fields naturally.
						</Typography>
					</Grid>
					<Grid item container justify="space-between">
						<Grid item lg={6} container direction="column">
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									SKU
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									SKU
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Category:
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									vegitables
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Stock:
								</Typography>
								<Typography
									variant="caption"
									className={classes.typo}
									color="primary"
								>
									In Stock
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo} noWrap>
									Farm:
								</Typography>
								<Typography variant="caption" className={classes.typo} noWrap>
									Grocery Tarm Fields
								</Typography>
							</Box>
						</Grid>
						<Grid item lg={6} container direction="column">
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Freshness
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									1 day old
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Buy by:
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									pcs, kgs, box, pack
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Delivery:
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									in 2 days
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="caption" className={classes.typo}>
									Delivery area
								</Typography>
								<Typography variant="caption" className={classes.typo}>
									Adoni Kurnool
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid item>
						<DeliveryCard />
					</Grid>
					<Grid item>
						<Paper variant="outlined">
							<Tabs variant="fullWidth">
								<Tab label="Description" />
								<Tab label="Reviews" />
								<Tab label="Questions" />
							</Tabs>
						</Paper>
					</Grid>
					<Grid item container direction="column" spacing={2}>
						<Grid item>
							<Typography
								variant="caption"
								component="div"
								style={{ fontWeight: 'bold' }}
							>
								Origins
							</Typography>
							<Typography variant="caption">
								We work hard to ensure that the fruit and vegetables we sell are
								fresh and high in quality. If we don’t grow them ourselves, we
								source them from carefully chosen suppliers, preferring to buy
								locally whenever possible.
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant="caption"
								component="div"
								style={{ fontWeight: 'bold' }}
							>
								How to cook
							</Typography>
							<Typography variant="caption">
								From roasts, salads and soups to casseroles and cakes, Carrots
								will lend sweetness, texture and colour to an enormous number of
								recipes.
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant="caption"
								component="div"
								style={{ fontWeight: 'bold' }}
							>
								Full of Vitamins!
							</Typography>
							<TableDetail />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ProductDetail;
