import React, { useState } from "react";
import assets from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("");
  return (
    <div
      className="bg-no-repeat bg-cover flex items-center justify-evenly min-h-[100vh]"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <img className="chat_logo" src={assets.logo_big} alt="Chat Logo" />
      <form className="bg-white py-5 px-8 flex flex-col gap-5 rounded-xl min-w-96">
        <h2 className="font-medium text-2xl">
          {state === "sign up" ? "Sign Up" : "Login"}
        </h2>
        {/* {state === "sign up" ? (
          <p>Create your account</p>
        ) : (
          <p>Login to your account</p>
        )} */}
        {state === "sign up" && (
          <input
            className="py-2 px-2.5 border border-[#c9c9c9] rounded-sm outline outline-[#077eff]"
            type="text"
            placeholder="Username"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          className=" py-2 px-2.5 border border-[#c9c9c9] rounded-sm outline outline-[#077eff]"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-2.5 border border-[#c9c9c9] rounded-sm outline outline-[#077eff]"
        />
        <button
          type="submit"
          className="p-2.5 bg-[#077eff] text-white text-md border-0 rounded-sm cursor-pointer"
        >
          {state === "sign up" ? "Sign Up" : "Login"}
        </button>
        {state === "sign up" && (
          <div className="flex gap-1.5 text-sm">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
        )}

        <div className="text-sm flex flex-col gap-1.5 text-[#5c5c5c]">
          <p>
            {" "}
            {state === "sign up"
              ? " Already have an account? "
              : "Don't have an account? "}
            {state === "sign up" ? (
              <span
                onClick={() => setState("login")}
                className="font-medium text-[#077eff] cursor-pointer"
              >
                Login here
              </span>
            ) : (
              <span
                onClick={() => setState("sign up")}
                className="font-medium text-[#077eff] cursor-pointer"
              >
                Click here
              </span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
