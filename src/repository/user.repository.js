import User from "../models/user.model";

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create or update user");
    }
  }
}


export default UserRepository;
