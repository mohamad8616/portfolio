"use client";

import LoginForm from "@/components/Login-form";

export default function Login() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-20 text-3xl font-bold text-white">
        Insert your credentials
      </h1>
      <LoginForm />
    </div>
  );
}
