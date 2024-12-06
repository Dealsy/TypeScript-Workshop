/**
 * Solution to the "Conditional Types with Zod" lesson.
 */

import { z } from "zod";

export const FormDataSchema = z
  .object({
    role: z.union([
      z.literal("Developer"),
      z.literal("Designer"),
      z.literal("Other"),
    ]),
    otherRole: z.string().optional(),
  })
  .refine((data) => !(data.role === "Other" && !data.otherRole), {
    message: "When role is 'Other', 'otherRole' must be provided.",
    path: ["otherRole"],
  });

type FormData = z.infer<typeof FormDataSchema>;

export const initialFormData: FormData = {
  role: "Designer",
};

function isError(err: unknown): err is Error {
  return err instanceof Error;
}

// Trigger the validation and throw if it fails
try {
  FormDataSchema.parse(initialFormData); // This will throw an error if validation fails
} catch (e) {
  if (isError(e)) {
    console.error(e.message);
  } else {
    console.error(e);
  }
}
