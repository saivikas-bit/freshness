import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './ProductReducer';
import notificationReducer from './NotificationReducer';

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});

export default configureStore({
	reducer: {
		products: productReducer,
		notification: notificationReducer,
	},
	middleware: customizedMiddleware,
});
