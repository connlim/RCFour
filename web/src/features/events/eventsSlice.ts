import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDistance } from 'geolib';
import EventService, {
	EventCreationData,
	EventData,
	EventLocationData,
} from '../../services/EventService';
import { LifecycleStatus } from '../../types/common';
import { RootState } from '../app/store';

export interface MapLocation {
	latitude: number;
	longitude: number;
	zoom?: number;
}

interface EventsState {
	lifecycleStatus: LifecycleStatus;
	events: EventData[];
	eventInFocus?: EventData | null;
	locationData?: EventLocationData;
	dragLocation?: MapLocation;
	currLocation?: MapLocation;
	markLocation?: MapLocation;
}

const initialState: EventsState = {
	lifecycleStatus: 'initial',
	events: [],
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setLocation: (state, action: PayloadAction<EventLocationData>) => {
			state.locationData = action.payload;
		},
		setDragLocation: (state, action: PayloadAction<MapLocation>) => {
			state.dragLocation = action.payload;
		},
		setCurrLocation: (state, action: PayloadAction<MapLocation>) => {
			state.currLocation = action.payload;
		},
		setMarkLocation: (state, action: PayloadAction<MapLocation>) => {
			state.markLocation = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getEvents.pending, (state, action) => {
				state.lifecycleStatus = 'loading';
			})
			.addCase(getEvents.fulfilled, (state, action) => {
				state.lifecycleStatus = 'success';
				state.events = action.payload;
			})
			.addCase(getEvents.rejected, (state, action) => {
				state.lifecycleStatus = 'error';
			});
		builder
			.addCase(createEvent.fulfilled, (state, action) => {
				state.events.push(action.payload);
			})
			.addCase(updateEvent.fulfilled, (state, action) => {
				state.events = state.events.filter((e) =>
					e.event_id === action.payload?.event_id ? action.payload : e,
				);
			})
			.addCase(deleteEvent.fulfilled, (state, action) => {
				state.events = state.events.filter(
					(e) => e.event_id !== action.payload?.event_id,
				);
			});
	},
});

export const selectEventsByLocation = (state: RootState) => {
	return state.events.events.filter(
		(e) =>
			!state.events.locationData ||
			getDistance(e.location, state.events.locationData.location) <=
				state.events.locationData.radius,
	);
};

export const { setDragLocation, setCurrLocation, setMarkLocation } =
	eventsSlice.actions;

export default eventsSlice.reducer;

const eventService = new EventService();

export const getEvents = createAsyncThunk('events/all', async () => {
	const events = await eventService.getEvents();
	return events;
});

export const createEvent = createAsyncThunk(
	'events/create',
	async (newEvent: EventCreationData) => {
		const event = await eventService.createEvent(newEvent);
		return event;
	},
);

export const updateEvent = createAsyncThunk(
	'events/update',
	async (data: { eventID: number; dataToChange: any }) => {
		const event = await eventService.updateEvent(
			data.eventID,
			data.dataToChange,
		);
		return event;
	},
);

export const deleteEvent = createAsyncThunk(
	'events/delete',
	async (id: number) => {
		const event = await eventService.deleteEvent(id);
		return event;
	},
);
