import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo2.png";
import quizTypes from "../JSON/quizTypes.json";
import {
 handlegoToLogin,
 handlegoToSignup,
 truncateText,
} from "../Functions/HelperFuncs";
import Card from "../Components/Card";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.webp";
import { Link, useNavigate } from "react-router-dom";

function Home() {
 const [types, setTypes] = useState();
 const [show, setshow] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  setshow(true);
  if (show) {
   setTimeout(() => {
    setshow(false);
   }, 3000);
  }
  const fetchTypes = async () => {
   try {
    setTypes(quizTypes.quizTypes);
   } catch (error) {
    console.log(error);
   }
  };
  fetchTypes();
 }, []);

 return (
  <div className="flex flex-col">
   <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
    <p className="text-sm sm:text-sm md:text-base lg:text-sm font-bold mr-2">
     Free!
    </p>
    <p className="text-sm sm:text-sm md:text-base lg:text-sm mr-2">
     Click here to
    </p>
    <Link
     className="text-sm sm:text-sm md:text-base lg:text-sm mr-2 text-blue-600 hover:text-blue-900"
     to={"/Login"}
    >
     Join QuizMo
    </Link>
    <p className="text-sm sm:text-sm md:text-base lg:text-sm">
     Thousands of games, quizzes, and lots more!
    </p>
   </div>

   <div className="flex sm:flex-row h-fit gap-10 bg-gradient-to-t from-white to-blue-200 rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center my-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
    <img
     src={logo2}
     className="w-32 h-32 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40"
    />
    <div className={`${show ? "animate-slide-from-right" : ""} flex-wrap`}>
     <p className="text-app-bg font-bold text-3xl">
      The World's Greatest Trivia Game
     </p>
     <div>
      <Link
       className="text-pinkish font-semibold hover:text-pink-900"
       to={"/Signup"}
      >
       New User
      </Link>
      <p>or</p>
      <Link
       className="text-purple-950 font-semibold hover:text-purple-800"
       to={"/Login"}
      >
       Login
      </Link>
     </div>
    </div>
   </div>

   <div className="flex flex-wrap flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center justify-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-cyan-950`}
    >
     2.5 Million
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2`}
    >
     Question
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md mr-2`}
    >
     |
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-red-700`}
    >
     16000
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md-sm mr-2`}
    >
     Quizes
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md mr-2`}
    >
     |
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-orange-900`}
    >
     14000
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md  mr-2`}
    >
     Topics
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md mr-2`}
    >
     |
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-yellow-600`}
    >
     10000
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md  mr-2`}
    >
     Players
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md mr-2`}
    >
     |
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-blue-800`}
    >
     40000
    </p>
    <p
     className={`${
      show ? "animate-slide-from-left" : ""
     } text-base sm:text-base md:text-base lg:text-md mr-2`}
    >
     Uniques Challenges
    </p>
   </div>

   <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2 justify-between">
    <p className="text-lg font-bold mr-2">Updated Daily, Since deployed</p>
    <div className="flex">
     <div className="w-fit h-fit">
      <input
       placeholder="Topic Search"
       className="border-gray-300 border-2 focus:shadow-sm focus:outline-none focus:border-blue-600 px-3 py-2 transition-colors"
      />
     </div>
     <button className="text-white bg-blue-600 px-2 py-1 rounded ml-2 hover:bg-blue-700 transition-colors">
      Go
     </button>
    </div>
   </div>

   <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-start mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2 gap-5">
    <div className="flex flex-col gap-4 w-full sm:w-auto">
     <div>
      <div
       className={`${
        show ? "animate-slide-from-left" : ""
       } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
      >
       What's Up?
      </div>
      <div className="flex flex-row items-center gap-1 mt-1">
       <p>2416</p>
       <button className="text-blue-600 hover:text-blue-900">players</button>
       <p>playing</p>
      </div>
      <div className="flex flex-row items-center gap-1 mt-1">
       <button className="text-blue-600 hover:text-blue-900">
        Activity Feed
       </button>
      </div>
     </div>
     <div>
      <div
       className={`${
        show ? "animate-slide-from-left" : ""
       } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
      >
       All Travia Topics
      </div>
      <div className="flex flex-col items-start gap-1 mt-1">
       {Array.isArray(types) &&
        types.map((item, index) => (
         <button
          className="text-blue-600 hover:text-blue-900"
          key={index}
          onClick={() => {
           navigate(`/QuizPage/`, { state: item });
          }}
         >
          {truncateText(Object.values(item), 23)}
         </button>
        ))}
      </div>
     </div>
    </div>
    <div className="flex-1 w-full flex-col">
     <div>
      <div
       className={`${
        show ? "animate-slide-from-right" : ""
       } bg-blue-200 font-bold text-lg rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
      >
       Start Your Journey!
      </div>
      <div className="flex flex-row items-start gap-1 mt-1 flex-wrap">
       <p className="whitespace-nowrap text-lg">Adventure through the</p>
       <p className="whitespace-nowrap font-bold text-lg">
        Realms of Knowledge
       </p>
       <p className="whitespace-normal flex-grow text-lg">
        with - and against - thousands of other players from around the world!
        Answer questions, play games, join teams, and climb the ranks!
       </p>
       <p className="font-bold text-lg">FOR FREE!</p>
       <p className="text-lg"> Become a</p>
       <button className="text-blue-600 hover:text-blue-900 text-lg">
        {" "}
        Gold Member
       </button>
       <p className="text-lg">for an ad-free experience and tons of perks!</p>
      </div>
     </div>
     <div className="mt-4">
      <div
       className={`${
        show ? "animate-slide-from-right" : ""
       } bg-blue-200 font-bold text-lg rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
      >
       Popular Quizes
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-12">
       <Card
        text={"General Knowledge"}
        image={img1}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
       <Card
        text={"Science"}
        image={img2}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
       <Card
        text={"Sports"}
        image={img3}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
       <Card
        text={"Animals"}
        image={img4}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
       <Card
        text={"History"}
        image={img5}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
       <Card
        text={"Computers"}
        image={img6}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
       />
      </div>
     </div>
    </div>
   </div>

   <div className="flex flex-col h-fit bg-white rounded-md items-start mt-2 p-2">
    <div className="flex flex-grow sm:flex-row w-full justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4 gap-x-2">
     <button
      className="w-full sm:w-auto text-blue-600 hover:text-blue-900 text-md"
      onClick={() => {
       navigate("/About Us");
      }}
     >
      QuizMo-FAQ
     </button>

     <button
      className="w-full sm:w-auto text-blue-600 hover:text-blue-900 text-md"
      onClick={() => {
       navigate("/Contact");
      }}
     >
      Help / Contact Us
     </button>
     <button
      className="w-full sm:w-auto text-blue-600 hover:text-blue-900 text-md"
      onClick={() => {
       navigate("/About Us");
      }}
     >
      Conditions of use
     </button>
    </div>
    <div className="text-md flex flex-grow mt-2">
     Copyright 2024 QuizMo, Inc. All Rights Reserved.
    </div>
   </div>
  </div>
 );
}

export default Home;
