# API Endpoints

## Users

### `GET /user` 

- Description: Retrieves a list of *all* users.
- Request data format: None
- Response data format: JSON
- Authentication: None

### `GET /user/{id}`

- Description: Retrieves a user by id.
- Request data format: None
- Response data format: JSON
- Authentication: None

## Events

#### `GET /events`
- Description: Retrieves a list of all events.
- Request data format: None
- Response data format: JSON
- Authentication: None

#### `POST /events`
- Description: Creates a new event.
- Request data format: JSON object containing event data (e.g., name, location, etc.)
- Response data format: JSON object containing the newly created event
- Authentication: Required

#### `GET /events/:id`
- Description: Retrieves a single event with the given ID.
- Request data format: None
- Response data format: JSON object containing the event with the given ID
- Authentication: None

#### `PATCH /events/:id`
- Description: Updates an event with the given ID.
- Request data format: JSON object containing updated event data
- Response data format: JSON object containing the updated event
- Authentication: Required

#### `DELETE /events/:id`
- Description: Deletes an event with the given ID.
- Request data format: None
- Response data format: None
- Authentication: Required 

#### `GET /events?lat=:lat&lng=:lng&radius=:radius`
- Description: Retrieves a list of events within a certain radius of a given latitude and longitude.
- Request data format: None
- Response data format: JSON object containing the list of events within the specified radius
- Authentication: None

<!-- #### `GET /events?type=:type` -->
<!-- - Description: Retrieves a list of events of a certain type. -->
<!-- - Request data format: None -->
<!-- - Response data format: JSON object containing the list of events of the specified type -->
<!-- - Authentication: None -->
<!---->

## Quests

#### `GET /quests`
- Description: Retrieves a list of all quests.
- Request data format: None
- Response data format: JSON
- Authentication: None

#### `POST /quests`
- Description: Creates a new quest.
- Request data format: JSON object containing quest data (e.g., name, location, etc.)
- Response data format: JSON object containing the newly created quest
- Authentication: Required

#### `GET /quests/:id`
- Description: Retrieves a single quest with the given ID.
- Request data format: None
- Response data format: JSON object containing the quest with the given ID
- Authentication: None

#### `PATCH /quests/:id`
- Description: Updates an quest with the given ID.
- Request data format: JSON object containing updated quest data
- Response data format: JSON object containing the updated quest
- Authentication: Required

#### `DELETE /quests/:id`
- Description: Deletes an quest with the given ID.
- Request data format: None
- Response data format: None
- Authentication: Required 

#### `GET /quests?lat=:lat&lng=:lng&radius=:radius`
- Description: Retrieves a list of quests within a certain radius of a given latitude and longitude.
- Request data format: None
- Response data format: JSON object containing the list of quests within the specified radius
- Authentication: None
