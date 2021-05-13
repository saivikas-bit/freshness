import { Box, Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Footer() {
	const chips = [
		'Beans',
		'Carrots',
		'Apples',
		'Garlic',
		'Mushrooms',
		'Tomatoes',
		'Chilli pepers',
		'Barcoli',
		'WaterMelons',
		'Oranges',
		'Bananas',
		'Grapes',
		'Cherries',
		'Meat',
		'Sea Tag',
		'Fish',
		'Fresh Food',
		'Lemons',
		'mangoes',
	];

	return (
		<div style={{ padding: '2rem 0 2rem 5rem' }}>
			<Grid container>
				<Grid item xl={3} lg={3} container direction="column" spacing={1}>
					<Grid item>
						<Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
							Get in touch
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							about us
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							carrers
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							press releases
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							blog
						</Typography>
					</Grid>
				</Grid>
				<Grid item xl={3} lg={3} spacing={1} direction="column" container>
					<Grid item>
						<Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
							Connections
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Facebook
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Twitter
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Instagram
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Linkenin
						</Typography>
					</Grid>
				</Grid>
				<Grid item xl={3} lg={3} spacing={1} container direction="column">
					<Grid item>
						<Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
							Earnings
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Become an Afillate
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Advertise your product
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Sell on Market
						</Typography>
					</Grid>
				</Grid>
				<Grid item xl={3} lg={3} spacing={1} container direction="column">
					<Grid item>
						<Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
							Account
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Your Account
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							100% Purchase Protection
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Chat With Us
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="primary">
							Help
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Box padding="2rem 0rem" width="80%">
				<Grid container spacing={2}>
					<Grid item lg={12}>
						<Typography variant="h6" style={{ fontWeight: 'bold' }}>
							Product Tags
						</Typography>
					</Grid>
					<Grid item container lg={12} spacing={1}>
						{chips.map((text, key) => (
							<Grid item lg={1} key={key} container>
								<Chip label={text} size="small" />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Box>
			<Box>
				<Typography variant="caption">
					CopyRight &copy; 2020 vikas.com
				</Typography>
			</Box>
		</div>
	);
}

export default Footer;
