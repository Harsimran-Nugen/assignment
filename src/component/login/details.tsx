"use client";
import axios from "axios";
import { UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginDetails() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const ApiData = () => {
    axios
      .post("http://192.168.29.65:8000/auth/login", { email, password })
      .then((response) => {
        console.log(response);
        localStorage?.setItem("Token", response.data.accessToken);
        router.push("/dashboard");
      })
      .catch(() => {
        setError({
          email: "",
          password: "",
        });
      });
  };

  const handleLogin = () => {
    const newError = { email: "", password: "" };
    let hasError = false;

    if (!email) {
      newError.email = "Email is required";
      hasError = true;
    }
    if (!password) {
      newError.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
    } else {
      ApiData();
    }
  };

  return (
    <div className="flex flex-col justify-center gap-6 text-center shadow-md rounded-md">
      <div className="flex justify-center">
        <UserRoundPlus stroke="#3f78eb" />
      </div>
      <input
        type="email"
        id="email"
        className={`bg-gray-50 border border-gray-300 text-sm block w-full p-2.5 ${
          error.email && "border-red-600"
        }`}
        placeholder="name@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error.email && (
        <div className="text-start text-red-600 text-xs">{error.email}</div>
      )}

      <input
        className={`bg-gray-50 border border-gray-300 text-sm block w-full p-2.5 ${
          error.password && "border-red-600"
        }`}
        required
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error.password && (
        <div className="text-start text-red-600 text-xs">{error.password}</div>
      )}
      <div className="flex items-start gap-2 mb-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
          required
        />

        <label
          htmlFor="remember"
          className=" text-sm font-medium text-gray-900 "
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className=" border-white border-2 text-sm sm:w-auto px-5 py-2.5 text-center"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default LoginDetails;
