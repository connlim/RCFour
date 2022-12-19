export interface Geopoint {
	lat: number;
	lng: number;
}

export interface QuestCreationData {
	user_id: string;
	title: string;
	description: string;
	timestamp: string;
	location: Geopoint;
}

export interface QuestData {
	quest_id: string;
	user_id: string;
	title: string;
	description: string;
	timestamp: string;
	location: Geopoint;
	attendees_ids: string[];
	attendees_names: string[];
}

export interface QuestLocationData {
	location: Geopoint;
	radius: number;
}

// Mock Data

export const mockCreationData: QuestCreationData = {
	user_id: 'testUserID',
	title: 'BBQ @ SUTD',
	description: 'Come join us for a BBQ at SUTD',
	timestamp: 'timestamp timestamp',
	location: {
		lat: -12.3431,
		lng: 132.3123,
	},
};

export const mockQuestData: QuestData = {
	quest_id: 'quest_id',
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

export const mockQuestLocationData: QuestLocationData = {
	location: {
		lat: -12.3431,
		lng: 132.3123,
	},
	radius: 123,
};

class QuestService {
	// get all Quests
	public async getQuests(): Promise<QuestData[]> {
		//
		return [mockQuestData, mockQuestData];
	}

	// get Quest by id
	public async getQuest(id: string): Promise<QuestData> {
		//
		// const res = await firebaseFunctionGetQuest(id);
		return mockQuestData;
	}

	public async getQuestsByLoc(data: QuestLocationData): Promise<QuestData[]> {
		return [mockQuestData, mockQuestData];
	}

	// create Quest
	public async createQuest(data: QuestCreationData): Promise<QuestData> {
		// logic here (something like the below)
		// const res = firebase.functions.user.getUser()

		// redux update state?
		// another option is to update redux state via the useEffect that calls this enclosing function

		return mockQuestData;
	}

	public async updateQuest(
		QuestID: number,
		dataToChange: any,
	): Promise<QuestData> {
		return mockQuestData;
	}

	public async deleteQuest(QuestID: number) {
		return mockQuestData;
	}
}

export default QuestService;
