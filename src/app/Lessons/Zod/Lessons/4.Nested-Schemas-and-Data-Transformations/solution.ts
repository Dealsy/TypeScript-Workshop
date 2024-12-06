import { z } from "zod";

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zipCode: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
});

const UserProfileSchema = z.object({
  username: z.string(),
  email: z
    .string()
    .email()
    .transform((str) => str.toLowerCase()),
  address: AddressSchema,
});

type Address = z.infer<typeof AddressSchema>;
type UserProfile = z.infer<typeof UserProfileSchema>;

const initialData = {
  username: "JohnDoe",
  email: "JOHN.DOE@EXAMPLE.COM",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "62704",
  },
};

try {
  const parsedData = UserProfileSchema.parse(initialData);
  console.log(parsedData);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(error.errors);
  }
}
