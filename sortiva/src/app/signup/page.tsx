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
    signIn(value, { callbackUrl: "/Premium" });
  };
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4">
  <div className="absolute inset-0 z-0 pointer-events-none" id="hero-particles"></div>
  <div className="relative z-10 w-full max-w-lg mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-white mb-2 animate-fadeInUp">Sortiva</h1>
    <p className="text-lg md:text-2xl font-light text-gray-400 mb-8 animate-fadeInUp delay-100">
      Transforming Our World, One Waste Sorted At A Time
    </p>
    <div className="bg-gray-800/90 rounded-xl shadow-xl p-8 flex flex-col items-center">
      <ThemeSwitch />
      <h1 className="text-3xl font-semibold font-poppins text-white mb-2">Welcome</h1>
      <p className="text-gray-400 mb-4">Create an account</p>
      <div className="w-full mb-6">
        {error && (
          <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-red-500 font-bold bg-red-100/10">
            <p>{error}</p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <input
          type="text"
          disabled={pending}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Username"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <input
          type="email"
          disabled={pending}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <input
          type="password"
          disabled={pending}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <input
          type="password"
          disabled={pending}
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 rounded-md bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold font-poppins text-lg hover:scale-[1.02] hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </form>
      <div className="flex my-4 justify-center space-x-4">
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
      <p className="text-center text-sm mt-2 text-gray-400">
        Already have an account?
        <Link
          className="text-sky-500 ml-2 hover:underline"
          href="/signin"
        >
          Sign in
        </Link>
      </p>
    </div>
  </div>

    </>
  );
}
 export default SignUp;