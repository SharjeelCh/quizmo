import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import quizTypes from "../JSON/quizTypes.json";
import serviceTypes from "../JSON/serviceTypes.json";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

function Tabbar() {
  const [showQuizzesMenu, setShowQuizzesMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [types, setTypes] = useState();
  const navigate = useNavigate();
  const [Services, setservices] = useState();
  const [show,setshow]=useState(false);
  const handleQuizzesEnter = () => {
    setShowQuizzesMenu(true);
  };

  const handleQuizzesLeave = () => {
    setShowQuizzesMenu(false);
  };

  const handleServicesEnter = () => {
    setShowServicesMenu(true);
  };

  const handleServicesLeave = () => {
    setShowServicesMenu(false);
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setTypes(quizTypes.quizTypes);
        setservices(serviceTypes.serviceTypes);
        console.log("types: ", types);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, []);

  return (
    <div className="z-10 bg-gradient-to-r from-blue-500 rounded-b-lg to-blue-700 flex flex-col flex-grow sm:flex-row py-3 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-row gap-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8">
        <Link
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl justify-evenly items-center flex flex-row gap-3"
          to={"/"}
        >
          <img src={logo} className="w-7 h-7" />
          QuizMo
        </Link>
        <div
          className="relative"
          onMouseEnter={handleQuizzesEnter}
          onMouseLeave={handleQuizzesLeave}
        >
          <button className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-row items-center gap-0.5 sm:gap-0.5 md:gap-1 lg:gap-2 transition-colors">
            <p className=" hover:text-blue-200 text-center">Quizzes</p>
            {showQuizzesMenu ? (
              <IoIosArrowUp size={15} />
            ) : (
              <IoIosArrowDown size={15} />
            )}
          </button>
          {showQuizzesMenu && (
            <div
              className="absolute bg-white mt-0 py-2 px-4 rounded shadow-lg w-fit sm:w-80 md:w-85 lg:w-90 flex flex-row flex-wrap"
              onMouseEnter={handleQuizzesEnter}
              onMouseLeave={handleQuizzesLeave}
            >
              {Array.isArray(types) &&
                types.map((item, index) => (
                  <button
                    key={index}
                    className="text-gray-800 text-sm hover:bg-gray-300 transition-colors px-2 py-1 rounded"
                    onClick={() => {
                      navigate(`/QuizPage/`, { state: item });
                    }}
                  >
                    {Object.values(item)}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <button className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-row items-center gap-0.5 sm:gap-0.5 md:gap-1 lg:gap-2 transition-colors">
            <p className=" hover:text-blue-200">Services</p>
            {showServicesMenu ? (
              <IoIosArrowUp size={15} />
            ) : (
              <IoIosArrowDown size={15} />
            )}
          </button>
          {showServicesMenu && (
            <div
              className="absolute bg-white mt-0 py-2 px-4 rounded shadow-lg w-fit sm:w-52 md:w-60 lg:w-64 flex flex-row flex-wrap"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              {Array.isArray(Services) &&
                Services.map((item, index) => (
                  <button
                    className="text-gray-800 text-sm hover:bg-gray-300 transition-colors px-2 py-1 rounded"
                    key={index}
                  >
                    {Object.values(item)}
                  </button>
                ))}
            </div>
          )}
        </div>
        <button className="text-white text-sm mr-2 sm:text-base md:text-lg lg:text-xl hover:border-b-2 hover:border-white border-b-2 border-transparent transition-all hover:text-blue-200">
          Contact
        </button>
      </div>
      <div className="flex flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        <Link
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-blue-200"
          to={"/Login"}
        >
          Login
        </Link>
        <Link
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-blue-200"
          to={"/Signup"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Tabbar;
