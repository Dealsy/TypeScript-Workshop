/**
 * In this file, we have a TypeScript program that fetches user data from an API and then performs some actions on it.
 * Currently, the data validation and typing are done separately, causing redundancy.
 * Your task is to eliminate this redundancy by using Zod for both runtime validation and type inference.
 *
 *
 * Hint: Use Zod to define a schema for the User type and Utilize Zod's parse method to replace the validateUser function.
 * You will also need to use the infer method to infer the type.
 *
 * Resources:
 * https://zod.dev/
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

type User = {
  name: string;
  age: number;
};

function fetchUserData(): unknown {
  // Simulates fetching data from an API
  return {
    name: "John",
    age: 30,
  };
}

function validateUser(data: unknown): data is User {
  if (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    "age" in data &&
    typeof data["name"] === "string" &&
    typeof data["age"] === "number"
  ) {
    return true;
  }
  return false;
}

const userData = fetchUserData();

if (validateUser(userData)) {
  console.log(`User name is ${userData.name}, and age is ${userData.age}.`);
} else {
  console.log("Invalid user data.");
}
