"use client";
import { Eye, EyeOff, Loader, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BgImage from "@/images/img3.png";
import Image from "next/image";

export type LoginType = { email: string; password: string };
function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<LoginType>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        router.push("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      console.error("Error message:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault()
    const generateError = { email: "", password: "" };
    let hasError = false;

    if (!email) {
      generateError.email = "Email is required";
      hasError = true;
    } else if (email && !validateEmail(email)) {
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
      setLoading(true);
      fetchData();
    }
  };

  return (
    <div className="w-full h-screen  relative">
      <Image src={BgImage} className="w-full h-full" alt="image" />
      <div className=" bg-neutral-900 opacity-90 rounded-lg shadow-md sm:max-w-md xl:p-2 absolute top-10 left-[38%]">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex gap-2 text-xl font-bold justify-center items-center text-white md:text-2xl">
            <p>Log in to your account</p>
            <UserRound className="w-10 h-10 mb-3" />
          </div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium px-1 text-white "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`bg-gray-50 border border-gray-300  rounded-lg w-full p-2.5  placeholder-gray-700 text-gray-900 ${
                  error.email && "border-2 border-red-600"
                }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error.email) {
                    setError((prevError: LoginType) => ({
                      ...prevError,
                      email: "",
                    }));
                  }
                }}
                placeholder="name@gmail.com"
              />
              {error.email && (
                <div className="text-start ml-2 text-red-600 text-xs">
                  {error.email}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between px-1">
                <label
                  htmlFor="password"
                  className=" text-sm font-medium text-white"
                >
                  Password
                </label>
                <div
                  className="w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </div>
              </div>
              <input
               type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  w-full p-2.5  placeholder-gray-700  ${
                  error.password && "border-2 border-red-600"
                }`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error.password) {
                    setError((prevError: LoginType) => ({
                      ...prevError,
                      password: "",
                    }));
                  }
                }}
              />
              {error.password && (
                <div className="text-start ml-2 text-red-600 text-xs">
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
              disabled={loading}
              type="submit"
              className="w-full text-white bg-blue-400 hover:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {loading ? (
                <div className="flex justify-center text-white ">
                  <Loader />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
