//imports and icons for the login page
"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

// Login page authentication
const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/Premium");
      toast.success("login successful");
    } else if (res?.status === 401) {
      setError("Invalid Credentials");
      setPending(false);
    } else {
      setError("Something went wrong");
    }
  };

  // Handle social login providers
  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/dashboard" });
  };
  return (
    <>
    {/*Frontend*/}
      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto mt-16 px-6 py-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <ThemeSwitch />
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Welcome Back</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Login to your account</p>
        {error && (
          <div className="w-full p-3 rounded-md flex items-center gap-x-2 text-sm bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-300 mb-4 border border-red-200 dark:border-red-700">
        <p className="font-semibold">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
        type="email"
        disabled={pending}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <input
        type="password"
        disabled={pending}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button
        type="submit"
        disabled={pending}
        className="w-full bg-green-600 text-white font-semibold hover:bg-green-700 transition rounded-lg px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
        {pending ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex flex-col items-center mt-6 w-full">
          <p className="text-gray-500 dark:text-gray-400 mb-3">Or login with</p>
          <div className="flex space-x-4">
        <button
          onClick={(e) => handleProvider(e, "google")}
          className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow"
        >
          <FcGoogle className="mr-2 text-xl" />
          <span className="font-medium text-gray-700 dark:text-gray-200">Google</span>
        </button>
        <button
          onClick={(e) => handleProvider(e, "github")}
          className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow"
        >
          <FaGithub className="mr-2 text-xl text-gray-800 dark:text-gray-200" />
          <span className="font-medium text-gray-700 dark:text-gray-200">GitHub</span>
        </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
        Dont have an account?
        <Link href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline ml-2 font-medium">
          Sign Up
        </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;