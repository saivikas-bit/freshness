import { Grid } from '@material-ui/core';
import React from 'react';
import BillingInfo from '../components/Cart/BillingInfo';
import OrderSummary from '../components/Cart/OrderSummary';

function BillingPage() {
	return (
		<Grid
			container
			spacing={4}
			style={{ padding: '2rem' }}
			justify="space-evenly"
		>
			<Grid item lg={7}>
				<BillingInfo />
			</Grid>
			<Grid item lg={3}>
				<OrderSummary />
			</Grid>
		</Grid>
	);
}

export default BillingPage;
