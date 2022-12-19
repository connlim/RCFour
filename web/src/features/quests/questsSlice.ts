import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuestService, {
	QuestCreationData,
	QuestData,
} from '../../services/QuestService';
import AppQuest from '../../types/quest.app';

interface QuestsState {
	quests: QuestData[];
}

const initialState: QuestsState = {
	quests: [],
};

const questsSlice = createSlice({
	name: 'quests',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getQuests.fulfilled, (state, action) => {
				state.quests = action.payload;
			})
			.addCase(createQuest.fulfilled, (state, action) => {
				state.quests.push(action.payload);
			})
			.addCase(updateQuest.fulfilled, (state, action) => {
				state.quests = state.quests.map((q) =>
					q.quest_id === action.payload?.quest_id ? action.payload : q,
				);
			})
			.addCase(deleteQuest.fulfilled, (state, action) => {
				state.quests = state.quests.filter(
					(q) => q.quest_id !== action.payload?.quest_id,
				);
			});
	},
});

export default questsSlice.reducer;

const questService = new QuestService();

export const getQuests = createAsyncThunk('quests/all', async () => {
	const quests = await questService.getQuests();
	return quests;
});

export const createQuest = createAsyncThunk(
	'quests/create',
	async (newQuest: QuestCreationData) => {
		const quest = await questService.createQuest(newQuest);
		return quest;
	},
);

export const updateQuest = createAsyncThunk(
	'quests/update',
	async (data: { questID: number; dataToChange: any }) => {
		const quest = await questService.updateQuest(
			data.questID,
			data.dataToChange,
		);
		return quest;
	},
);

export const deleteQuest = createAsyncThunk(
	'quests/delete',
	async (id: number) => {
		const quest = await questService.deleteQuest(id);
		return quest;
	},
);
