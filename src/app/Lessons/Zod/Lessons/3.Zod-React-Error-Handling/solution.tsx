import React, { useState } from "react";
import { z, ZodIssue } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

/**
 *  Explanation:
 1. Defined the error state type using Zod's inferred types.
 2. Added error messages under the input fields by iterating through the errors array.
 */

type FormData = z.infer<typeof LoginSchema>;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ZodIssue[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedData = LoginSchema.parse(formData);
      // API call
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
      }
    }
  };

  const emailError = errors?.find((err) => err.path[0] === "email")?.message;
  const passwordError = errors?.find(
    (err) => err.path[0] === "password"
  )?.message;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <p>{emailError}</p>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {passwordError}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
