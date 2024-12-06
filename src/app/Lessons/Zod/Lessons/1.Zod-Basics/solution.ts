import { z } from "zod";

// Define the Zod schema
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// Automatically infer the TypeScript type, you could also export this type for reuse.
type User = z.infer<typeof UserSchema>;

function fetchUserData(): unknown {
  // Simulates fetching data from an API
  return {
    name: "John",
    age: 30,
  };
}

const userData = fetchUserData();

try {
  // Runtime validation and type inference combined!
  const parsedData = UserSchema.parse(userData);
  console.log(`User name is ${parsedData.name}, and age is ${parsedData.age}.`);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log("Invalid user data.", error.errors);
  }
}
