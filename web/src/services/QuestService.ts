// export interface QuestCreationData {
//
// }

// export interface QuestRetrievalData {
//
// }

class QuestService {

  // get all quests
  public async getQuests() {
    //
  }

  // get quest by id
  public async getQuest(id: number) {
    // 
    // const res = await firebaseFunctionGetQuest(id);
  }

  // create quest
  public async createQuest() {
    // logic here (something like the below)
    // const res = firebase.functions.user.getUser()

    // redux update state?
    // another option is to update redux state via the useEffect that calls this enclosing function
  }

}

export default QuestService
