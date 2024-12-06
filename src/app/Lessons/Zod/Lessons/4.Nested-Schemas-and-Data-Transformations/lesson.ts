import { z } from "zod";

/**
 * In this lesson, you'll dive into more advanced features of Zod, including nested schemas and data transformations.
 * You have a nested `UserProfile` object with an `address` field that is also an object.
 * You are also looking to transform the email to lowercase during validation.
 *
 * HINTS:
 * 1. Create a Zod schema for the `Address` object first. Validate `street`, `city`, and `zipCode`.
 * 2. Create a Zod schema for the `UserProfile` object, making sure to include your `Address` schema for the `address` field.
 * 3. Utilize Zod's `.transform()` method to ensure that the email field gets converted to lowercase.
 */

type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type UserProfile = {
  username: string;
  email: string;
  address: Address;
};

const initialData = {
  username: "JohnDoe",
  email: "JOHN.DOE@EXAMPLE.COM",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "62704",
  },
};
