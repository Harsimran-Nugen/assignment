"use client";
import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type LoginType = { email: string; password: string };
function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<LoginType>({ email: "", password: "" });
  const validateEmail = (email: string) => {
    const re = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,}$/;
    return re.test(email);
  };

  const fetchData = async () => {
    const data = { email, password };

    try {
      const response = await fetch("https://cs-api.nugen.co.in/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        router.push("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      console.error("Error message:", err);
    }
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const generateError = { email: "", password: "" };
    let hasError = false;

    if (!email) {
      generateError.email = "Email is required";
      hasError = true;
    }
    if (!validateEmail(email)) {
      generateError.email = "Invalid email format";
      hasError = true;
    }

    if (!password) {
      generateError.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setError(generateError);
    } else {
       fetchData();
    }
  };

  return (
    <div className=" w-80  bg-white rounded-lg shadow  sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex gap-2 text-xl font-bold justify-center text-gray-700 md:text-2xl">
          <p>Log in to your account</p>
          <UserRound className="w-14 h-14" />
        </div>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                error.email && "border-red-600"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
            />
            {error.email && (
              <div className="text-start text-red-600 text-xs">
                {error.email}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 placeholder-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                error.password && "border-red-600"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && (
              <div className="text-start text-red-600 text-xs">
                {error.password}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-100 "
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-700 ">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            onMouseEnter={handleLogin}
            
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-300 to-green-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
