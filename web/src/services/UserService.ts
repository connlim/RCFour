export interface UserData {
  user_id: string,
  email: string,
  name: string,
}

export const mockUserData = {
  user_id: "testUserID123",
  email: "test-user@gmail.com",
  name: "John Doe",
}

class UserService {
  // get all users
  public async getUsers(): Promise<UserData[]> {
    //
    return [mockUserData, mockUserData, mockUserData]
  }

  // get user by id
  public async getUser(id: number) {
    // logic here (something like the below)
    // const res = firebase.functions.user.getUser()

    return mockUserData
  }

}

export default UserService
