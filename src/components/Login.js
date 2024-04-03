import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="">
        <Header />
      </div>
      <div className="-z-10 fixed top-0 bottom-0 left-0 right-0">
        <img
          className="bg-fixed h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgroundImage"
        />
      </div>
      <div className="flex h-full justify-center items-center text-white">
        <form className="w-6/12 px-8 py-10  bg-black rounded-lg bg-opacity-80">
          <h1 className="font-semibold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="p-3 my-2 w-full bg-gray-700 rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          />
          <button className="p-2 my-3 w-full bg-red-700 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-2 py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
