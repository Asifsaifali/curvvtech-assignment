import UserRepository from "../repository/user.repository.js";

const userRepository = new UserRepository()

const createUser = async(req,res)=>{
    try {
      const { name, email, password, role } = req.body;
        const user = await userRepository.createUser({ name, email, password, role })
    } catch (error) {
         console.error("Error creating user:", error);
      throw new Error("Failed to create or update user");
    }
}