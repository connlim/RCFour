import {
  getAllEvents,
  getEventById,
  addEvent,
} from "../firebase/functions/events/FirebaseEventService";

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
  username: string;
  profile_url: string;
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
  user_id: "testUserID",
  title: "BBQ @ SUTD",
  description: "Come join us for a BBQ at SUTD",
  timestamp: "timestamp",
  location: {
    lat: -12.3431,
    lng: 132.3123,
  },
};

export const mockEventData: EventData = {
  event_id: "test_id",
  user_id: "testUserID",
  username: "testusername",
  profile_url: "",
  title: "BBQ @ SUTD",
  description: "Come join us for a BBQ at SUTD",
  timestamp: "timestamp",
  location: {
    lat: -12.3431,
    lng: 132.3123,
  },
  attendees_ids: ["tsitjoi", "iofhjsdfhoh", "ashdfausdhfuas"],
  attendees_names: ["Bob", "John", "Smith"],
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
    try {
      const res = await getAllEvents();
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  // get Event by id
  public async getEvent(id: string): Promise<EventData | undefined> {
    try {
      const res = await getEventById(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  public async getEventsByLoc(data: EventLocationData): Promise<EventData[]> {
    return [mockEventData, mockEventData];
  }

  // create Event
  public async createEvent(data: EventCreationData): Promise<EventData> {
    // add event
    try {
      await addEvent(data);
      console.log("event added successfully");
    } catch (error) {
      console.log(error);
    }

    return mockEventData;
  }

  public async updateEvent(eventID: number, dataToChange: any): Promise<EventData> {
    return mockEventData;
  }

  public async deleteEvent(eventID: number) {
    return mockEventData;
  }
}

export default EventService;
