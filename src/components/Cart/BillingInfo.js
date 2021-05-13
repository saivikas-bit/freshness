import {
	Box,
	Grid,
	Typography,
	TextField,
	Checkbox,
	FormControlLabel,
	Paper,
	makeStyles,
	Button,
} from '@material-ui/core';
import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
	paymentMethods: {
		borderRadius: '10px',
		padding: '0.4rem 0.8rem',
		background: '#FFF',
		width: '100%',
		border: '1px solid #D1D1D1',
		marginTop: '1rem',
	},
});

function BillingInfo() {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h5" style={{ fontWeight: 'bold' }}>
				Billing info
			</Typography>
			<Typography variant="caption">Please enter your billing info</Typography>
			<Box paddingTop="1rem">
				<Grid container spacing={3}>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Fisrt Name</Typography>

						<TextField
							placeholder="First Name"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Second Name</Typography>
						<TextField
							placeholder="First Name"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Email Address</Typography>
						<TextField
							placeholder="Email Address"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Phone Number</Typography>
						<TextField
							placeholder="Phone Number"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Address</Typography>
						<TextField
							placeholder="Address"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Town/City</Typography>
						<TextField
							placeholder="Town/City"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">State/Country</Typography>
						<TextField
							placeholder="State/Country"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6} xs={6} md={6} xl={6}>
						<Typography variant="body2">Zip/Postal Code</Typography>
						<TextField
							placeholder="Zip/PostalCode"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid
						item
						lg={6}
						xs={6}
						md={6}
						xl={6}
						style={{ paddingLeft: '1.5rem' }}
					>
						<FormControlLabel
							control={<Checkbox />}
							label="ship to different address?"
							style={{
								border: '1px solid rgba(0,0,0,0.2)',
								borderRadius: '10px',
								padding: '0px 8px',
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box style={{ paddingTop: '1rem' }}>
				<Typography variant="h5" style={{ fontWeight: 'bold' }}>
					Billing Method
				</Typography>
				<Typography variant="caption">
					please enter your payment method
				</Typography>
				<Box
					className={classes.paymentMethods}
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box display="flex" alignItems="center" width="10%">
						<RadioButtonUnchecked />
						<Typography variant="caption"> Fed EX</Typography>
					</Box>
					<Typography variant="caption" style={{ flex: 1 }} align="center">
						<Typography
							variant="caption"
							color="primary"
							style={{ marginRight: '0.4rem' }}
						>
							+32 usd
						</Typography>
						Additional Price
					</Typography>
					<Box width="15%" display="flex" justifyContent="flex-end">
						<img src="/images/Fedex.png" />
					</Box>
				</Box>
				<Box
					className={classes.paymentMethods}
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box display="flex" alignItems="center" width="10%">
						<RadioButtonUnchecked />
						<Typography variant="caption"> DHL</Typography>
					</Box>
					<Typography variant="caption" style={{ flex: 1 }} align="center">
						<Typography
							variant="caption"
							color="primary"
							style={{ marginRight: '0.4rem' }}
						>
							+32 usd
						</Typography>
						Additional Price
					</Typography>
					<Box width="15%" display="flex" justifyContent="flex-end">
						<img src="/images/dhl.png" />
					</Box>
				</Box>
			</Box>
			<Box paddingTop="1rem">
				<Box paddingBottom="1rem">
					<Typography variant="h5" style={{ fontWeight: 'bold' }}>
						Payment method
					</Typography>
					<Typography variant="caption">
						please enter your payment method
					</Typography>
				</Box>
				<Paper style={{ padding: '0.5rem' }}>
					<Grid container spacing={2}>
						<Grid item container justify="space-between">
							<Grid item>
								<FormControlLabel
									control={
										<Checkbox icon={<CheckCircleOutline color="primary" />} />
									}
									label="Credit Card"
								/>
							</Grid>
							<Grid item>
								<img src="/images/Visa.png" />
								<img src="/images/mc.png" />
							</Grid>
						</Grid>
						<Grid item xs={6} lg={6} xl={6} md={6} container>
							<Typography>Card Holder</Typography>
							<TextField
								variant="outlined"
								size="small"
								fullWidth
								placeholder="card holder"
							/>
						</Grid>
						<Grid item xs={3} lg={3} xl={3} md={3}>
							<Typography>exp date</Typography>
							<TextField
								variant="outlined"
								size="small"
								fullWidth
								placeholder="DD/MM/YY"
							/>
						</Grid>
						<Grid item xs={3} lg={3} xl={3} md={3}>
							<Typography>cvc</Typography>
							<TextField
								variant="outlined"
								size="small"
								fullWidth
								placeholder="CVC"
							/>
						</Grid>
					</Grid>
				</Paper>
				<Box
					className={classes.paymentMethods}
					display="flex"
					justifyContent="space-between"
				>
					<Box display="flex" alignItems="center">
						<RadioButtonUnchecked />
						<Typography variant="caption">Paypal</Typography>
					</Box>
					<img src="/images/PayPal.png" />
				</Box>
				<Box
					className={classes.paymentMethods}
					display="flex"
					justifyContent="space-between"
					paddingLeft="2rem"
					paddingRight="2rem"
				>
					<Box display="flex" alignItems="center">
						<RadioButtonUnchecked />
						<Typography variant="caption">BitCoin</Typography>
					</Box>
					<img src="/images/Bitcoin.png" />
				</Box>
			</Box>
			<Box paddingTop="1rem">
				<Typography variant="h5" style={{ fontWeight: 'bold' }}>
					Additional Information
				</Typography>
				<Typography variant="caption">
					need something else? we will make for you
				</Typography>
				<Box paddingTop="0.5rem">
					<Typography variant="body2" style={{ fontWeight: 'bold' }}>
						Order Notes
					</Typography>
					<TextField
						multiline
						rows={3}
						placeholder="need to specify deliver day?sending Gift? ...."
						variant="outlined"
						fullWidth
					/>
				</Box>
			</Box>
			<Box paddingTop="1rem">
				<Typography variant="h5" style={{ fontWeight: 'bold' }}>
					Confirmation
				</Typography>
				<Typography variant="caption">
					We are getting to the end. Just few clicks and your order si ready!
				</Typography>
				<Box className={classes.paymentMethods}>
					<FormControlLabel
						control={<Checkbox size="small" />}
						label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
					/>
				</Box>
				<Box
					className={classes.paymentMethods}
					paddingTop="0px"
					paddingBottom="0px"
				>
					<FormControlLabel
						control={<Checkbox size="small" />}
						label="I agree with our terms and conditions and privacy policy"
						style={{ fontSize: '12px' }}
						// label={}
					/>
				</Box>
			</Box>
			<Box paddingTop="1rem">
				<Button
					variant="contained"
					color="primary"
					disableElevation
					size="large"
					style={{ borderRadius: '10px' }}
				>
					Complete Order
				</Button>
			</Box>
			<Box paddingTop="1rem">
				<Box>
					<img src="/images/shield.png" alt="" />
				</Box>
				<Typography variant="caption" style={{ fontWeight: 'bold' }}>
					All your data are safe
				</Typography>
				<Typography variant="body1" style={{ width: '35%' }}>
					We are using the most advanced security to provide you the best
					experience ever.
				</Typography>
			</Box>
		</Box>
	);
}

export default BillingInfo;
