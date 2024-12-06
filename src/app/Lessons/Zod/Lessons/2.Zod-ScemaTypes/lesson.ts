import { z } from "zod";

/**
 * In this lesson, we're working on a form for user registration. We want to enforce various types and constraints on the incoming data using Zod.
 * You'll see that there are types for common JavaScript primitives, but Zod can do much more than that.
 * Your task is to extend the current Zod schema to validate the fields mentioned in the comments more effectively.
 * 
 *  HINTS:
 1. Look into the Zod documentation to explore different validation methods for strings, numbers, etc. https://zod.dev/
 2. Utilize specialized Zod validators for things like emails and passwords.
 3. See if you can add custom error messages for different validations.
  *
 */

// The existing schema
const UserSchema = z.object({
  name: z.string(), // Validate as a string (keep as is)
  age: z.number(), // Validate as a number (keep as is)
  email: z.string(), // TODO: Validate as an email
  password: z.string(), // TODO: Validate as a password with a minimum length of 8 and a maximum length of 20
  hobbies: z.array(z.string()), // TODO: Validate as an array of strings but limit the array length
  address: z.object({
    street: z.string(),
    city: z.string(),
  }), // TODO: Nested object validation
});
