import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import AppUser from '../../types/user.app';
import { RootState } from '../app/store';

interface UserState {
	user: AppUser | null;
}

const initialState: UserState = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			if (action.payload) {
				state.user = {
					uid: action.payload.uid,
					email: action.payload.email,
					name: action.payload.displayName,
				};
			}
		},
	},
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
