import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import {
	ArrowDropDown,
	Close,
	CompareArrowsOutlined,
	ExpandMore,
	FavoriteBorder,
	FavoriteOutlined,
	StarRate,
} from '@material-ui/icons';

function CartCard() {
	return (
		<Grid
			container
			wrap="nowrap"
			direction="column"
			spacing={1}
			style={{ padding: '1rem 0rem' }}
		>
			<Grid item container wrap="nowrap">
				<Grid item lg={6} xs={6}>
					<img
						src="https://images.unsplash.com/photo-1611095966422-50a79dd5313b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
						style={{ width: '90%', height: '5rem', borderRadius: '8px' }}
					/>
				</Grid>
				<Grid
					item
					container
					direction="column"
					lg={5}
					xs={5}
					justify="space-between"
				>
					<Typography variant="caption">Title</Typography>
					<Typography
						variant="caption"
						style={{
							display: 'flex',
						}}
					>
						<span style={{ flex: 1 }}>Farm:</span>
						<span style={{ flex: 1 }}>Freshness</span>
					</Typography>

					<Typography
						variant="caption"
						style={{
							display: 'flex',
						}}
					>
						<span style={{ flex: 1 }}>Freshness</span>
						<span style={{ flex: 1 }}>Farm:</span>
					</Typography>
				</Grid>
			</Grid>
			<Grid item container>
				<Grid item container direction="column" lg={6} xl={6} xs={6}>
					<Button
						variant="text"
						startIcon={<FavoriteBorder color="secondary" />}
						size="small"
						style={{
							fontSize: '12px',
							textTransform: 'capitalize',
							justifyContent: 'flex-start',
						}}
					>
						Wishlist
					</Button>
					<Button
						variant="text"
						startIcon={<CompareArrowsOutlined color="secondary" />}
						size="small"
						style={{
							fontSize: '12px',
							textTransform: 'capitalize',
							justifyContent: 'flex-start',
						}}
					>
						compare
					</Button>
					<Button
						variant="text"
						startIcon={<Close color="secondary" />}
						size="small"
						style={{
							fontSize: '12px',
							textTransform: 'capitalize',
							justifyContent: 'flex-start',
						}}
					>
						remove
					</Button>
				</Grid>
				<Grid
					item
					container
					direction="column"
					justify="space-between"
					lg={6}
					xl={6}
					xs={6}
				>
					<Grid item>
						<StarRate htmlColor="orange" />
						<StarRate htmlColor="orange" />
						<StarRate htmlColor="orange" />
						<StarRate htmlColor="orange" />
						<StarRate htmlColor="orange" />
					</Grid>
					<Grid item container justify="space-around" alignItems="center">
						<Grid item>
							<Typography
								variant="h5"
								style={{ fontWeight: 'bold' }}
								color="primary"
							>
								₹50
							</Typography>
							<Typography
								variant="caption"
								style={{ fontWeight: 'normal', textDecoration: 'line-through' }}
							>
								₹30
							</Typography>
						</Grid>
						<Grid item>
							<Button
								variant="outlined"
								style={{ borderRadius: '14px' }}
								size="small"
							>
								<Box display="flex" fontSize="12px">
									<span
										style={{
											fontWeight: 'lighter',
											opacity: '0.5',
											marginRight: '0.3rem',
										}}
									>
										1pcs
									</span>{' '}
									| pcs <ExpandMore fontSize="small" />
								</Box>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CartCard;
