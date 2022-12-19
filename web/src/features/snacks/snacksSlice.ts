import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Snack {
	severity: AlertColor;
	message: string;
}

interface SnacksState {
	snackInFocus?: Snack;
	snacks: Snack[];
}

const initialState: SnacksState = {
	snacks: [],
};

const snacksSlice = createSlice({
	name: 'snacks',
	initialState,
	reducers: {
		pushSnack: (state, action: PayloadAction<Snack>) => {
			state.snacks.push(action.payload);
		},
		takeSnack: (state) => {
			if (state.snacks.length > 0) {
				state.snackInFocus = state.snacks[0];
				state.snacks = state.snacks.slice(1);
			}
		},
		onSnackEaten: (state) => {
			state.snackInFocus = undefined;
		},
	},
});

export const { pushSnack, takeSnack, onSnackEaten } = snacksSlice.actions;

export default snacksSlice.reducer;
