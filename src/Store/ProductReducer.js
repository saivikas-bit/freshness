import { createSlice } from '@reduxjs/toolkit';

const product = createSlice({
	name: 'products',
	initialState: {
		bestSelling: [],
		farmerProducts: [],
		sectionHeadline: [],
	},
	reducers: {
		addBestSelling(state, action) {
			state.bestSelling = action.payload;
		},
		addFarmerProducts(state, action) {
			state.farmerProducts = action.payload;
		},
		addSectionHeadline(state, action) {
			state.sectionHeadline = action.payload;
		},
	},
});

export const { addBestSelling } = product.actions;
export const { addSectionHeadline } = product.actions;
export const { addFarmerProducts } = product.actions;

export const useBestSelling = (state) => state.products.bestSelling;
export const useFarmerProducts = (state) => state.products.farmerProducts;
export const useSectionHeadline = (state) => state.products.sectionHeadline;

export default product.reducer;
