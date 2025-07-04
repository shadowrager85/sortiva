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
      router.push("/dashboard");
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
<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Lato:wght@300;400&display=swap');
  :root {
      --bg-dark:rgb(0, 0, 0);
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
      background: linear-gradient(45deg,rgb(18, 56, 19), #1E1E1E);
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
      box-shadow: 0 10px 30px rgba(10, 214, 221, 0.2);
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

    <div className="signin-container">
      <h1>Welcome Back</h1>
      <p>Login to your account</p>

      {/* Error message */}
      <div className="error-message">
        <p className="text-red-300 font-bold">{error}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          disabled={pending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          disabled={pending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" disabled={pending}>
          Login
        </button>
      </form>

      {/* Social Login */}
      <div className="social-login">
        <p>Or login with</p>
        <div className="social-buttons">
          <button onClick={(e) => handleProvider(e, 'google')}>
            <FcGoogle className="mr-2" />
          </button>
          <button onClick={(e) => handleProvider(e, 'github')}>
            <FaGithub className="mr-2" />
          </button>
        </div>
      </div>

      {/* Sign-up Link */}
      <div className="signup-link">
        <p>
          Don’t have an account?
          <Link href="/signup" className="ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default SignIn;
