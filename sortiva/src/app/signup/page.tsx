"use client"

import Link from "next/link";

// icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";



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
<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Lato:wght@300;400&display=swap');
  :root {
      --bg-dark: #121212;
      --bg-light: #1E1E1E;
      --primary-color: #00A8E8;
      --secondary-color: #FF2E63;
      --text-light: #EAEAEA;
      --text-dark: #A0A0A0;
      --font-heading: 'Poppins', sans-serif;
      --font-body: 'Lato', sans-serif;
  }

  body {
      font-family: var(--font-body);
      margin: 0;
      background-color: var(--bg-dark);
      color: var(--text-light);
      overflow-x: hidden;
  }

  .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(45deg, #121212, #1E1E1E);
      padding: 1rem;
  }

  #hero-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
  }

  .hero-overlay {
      position: relative;
      text-align: center;
      color: #fff;
      z-index: 2;
      width: 100%;
      max-width: 500px;
  }

  .hero-overlay .animated-text {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 1s forwards 0.5s;
      font-family: var(--font-heading);
      letter-spacing: 1px;
  }
  
  .hero-overlay h1.animated-text {
      font-size: 8vw;
      font-weight: 700;
      margin-bottom: 10px;
  }

  .hero-overlay p.animated-text {
      font-size: 4vw;
      font-weight: 300;
      color: var(--text-dark);
  }

  @media (min-width: 768px) {
      .hero-overlay h1.animated-text {
          font-size: 4vw;
      }
      .hero-overlay p.animated-text {
          font-size: 1.5vw;
      }
  }

  @keyframes fadeInUp {
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  .signin-container {
      background: var(--bg-light);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      width: 100%;
      max-width: 450px;
      margin: 2rem auto;
  }

  .signin-container h1 {
      font-family: var(--font-heading);
      font-size: 1.8em;
      font-weight: 600;
      color: var(--text-light);
      margin-bottom: 0.5rem;
  }

  .signin-container > p {
      color: var(--text-dark);
      margin-bottom: 1.5rem;
  }

  .signin-container input {
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 1rem;
      background-color: var(--bg-dark);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: var(--text-light);
      font-family: var(--font-body);
      transition: border-color 0.3s, box-shadow 0.3s;
  }

  .signin-container input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(0, 168, 232, 0.3);
  }

  .signin-container input::placeholder {
      color: var(--text-dark);
  }

  .signin-container button[type="submit"] {
      width: 100%;
      padding: 12px 15px;
      border: none;
      border-radius: 5px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      color: #fff;
      font-family: var(--font-heading);
      font-size: 1em;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
  }

  .signin-container button[type="submit"]:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 168, 232, 0.2);
  }

  .signin-container button[type="submit"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
  }
`}</style>

  <div className="hero-section">
  <div id="hero-particles"></div>
  <div className="hero-overlay">
    <h1 className="animated-text">Sortiva</h1>
    <p className="animated-text">
      Transforming Our World, One Waste Sorted At A Time
    </p>

    <div className="register flex flex-col justify-center items-center w-full max-w-md mx-auto mt-10 p-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Welcome</h1>
      <p className="mb-4 text-sm md:text-base">Create an account</p>

      <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
        <p className="text-red-300 font-bold">{error}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-gray-900 rounded-2xl p-6 w-full"
      >
        <input
          type="text"
          disabled={pending}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Username"
          className="border border-gray-300 p-2 rounded text-black"
        />

        <input
          type="email"
          disabled={pending}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded text-black"
        />

        <input
          type="password"
          disabled={pending}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded text-black"
        />

        <input
          type="password"
          disabled={pending}
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          placeholder="Confirm Password"
          className="border border-gray-300 p-2 rounded text-black"
        />

        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Continue
        </button>
      </form>

      <div className="flex my-4 justify-center space-x-4">
        <button
          disabled={pending}
          onClick={(e) => handleProvider(e, 'google')}
          className="bg-slate-300 hover:bg-slate-400 hover:scale-110 p-2 rounded"
        >
          <FcGoogle className="size-6" />
        </button>
        <button
          disabled={pending}
          onClick={(e) => handleProvider(e, 'github')}
          className="bg-slate-300 hover:bg-slate-400 hover:scale-110 p-2 rounded"
        >
          <FaGithub className="size-6" />
        </button>
      </div>

      <p className="text-center text-sm mt-2 text-muted-foreground">
        Already have an account?
        <Link
          className="text-sky-700 ml-2 hover:underline"
          href="/signin"
        >
          Sign in
        </Link>
      </p>
    </div>
  </div>
</div>

    </>
  );
}
 export default SignUp;