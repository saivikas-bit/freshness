import {
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Typography,
} from '@material-ui/core';

function ProductCard(props) {
	let { product } = props;
	let { width } = props;

	return (
		<div style={{ width: width }}>
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
					>
						Buy now
					</Button>
				</CardActions>
			</Paper>
		</div>
	);
}

export default ProductCard;
