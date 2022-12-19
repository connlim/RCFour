import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { RootState } from '../app/store';

interface UserState {
	user: User | null;
}

const initialState: UserState = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
	},
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
