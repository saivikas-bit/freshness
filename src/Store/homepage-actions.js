import axios from 'axios';
import { Product } from '../models/Product';
import {
	addBestSelling,
	addFarmerProducts,
	addSectionHeadline,
} from './ProductReducer';

export const fetchData = () => {
	return async (dispatch) => {
		const clientId = 'pS4hSb2cvAyN1m6YEI1HpcrWik-vCfDQuVw-X8T20h4';

		const traformedData = ({ data }) => {
			return data.results.map(
				(product) =>
					new Product({
						name: product['alt_description'],
						image: product['urls']['small'],
						description: product['description'],
						price: (
							Math.floor(Math.random() * (50 - 100) + 100) + '₹'
						).toString(),
					})
			);
		};

		const bestSelling = await axios.get('/search/photos', {
			params: {
				query: 'food',
				client_id: clientId,
				page: 1,
				orientation: 'landscape',
				per_page: 3,
			},
		});

		dispatch(addBestSelling(traformedData(bestSelling)));

		const farmerSelling = await axios.get('/search/photos', {
			params: {
				query: 'food',
				client_id: clientId,
				page: 2,
				orientation: 'landscape',
				per_page: 3,
			},
		});

		dispatch(addFarmerProducts(traformedData(farmerSelling)));

		let headlines = await axios.get('/search/photos', {
			params: {
				query: 'food',
				client_id: clientId,
				page: 3,
				orientation: 'landscape',
				per_page: 4,
			},
		});

		dispatch(addSectionHeadline(traformedData(headlines)));
	};
};
