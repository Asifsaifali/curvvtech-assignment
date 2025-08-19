import User from "../models/user.model.js";

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  }

  async findByemail(email) {
    return await User.findOne({ email });
  }

  async login(){
    try {
        
    } catch (error) {
        
    }
  }
}

export default UserRepository;
