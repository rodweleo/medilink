import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z.string().min(10, {
      message: "Your name is below required length.",
    }),
    password: z.string().min(8, {
      message: "Your password is below required length.",
    }),

    confirmPassword: z.string().min(8, {
      message: "Your confirm password is below required length.",
    }),
    email: z
      .string()
      .min(8, {
        message: "Email address is too short",
      })
      .email("This is not a valid email address!"),
    contact: z.string().min(10),
    dob: z
      .date({
        required_error: "A date of birth is required.",
      })
      .min(new Date("1920-01-01"), {
        message: "Too old",
      })
      .max(new Date(), {
        message: "Too young!",
      }),
    hasAgreedToTerms: z.boolean({
      message: "Required",
    }),
  })
  .superRefine(({ password, dob, name, email }, ctx) => {
    const error = validatePassword(password, dob.toDateString(), name, email);
    if (error) {
      ctx.addIssue({
        code: "custom",
        message: error,
        path: ["password"],
      });
    }
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
const validatePassword = (
  pwd: string,
  dob: string,
  fullname: string,
  email: string,
) => {
  if (pwd.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  if (!/[a-z]/.test(pwd)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/[A-Z]/.test(pwd)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[0-9]/.test(pwd)) {
    return "Password must contain at least one digit.";
  }
  const fullNames = fullname.split(" ");
  const emailWords = email.split("@")[0].split("."); // Split email before "@" and "."

  for (const word of fullNames.concat(emailWords)) {
    if (word.length > 0 && pwd.toLowerCase().includes(word.toLowerCase())) {
      return "Password cannot contain words from your username or email address.";
    }
  }

  // Extract year and reversed year from DoB
  const dobParts = dob.split(" ");
  const dobYear = dobParts[3];
  const reversedYear = dobYear.split("").reverse().join(""); // Reverse year string

  // Check for DoB variations
  if (
    pwd.includes(dobYear) ||
    pwd.includes(reversedYear) ||
    pwd.includes(dobYear.slice(-2))
  ) {
    return "Password cannot contain your date of birth year (including variations).";
  }
  return null;
};
