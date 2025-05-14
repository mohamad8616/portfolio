"use server";

import { redirect } from "next/navigation";
import { createAuthSession, destroyAuthSession } from "./auth";
import { hashUserPassword, verifyPassword } from "./hash";
import { createUser, existingUser } from "./user";

export async function signUp(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/admin");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email:
            "It seems like an account for the chosen email already exists.",
        },
      };
    }
    throw error;
  }
}
export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const isExistingUser = existingUser(email);
  if (!isExistingUser) {
    return {
      errors: {
        email: "Could not authenticate user, please check your credentials.",
      },
    };
  }
  const isValidPassword = verifyPassword(isExistingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials.",
      },
    };
  }
  await createAuthSession(isExistingUser.id);
  redirect("/admin");
}

export const handleAuth = async (mode, prevState, formData) => {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signUp(prevState, formData);
};

export async function logout() {
  await destroyAuthSession();
  redirect("/");
}
