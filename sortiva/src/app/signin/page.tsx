//imports and icons for the login page
"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

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
      <div className="register flex flex-col justify-center items-center w-full max-w-md mx-auto mt-10 p-4">
        <h1 className="text-4xl font-semibold mb-2">Welcome Back</h1>
        <p className="mb-4">Login to your account</p>
        <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <p className="text-red-300 font-bold">{error}</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2 border-gray-300 p-2 rounded w-full mb-4"
          />
          <input
            type="password"
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2 border-gray-300 p-2 rounded w-full mb-4"
          />
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-green-600 text-gray-100 hover:bg-green-700 transition rounded-md px-6 py-3"
          >
          Login
          </button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-500 mb-2">Or login with</p>
          <div className="flex space-x-4">
            <button
              onClick={(e) => handleProvider(e, "google")}
              className="flex items-center bg-white border-2 border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition"
            >
              <FcGoogle className="mr-2" />
              Google
            </button>
            <button
              onClick={(e) => handleProvider(e, "github")}
              className="flex items-center bg-white border-2 border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition"
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p>
            Dont have an account?
            <Link href="/signup" className="text-blue-500 hover:underline ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;