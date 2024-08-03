import * as z from "zod";

export const signUpValidation = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  name: z.string().min(2, { message: "Too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 4 characters." }),
});
