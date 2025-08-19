import UserServices from "../services/user.services.js";

const userServices = new UserServices();

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await userServices.findByemail(email);
    if (existingUser)
      return res.json({ message: "User already exists with this email" });
    await userServices.createUser({
      name,
      email,
      password,
      role,
    });
    res.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create or update user");
  }
};

export { createUser };
