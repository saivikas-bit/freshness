import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addCart(state, action) {
			let product = state.cart.find(
				(product) => action.payload.id === product.id
			);
			if (product) {
				product.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
	},
});

export const { addCart } = cart.actions;

export const useCart = (state) => state.cart.cart;

export default cart.reducer;
