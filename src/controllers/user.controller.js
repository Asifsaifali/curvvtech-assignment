import UserServices from "../services/user.services.js";

const userServices = new UserServices();

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await userServices.findByemail(email);
    if (existingUser)
      return res.status(201).json({ message: "User already exists with this email" });
    await userServices.registerUser({
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
    throw new Error("Failed to register new user");
  }
};

const loginUser = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const data = await userServices.login({ email, password })
        return res.status(200).json({
            success: true,
            token : data.token,
            user : data.user,

        }) 
    } catch (error) {
        console.error("Error creating user:", error);
    throw new Error("Failed to login user");
    }
}

export { registerUser, loginUser };
