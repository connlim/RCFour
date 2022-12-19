import { createSlice } from '@reduxjs/toolkit';
import AppEvent from '../../types/event.app';

interface EventsState {
	events: AppEvent[];
}

const initialState: EventsState = {
	events: [],
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {},
});

export default eventsSlice.reducer;
