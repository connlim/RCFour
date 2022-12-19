export interface Geopoint {
	lat: number;
	lng: number;
}

export interface EventCreationData {
	user_id: string;
	title: string;
	description: string;
	timestamp: string;
	location: Geopoint;
}

export interface EventData {
	event_id: string;
	user_id: string;
	title: string;
	description: string;
	timestamp: string;
	location: Geopoint;
	attendees_ids: string[];
	attendees_names: string[];
}

export interface EventLocationData {
	location: Geopoint;
	radius: number;
}

// Mock Data

export const mockCreationData: EventCreationData = {
	user_id: 'testUserID',
	title: 'BBQ @ SUTD',
	description: 'Come join us for a BBQ at SUTD',
	timestamp: 'timestamp timestamp',
	location: {
		lat: -12.3431,
		lng: 132.3123,
	},
};

export const mockEventData: EventData = {
	event_id: 'test_id',
	user_id: 'testUserID',
	title: 'BBQ @ SUTD',
	description: 'Come join us for a BBQ at SUTD',
	timestamp: 'timestamp timestamp',
	location: {
		lat: -12.3431,
		lng: 132.3123,
	},
	attendees_ids: ['tsitjoi', 'iofhjsdfhoh', 'ashdfausdhfuas'],
	attendees_names: ['Bob', 'John', 'Smith'],
};

export const mockEventLocationData: EventLocationData = {
	location: {
		lat: -12.3431,
		lng: 132.3123,
	},
	radius: 123,
};

class EventService {
	// get all Events
	public async getEvents(): Promise<EventData[]> {
		//
		return [mockEventData, mockEventData];
	}

	// get Event by id
	public async getEvent(id: string): Promise<EventData> {
		//
		// const res = await firebaseFunctionGetEvent(id);
		return mockEventData;
	}

	public async getEventsByLoc(data: EventLocationData): Promise<EventData[]> {
		return [mockEventData, mockEventData];
	}

	// create Event
	public async createEvent(data: EventCreationData): Promise<EventData> {
		// logic here (something like the below)
		// const res = firebase.functions.user.getUser()

		// redux update state?
		// another option is to update redux state via the useEffect that calls this enclosing function

		return mockEventData;
	}

	public async updateEvent(
		eventID: number,
		dataToChange: any,
	): Promise<EventData> {
		return mockEventData;
	}

	public async deleteEvent(eventID: number) {
		return mockEventData;
	}
}

export default EventService;
