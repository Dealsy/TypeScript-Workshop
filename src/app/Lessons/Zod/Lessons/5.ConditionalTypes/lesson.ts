/**
 * In this lesson, you're going to explore conditional types in Zod.
 * Conditional types allow you to change the schema based on the value of another field.
 * For example, if a user selects 'Other' in a role dropdown, you might want to make an additional 'Specify Other' text field required.
 *
 * There is a Jest test for this lesson, The test should fail if role is Other and otherRole is not provided.
 * Currently, the test will pass for all values of role.
 *
 * To run the test, cd into the directory containing this file (and the other lesson files) and run:
 * yarn jest --watch src/app/Lessons/Zod/Lessons/5.ConditionalTypes/lesson.test.ts
 *
 * This command will run the test in watch mode, which means it will re-run the test every time you save a file.
 *
 * HINTS:
 * 1. Start by creating a base schema for a form that includes a `role` field with potential values: ["Developer", "Designer", "Other"].
 * 2. If the role is "Other", make an additional field `otherRole` required.
 * 3. Use Zod's `.refine()` method to add this conditional requirement to your schema.
 */

import { z } from "zod";

export const FormDataSchema = z.object({
  // TODO: Add a 'role' field with potential values: ["Developer", "Designer", "Other"].
  // TODO: Add conditional logic to require an 'otherRole' field when 'role' is "Other".
});

type FormData = {
  role: "Developer" | "Designer" | "Other";
  otherRole?: string;
};

export const initialFormData: FormData = {
  role: "Developer",
};
