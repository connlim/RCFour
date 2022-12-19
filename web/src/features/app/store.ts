import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../events/eventsSlice';
import questsReducer from '../quests/questsSlice';
import snacksReducer from '../snacks/snacksSlice';

const store = configureStore({
	reducer: {
		events: eventsReducer,
		quests: questsReducer,
		snacks: snacksReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
