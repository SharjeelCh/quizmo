import React, { useEffect, useState, Suspense, lazy } from "react";
import logo2 from "../assets/logo2.png";
import quizTypes from "../JSON/quizTypes.json";
import { truncateText } from "../Functions/HelperFuncs";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../useStore";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.webp";


const Card = lazy(() => import("../Components/Card"));

function Home() {
 const [types, setTypes] = useState([]);
 const [show, setShow] = useState(false);
 const navigate = useNavigate();
 const { user } = useStore();

 useEffect(() => {
  setShow(true);
  const fetchTypes = async () => {
   try {
    setTypes(quizTypes.quizTypes);
   } catch (error) {
    console.log(error);
   }
  };
  fetchTypes();
  const timer = setTimeout(() => setShow(false), 3000);
  return () => clearTimeout(timer);
 }, []);

 return (
  <div className="flex flex-col">
   {/* Authentication Section */}
   {user?.isLogged === false && (
    <div className="flex flex-col sm:flex-row h-fit bg-white rounded-md items-center mt-2 p-2">
     <p className="text-sm font-bold mr-2">Free!</p>
     <p className="text-sm mr-2">Click here to</p>
     <Link className="text-sm text-blue-600 hover:text-blue-900" to={"/Login"}>
      Join QuizMo
     </Link>
     <p className="text-sm">Thousands of games, quizzes, and lots more!</p>
    </div>
   )}

   {/* Header Section */}
   <div className="flex sm:flex-row h-fit gap-10 bg-gradient-to-t from-white to-blue-200 rounded-md items-center my-2 p-2">
    <img
     src={logo2}
     className="w-32 h-32 sm:w-32 md:w-36 lg:w-40"
     alt="QuizMo Logo"
     loading="lazy"
    />
    <div className={`${show ? "animate-slide-from-right" : ""} flex-wrap`}>
     <p className="text-app-bg font-bold text-3xl">
      The World's Greatest Trivia Game
     </p>
     {user?.isLogged ? (
      <div>
       <div className="text-pinkish font-semibold hover:text-pink-900">
        Hello
       </div>
       <div className="text-purple-950 font-semibold hover:text-purple-800">
        {user?.username}
       </div>
      </div>
     ) : (
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
     )}
    </div>
   </div>

   <div className="flex flex-wrap bg-white rounded-md items-center justify-center mt-2 p-2">
    <p
     className={`text-base font-bold mr-2 text-cyan-950 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     2.5 Million
    </p>
    <p
     className={`text-base font-bold mr-2 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     Questions
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     |
    </p>
    <p
     className={`text-base font-bold mr-2 text-red-700 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     16000
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     Quizzes
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     |
    </p>
    <p
     className={`text-base font-bold mr-2 text-orange-900 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     14000
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     Topics
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     |
    </p>
    <p
     className={`text-base font-bold mr-2 text-yellow-600 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     10000
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     Players
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     |
    </p>
    <p
     className={`text-base font-bold mr-2 text-blue-800 ${
      show ? "animate-slide-from-left" : ""
     }`}
    >
     40000
    </p>
    <p className={`text-base mr-2 ${show ? "animate-slide-from-left" : ""}`}>
     Unique Challenges
    </p>
   </div>

   <div className="flex flex-col sm:flex-row bg-white rounded-md items-center mt-2 p-2 justify-between">
    <p className="text-lg font-bold mr-2">Updated Daily, Since deployed</p>
    <div className="flex">
     <input
      placeholder="Topic Search"
      className="border-gray-300 border-2 focus:outline-none px-3 py-2 transition-colors"
     />
     <button className="text-white bg-blue-600 px-2 py-1 rounded ml-2 hover:bg-blue-700 transition-colors">
      Go
     </button>
    </div>
   </div>

   <div className="flex flex-col sm:flex-row bg-white rounded-md items-start mt-2 p-2 gap-5">
    <div className="flex flex-col gap-4 w-full sm:w-auto">
     <div>
      <div
       className={`${
        show ? "animate-slide-from-left" : ""
       } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md px-2 py-1`}
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
       } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md px-2 py-1`}
      >
       All Trivia Topics
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
        } bg-blue-200 font-bold text-lg rounded-t-md px-2 py-1`}
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
        <p className="text-lg">Click here to get started!</p>
       </div>
      </div>
      <Suspense fallback={<div>Loading Cards...</div>}>

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
      </Suspense>


     </div>
   </div>
  </div>
 );
}

export default Home;
