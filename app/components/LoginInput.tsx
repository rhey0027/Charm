"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { buttonClcik } from "@/animations";

// interface LoginInputProps {
//   isSignup?: boolean;
//   type?: string;
// }
type LoginInputProps = {
  username?: string;
  email?: string;
  password?: string;
  isSignup?: "true" | "false";
  type?: string;
};

const Login = (inputProps: LoginInputProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issignup, setIssignup] = useState(false);
  const router = useRouter();

  // ======== PASSWORD VISIBILITY ========//
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(handleSubmit);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid credentials!");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[400px] pt-16">
        <h1 className="mb-2 text-xl font-bold text-center uppercase">
          {issignup ? "Create an account" : "Welcome Back"}
        </h1>
        <p className="text-sm text-center text-gray-500 font-light">
          {issignup
            ? "Create your Charm Haven Member profile, and get access to an enhanced shopping experience."
            : "Sign-in to access an enhanced shopping experience"}
        </p>
        {/* ==== INPUT FIELDS ======= */}
        <form onSubmit={handleSubmit} className="relative flex flex-col w-full">
          {issignup && (
            <input
              type="text"
              placeholder="Username..."
              className="bg-gray-200 w-full mt-5 px-3 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-green-500 duration-100 ease-in-out"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          {issignup && (
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
              onMouseLeave={() => setShowPassword(false)}
              className="absolute top-[137px] right-3 cursor-pointer text-gray-400"
            />
          )}
          <input
            type="email"
            placeholder="Email..."
            className="bg-gray-200 w-full mt-2 px-3 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-green-500 duration-100 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password..."
            className="w-full mt-2 px-3 py-2 mb-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-green-500 duration-100 ease-in-out bg-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!issignup && (
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
              onMouseLeave={() => setShowPassword(false)}
              className="absolute top-[75px] right-3 cursor-pointer text-gray-400"
            />
          )}
          {issignup ? (
            <button
              type="submit"
              className="mt-5 bg-gradient-to-b from-gray-950 to-gray-800 via-gray-800 text-white p-2 rounded-md cursor-pointer ease-in-out"
            >
              Sign up
            </button>
          ) : (
            <motion.button
              type="submit"
              className="mt-5 bg-gradient-to-b from-gray-950 to-gray-800 via-gray-800 text-white p-2 rounded-md cursor-pointer ease-in-out"
            >
              Sign in
            </motion.button>
          )}
          {!issignup ? (
            <p className="text-center">
              Not yet a member? {""}
              <motion.button
                {...buttonClcik}
                className="mt-3 text-md text-blue-500 underline"
                onClick={() => setIssignup(true)}
              >
                Join us
              </motion.button>
            </p>
          ) : (
            <p className="pt-3 text-center">
              Already a member? {""}
              <motion.button
                {...buttonClcik}
                className="underline text-blue-500 text-md"
                onClick={() => setIssignup(false)}
              >
                Sign in
              </motion.button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
