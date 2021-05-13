import {
	Box,
	Button,
	Card,
	Divider,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import React from 'react';
import CartCard from './CartCard';

function OrderSummary() {
	return (
		<Paper style={{ padding: '1rem ' }} elevation={2}>
			<Typography
				variant="h5"
				style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
			>
				Order Summary
			</Typography>
			<Typography variant="caption">
				Price can change depending on shipping method and taxes of your state.
			</Typography>
			<Box style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
				<CartCard />
				<Divider />
				<CartCard />
				<Divider />
				<CartCard />
			</Box>
			<Box paddingTop="1rem">
				<Box
					display="flex"
					justifyContent="space-between"
					marginBottom="0.4rem"
				>
					<Typography>SubTotal</Typography>
					<Typography>73.9₹</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					marginBottom="0.4rem"
				>
					<Typography>Tax</Typography>
					<Typography>73.9₹</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography>Shipping</Typography>
					<Typography>73.9₹</Typography>
				</Box>
			</Box>
			<Box paddingTop="2rem">
				<TextField
					placeholder="Apply Promo Code"
					fullWidth
					variant="outlined"
					size="small"
					style={{ borderRadius: '14px' }}
					InputProps={{
						endAdornment: (
							<InputAdornment>
								<Button
									style={{ fontWeight: 'bold', textTransform: 'capitalize' }}
								>
									Apply now
								</Button>
							</InputAdornment>
						),
					}}
				/>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				paddingTop="3rem"
				alignItems="center"
			>
				<Box display="flex" flexDirection="column">
					<Typography variant="caption">Total Order</Typography>
					<Typography variant="caption" color="primary">
						Guarnte Delevery Date
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="h5"
						style={{ fontWeight: 'bold' }}
						color="primary"
					>
						₹80
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
}

export default OrderSummary;
