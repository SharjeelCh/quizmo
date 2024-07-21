import React from "react";
import logo from "../assets/logo.png";
import { IoLogoGoogle } from "react-icons/io";
import { handlegoToHome, handlegoToLogin } from "../Functions/HelperFuncs";
function Signup() {
  return (
    <div className="flex flex-col sm:flex-row sm:h-screen md:h-screen lg:h-screen my-3 sm:m-12 overflow-hidden items-center ">
      <div className="flex flex-col h-fit sm:h-full sm:w-full w-full bg-gradient-to-r from-slate-400 to-blue-500 border-4 border-glass backdrop-blur-md rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none justify-center items-center  p-3 sm:p-12 gap-y-8">
        <button onClick={handlegoToHome}>
          <img src={logo} className="sm:w-52 sm:h-52 h-44 w-44 hover:opacity-90 transition-opacity" alt="quizmo" />
        </button>
        <p className="text-wrap text-black font-serif font-bold text-2xl sm:text-4xl text-center">
          Get Started With a Free Account
        </p>
        <p className="font-medium sm:text-sm text-center text-wrap hidden sm:block">
          Welcome to QuizMo, where your knowledge meets fun! Sign up now to
          embark on an exciting journey of learning and challenge yourself with
          intriguing quizzes.
        </p>
      </div>
      <div className="flex flex-col h-fit sm:w-full w-full sm:h-full bg-white border-4 border-glass backdrop-blur-md rounded-b-3xl sm:rounded-r-3xl sm:rounded-bl-none">
        <div className="flex flex-row items-start w-full justify-end gap-1">
          <p>Already have an account? </p>
          <button
            className="text-blue-600 hover:text-blue-900 transition-all px-2"
            onClick={handlegoToLogin}
          >
            Login
          </button>
        </div>
        <div className="flex flex-wrap p-5 flex-col justify-center sm:h-full md:h-full lg:h-full xl:h-full h-fit gap-3">
          <p className="font-bold text-3xl">Get Started with</p>
          <button className="flex flex-row border-2 w-fit px-2 py-1 text-wrap rounded-2xl hover:bg-slate-200 transition-colors gap-1">
            <IoLogoGoogle className="text-2xl text-green-500 text-wrap" />
            <p className="hidden sm:block">Register with Google</p>
            <p className="block sm:hidden">Google</p>
          </button>
          <p className="text-center">or</p>

          <p className="font-semibold text-sm">Your Name:</p>
          <input
            className="border-2 border-gray-300 rounded-md p-1 flex flex-wrap w-full"
            placeholder="Enter your name"
          />
          <p className="font-semibold text-sm">Email:</p>
          <input
            className="border-2 border-gray-300 rounded-md p-1 flex flex-wrap w-full"
            placeholder="Enter your email"
          />
          <p className="font-semibold text-sm">Password:</p>
          <input
            className="border-2 border-gray-300 rounded-md p-1 flex flex-wrap w-full"
            placeholder="Enter your password"
          />
          <p className="text-wrap text-2xs">
            By continuing, you agree to QuizMo's Terms of Service and Privacy!
          </p>
          <button className="w-full rounded-2xl bg-blue-500 flex flex-wrap justify-center hover:bg-blue-600 transition-colors">
            <p className="text-white font-bold py-2 px-2">Sign Up</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
