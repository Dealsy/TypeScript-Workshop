import React, { useState } from "react";
import { z } from "zod";

/**
 * In this lesson, you'll integrate Zod into a simple React form.
 * The form already includes a rudimentary Zod schema, but there are no error messages displayed to the UI.
 * Your task is to modify the code so that the form shows proper error messages based on Zod validation.
 * 
 * 
 HINTS:
 1. Make sure to define the error state properly, leveraging Zod's types.
 2. Display the error messages under the corresponding input fields.
 */

// Existing Schema
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof LoginSchema>;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null); // TODO: Define the error state type

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedData = LoginSchema.parse(formData);
      // API call
    } catch (error) {
      if (error instanceof z.ZodError) {
        // TODO: Set errors and display them to the UI
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {/* TODO: Display email errors here */}
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {/* TODO: Display password errors here */}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
