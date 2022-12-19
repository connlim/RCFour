import { createSlice } from '@reduxjs/toolkit';
import AppUser from '../../types/user.app';

interface UserState {
	user?: AppUser;
}

const initialState: UserState = {};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
