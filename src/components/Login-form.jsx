"use client";
import { login } from "@/lib/form-action";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [formState, formAction] = useFormState(login, {});

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
        Login
      </button>
      {formState?.errors && (
        <div className="mt-4 rounded-md bg-red-100 p-4">
          <ul className="list-inside list-disc text-sm text-red-600">
            {Object.entries(formState.errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
