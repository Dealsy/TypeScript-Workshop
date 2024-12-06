import { z } from "zod";

/**
 *  Explanation:
 1. For email, we used z.string().email() to enforce a valid email pattern, this will automatically make the field an email type, meaning if you enter something that is not an email, 
    it will throw an error. 
 2. For password, we added length constraints using min() and max(), Zod will automatically throw an error if the password is too short or too long. we also provided custom error messages, which we can display
    to the user in the UI.
 4. For hobbies, we validated it as an array of strings with a min and max length.
 5. For address, we used z.object() to validate the nested object, and then we validated the street and city fields as strings with a min length of 1.
 */

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email("That doesn't look like an email"),
  password: z
    .string()
    .min(8, "Password too short")
    .max(128, "Password too long"),
  hobbies: z
    .array(z.string())
    .nonempty("You should have at least one hobby")
    .max(5, "Too many hobbies"),
  address: z.object({
    street: z.string().min(1, "Street can't be empty"),
    city: z.string().min(1, "City can't be empty"),
  }),
});
