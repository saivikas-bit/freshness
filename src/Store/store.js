import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './ProductReducer';
import notificationReducer from './NotificationReducer';
import cartReducer from './cart-slice';

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});

export default configureStore({
	reducer: {
		products: productReducer,
		notification: notificationReducer,
		cart: cartReducer,
	},
	middleware: customizedMiddleware,
});
