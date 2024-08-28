import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message, Spin } from "antd";
import { styles } from "../Styles/loader";
import useStore from "../useStore";

function Login() {
 const {  setUser } = useStore();
 const navigate = useNavigate();
 const mutation = useMutation({
  mutationFn: (data) => {
   return axios.post("http://localhost:5002/api/users/login/", data);
  },
  onSuccess: (data) => {
   setUser({
    email: data.data.data.email,
    username: data.data.data.username,
    user_id: data.data.data._id,
    isLogged: true,
   });
   message.success("User logged in successfully");
   
   navigate("/");
  },
  onError: (error) => {
   message.error(error.response?.data?.message || "An error occurred");
  },
 });

 const handleSubmit = (e) => {
  e.preventDefault();
  const inputData = new FormData(e.target);
  const email = inputData.get("email");
  const password = inputData.get("password");
  if (!email || !password) {
   message.error("Please fill all the fields");
   return;
  }
  mutation.mutate({ email: email, password: password });

  mutation.isSuccess && navigate("/");
 };
 return (
  <div className="flex flex-col sm:flex-row h-screen my-3 sm:m-12 overflow-hidden items-center ">
   {mutation.isPending && <Spin size="large" style={styles.spinContainer} />}

   <div className="flex flex-col h-fit sm:h-full w-full bg-gradient-to-r from-slate-400 to-blue-500 border-4 border-glass backdrop-blur-md rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none justify-center items-center  p-3 sm:p-12 gap-y-8">
    <Link to={"/"}>
     <img
      src={logo}
      className="sm:w-52 sm:h-52 h-44 w-44 hover:opacity-90 transition-opacity hidden md:block sm:block lg:block xl:block"
      alt="Quizmo"
     />
    </Link>
    <p className="text-wrap text-black font-serif font-bold text-2xl sm:text-4xl text-center">
     Welcome Back to QuizMo
    </p>
    <p className="font-medium sm:text-sm text-center text-wrap ">
     where your knowledge meets fun! Sign In now to continue your exciting
     journey of learning and challenge yourself with intriguing quizzes.
    </p>
   </div>
   <div className="flex flex-col h-screen w-full bg-white border-4 border-glass backdrop-blur-md rounded-b-3xl sm:rounded-r-3xl sm:rounded-bl-none">
    <div className="flex flex-row items-start w-full justify-end gap-1">
     <p>Don't have an account? </p>
     <Link
      className="text-blue-600 hover:text-blue-900 transition-all px-2"
      to={"/Signup"}
     >
      Register
     </Link>
    </div>
    <form
     className="flex flex-wrap p-5 flex-col justify-center h-full gap-3"
     onSubmit={handleSubmit}
    >
     <p className="font-bold text-3xl">Continue With</p>

     <p className="font-semibold text-sm">Email:</p>
     <input
      className="border-2 border-gray-300 rounded-md p-1 flex flex-wrap w-full"
      placeholder="Enter your email"
      name="email"
      id="email"
     />
     <p className="font-semibold text-sm">Password:</p>
     <input
      className="border-2 border-gray-300 rounded-md p-1 flex flex-wrap w-full"
      placeholder="Enter your password"
      name="password"
      id="password"
     />
     <p className="text-wrap text-2xs">
      By continuing, you agree to QuizMo's Terms of Service and Privacy!
     </p>
     <button className="w-full rounded-2xl bg-blue-500 flex flex-wrap justify-center  hover:bg-blue-600 transition-colors">
      <p className="text-white font-bold py-2 px-2 ">Sign In</p>
     </button>
    </form>
   </div>
  </div>
 );
}

export default Login;
