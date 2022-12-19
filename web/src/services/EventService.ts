export interface EventCreationData {

}

export interface EventRetrievalData {

}

export interface EventLocationData {
  lat: number,
  lng: number,
  radius: number,
}

class EventService {

  // get all Events
  public async getEvents() {
    //
  }

  // get Event by id
  public async getEvent(id: number) {
    // 
    // const res = await firebaseFunctionGetEvent(id);
  }

  public async getEventsByLoc() { }

  // create Event
  public async createEvent() {
    // logic here (something like the below)
    // const res = firebase.functions.user.getUser()

    // redux update state?
    // another option is to update redux state via the useEffect that calls this enclosing function
  }

  public async updateEvent() {

  }

  public async deleteEvent() {

  }

}

export default EventService
