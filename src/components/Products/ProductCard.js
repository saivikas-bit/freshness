import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Snackbar,
	Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { addCart } from '../../Store/cart-slice';

function ProductCard(props) {
	let { product } = props;
	let { width } = props;

	const [state, setstate] = useState(false);

	const dispatch = useDispatch();

	const addCarts = () => {
		dispatch(addCart(product));
		setstate(true);
	};
	const handleClose = () => {
		setstate(false);
	};

	return (
		<div style={{ width: width }}>
			<Snackbar
				open={state}
				autoHideDuration={3000}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				onClose={handleClose}
			>
				<MuiAlert variant="filled" severity="success" on>
					item is added to the cart
				</MuiAlert>
			</Snackbar>
			<Paper
				variant="outlined"
				style={{
					padding: '1rem',
				}}
			>
				<CardMedia
					image={product.image}
					style={{ width: '100%', height: '180px', borderRadius: '8px' }}
				/>
				<CardContent style={{ padding: 0 }}>
					<Typography variant="h6" style={{ fontWeight: 'bold' }} noWrap={true}>
						{product.name}
					</Typography>
					<Typography variant="subtitle1" noWrap={true}>
						{product.description || 'this is test description for the product'}
					</Typography>
				</CardContent>
				<CardActions style={{ justifyContent: 'space-between' }}>
					<Typography variant="h5" style={{ flex: 1, fontWeight: 'bolder' }}>
						{product.price}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						disableElevation
						style={{ borderRadius: '10px' }}
						onClick={addCarts}
					>
						Buy now
					</Button>
				</CardActions>
			</Paper>
		</div>
	);
}

export default ProductCard;
