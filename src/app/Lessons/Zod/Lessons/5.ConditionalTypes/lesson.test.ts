import { z } from "zod";
import { FormDataSchema, initialFormData } from "./lesson";

// Type guard function to check if a value is an instance of ZodError
function isZodError(value: unknown): value is z.ZodError {
  return value instanceof z.ZodError;
}

describe("FormDataSchema", () => {
  it("should require otherRole when role is Other", () => {
    try {
      // Attempt to parse the data, which will throw an error if validation fails
      FormDataSchema.parse(initialFormData);
    } catch (error) {
      // If parsing fails, check that the error message is as expected
      if (
        isZodError(error) &&
        initialFormData.role === "Other" &&
        !initialFormData.otherRole
      ) {
        expect(error.issues[0].message).toBe(
          "When role is 'Other', 'otherRole' must be provided."
        );
        fail("Validation failed as expected.");
      } else {
        // Log or re-throw the error if it's not the expected validation error
        console.error(error);
        fail("Unexpected error or validation failure."); // Failing the test if an unexpected error occurs
      }
    }
  });
});
