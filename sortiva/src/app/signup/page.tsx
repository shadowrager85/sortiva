"use client"

import Link from "next/link";

// icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";



//front-end authentication and signup page
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok) {
      setPending(false);
      toast.success(data.message);
      router.push("/signin");
    } else if (res.status === 400) {
      setError(data.message);
      setPending(false);
    } else if (res.status === 500) {
      setError(data.message);
      setPending(false);
    }
  };

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/dashboard" });
  };
  return (
    <div className="register flex flex-col justify-center items-center w-full max-w-md mx-auto mt-10 p-4">
      <ThemeSwitch />
      <h1 className="text-4xl font-semibold mb-2">Welcome</h1>
      <p className="mb-4">Create an account</p>
        <div className=" p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <p className="text-red-300 font-bold">{error}</p>
          </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-gray-900 border-2 rounded-2xl p-8 w-full"
      >
        <input
          type="text"
          disabled={pending}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Username"
          className="border-2 border-gray-300 p-2 rounded"
        />

        <input
          type="email"
          disabled={pending}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="border-2 border-gray-300 p-2 rounded"
        />

        <input
          type="password"
          disabled={pending}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
            className="border-2 border-gray-300 p-2 rounded"
          />
             <input
          type="password"
          disabled={pending}
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          placeholder="Confirm Password"
            className="border-2 border-gray-300 p-2 rounded"
          />

          <button type="submit"
          disabled={pending}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Continue
          </button>
      </form>

      <div className="flex my-2 justify-evenly mx-auto items-center">
        <button
          disabled={pending}
          onClick={(e) => handleProvider(e, "google")}
          className="bg-slate-300 hover:bg-slate-400 hover:scale-110 p-2 rounded"
        >
          <FcGoogle className="size-8 left-2.5 top-2.5" />
        </button>
        <button
          disabled={pending}
          onClick={(e) => handleProvider(e, "github")}
          className="bg-slate-300 hover:bg-slate-400 hover:scale-110 p-2 rounded"
        >
          <FaGithub className="size-8 left-2.5 top-2.5" />
        </button>
      </div>
      <p className="text-center text-sm mt-2 text-muted-foreground">
        Already have an account?
        <Link
          className="text-sky-700 ml-4 hover:underline cursor-pointer"
          href="/signin"
        >
          Sign in{" "}
        </Link>
      </p>
    </div>
  );
}
 export default SignUp;