import { email, z } from "zod"

const signUpSchema = z.object({
    name : z.string().min(2, "Name must be at least 2 character long"),
    email : z.email("Invalid email format"),
    password : z.string().min(6,"Password must be at least 6 character long"),
    role : z.enum(["user", "admin"]).default("user")
})

const signInSchema = z.object({
     email : z.email("Invalid email format"),
    password : z.string().min(6,"Password must be at least 6 character long"),
})

export { signUpSchema, signInSchema }