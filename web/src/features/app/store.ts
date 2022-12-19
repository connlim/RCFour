import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../events/eventsSlice";
import questsReducer from "../quests/questsSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    quests: questsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
