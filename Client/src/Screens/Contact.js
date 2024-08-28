import React, { useState } from "react";
import useStore from "../useStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message, Spin } from "antd";
import Popper from "../Components/Popper";
import { styles } from "../Styles/loader";

const Contact = () => {
 const { user } = useStore();
 const [showPopper, setShowPopper] = useState(false);

 const mutation = useMutation({
  mutationFn: async (data) => {
   await axios.post("https://quizmo-six.vercel.app/api/users/sendMessage", data);
  },
  onSuccess: () => {
   message.success("Message sent successfully. We will get back to you soon");
  },
  onError: (error) => {
   message.error(error.response?.data?.message || "Failed to send message");
  },
 });
 const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = new FormData(e.target);
  const data = {
   email: inputs.get("email"),
   username: inputs.get("name"),
   message: inputs.get("message"),
  };
  if (!data.message) {
   message.error("Please fill all the fields");
   return;
  }

  if (user.isLogged) mutation.mutate(data);
  else {
   setShowPopper(!showPopper);
  }
 };

 return (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center mt-2 rounded-t-2xl">
   <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
    {mutation.isPending && <Spin size="large" style={styles.spinContainer} />}
    {showPopper && <Popper open={showPopper} setOpen={setShowPopper} />}
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="text-gray-600 mb-6">
     Any questions or remarks? Just write us a message!
    </p>
    <form className="space-y-4" onSubmit={handleSubmit}>
     <div className="grid grid-cols-2 gap-4">
      <input
       type="email"
       name="email"
       {...(user.isLogged && { value: user.email })}
       readOnly={user?.isLogged && true}
       placeholder="Enter a valid email address"
       className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
       type="text"
       name="name"
       {...(user.isLogged && { value: user.username })}
       readOnly={user?.isLogged && true}
       placeholder="Enter your Name"
       className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
     </div>
     <input
      type="text"
      name="message"
      placeholder="Enter your message"
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
     />
     <button
      type="submit"
      className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none transition-all"
     >
      SUBMIT
     </button>
    </form>
   </div>

   <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all ease-in-out">
     <div className="flex justify-center items-center text-teal-500 mb-3">
      <svg
       className="w-12 h-12"
       fill="currentColor"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
      >
       <path d="M21 9a9 9 0 11-18 0 9 9 0 0118 0zM2 9a7 7 0 1014 0A7 7 0 002 9zm12.293-2.293L12 8.586l-2.293-2.293a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414L12 11.414l2.293 2.293a1 1 0 001.414-1.414L13.414 10l2.293-2.293a1 1 0 00-1.414-1.414z"></path>
      </svg>
     </div>
     <h3 className="text-lg font-semibold cursor-pointer">EMAIL</h3>
     <a href="mailto:sharjeelh6451@gmail.com?subject=Your%20Subject&body=Your%20Email%20Body">
      <p>Sharjeelh6451@gmail.com</p>
     </a>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md  hover:scale-105 transition-all ease-in-out">
     <div className="flex justify-center items-center text-teal-500 mb-3">
      <svg
       className="w-12 h-12"
       fill="currentColor"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
      >
       <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 01.91-.27 11.36 11.36 0 003.55.57 1 1 0 011 1v3.45a1 1 0 01-.92 1 19.91 19.91 0 01-8.86-2.34 19.82 19.82 0 01-6.15-6.15 19.91 19.91 0 01-2.34-8.85 1 1 0 011-1h3.45a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.27.91l-2.2 2.2z"></path>
      </svg>
     </div>
     <h3 className="text-lg font-semibold">PHONE (LANDLINE)</h3>
     <p>+912 3 567 8987</p>
     <p>+912 5 252 3336</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md  hover:scale-105 transition-all ease-in-out">
     <div className="flex justify-center items-center text-teal-500 mb-3">
      <svg
       className="w-12 h-12"
       fill="currentColor"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
      >
       <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z"></path>
      </svg>
     </div>
     <h3 className="text-lg font-semibold">OUR OFFICE LOCATION</h3>
     <p>Rawalpindi, Pakistan</p>
     <p>MCS</p>
    </div>
   </div>
  </div>
 );
};

export default Contact;
