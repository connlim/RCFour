import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../events/eventsSlice';
import questsReducer from '../quests/questsSlice';
import userReducer from '../user/userSlice';

const store = configureStore({
	reducer: {
		events: eventsReducer,
		quests: questsReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
