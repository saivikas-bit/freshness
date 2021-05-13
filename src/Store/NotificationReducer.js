import { createSlice } from '@reduxjs/toolkit';

const notification = createSlice({
	name: 'notifications',
	initialState: {
		data: false,
	},
	reducers: {
		statusFetch(state, action) {
			state.data = action.payload.data;
		},
	},
});

export const { statusFetch } = notification.actions;

export const useData = (state) => state.notification.data;

export default notification.reducer;
