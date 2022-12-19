import { createSlice } from '@reduxjs/toolkit';
import AppQuest from '../../types/quest.app';

interface QuestsState {
	quests: AppQuest[];
}

const initialState: QuestsState = {
	quests: [],
};

const questsSlice = createSlice({
	name: 'quests',
	initialState,
	reducers: {},
});

export default questsSlice.reducer;
