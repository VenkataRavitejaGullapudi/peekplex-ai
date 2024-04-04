import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkLoginValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = () => {
    // Validate the form data
    const loginValid = checkLoginValid(
      email.current.value,
      password.current.value,
      fullName?.current?.value
    );

    setErrorMessage(loginValid.message);

    if (!loginValid.valid) return;

    // Sign or Sign Up
    if (isSignInForm) {
      // Sign In logic
      signInWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
            // Logged in
            console.log(userCredential)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // Sign up logic
      createUserWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up & in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

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
        <form
          method="POST"
          className="w-6/12 px-8 py-10  bg-black rounded-lg bg-opacity-80"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-semibold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full name"
              className="p-3 my-2 w-full bg-gray-700 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          />
          <p className="font-bold text-xs text-red-500">{errorMessage}</p>
          <button
            className="p-2 my-3 w-full bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
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
