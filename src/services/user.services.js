import UserRepository from "../repository/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("Error in User Service");
    }
  }

  async findByemail(email) {
    return await this.userRepository.findByemail(email);
  }

  async login(data) {
    try {
      const user = await this.userRepository.findByemail(data.email);
      if (!user) AuthError("Invalid email or password");

      const passwordMatch = await bcrypt.compare(data.password, user.password);
      if (!passwordMatch) AuthError("Invalid email or password");

      const token = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "24h" }
      );

      const { password, createdAt, updatedAt, __v, ...filteredUser } =
        user.toObject();

      return { user: filteredUser, token };
    } catch (error) {
      console.log("Error in User Service while fetching user");
    }
  }
}

export default UserServices;
