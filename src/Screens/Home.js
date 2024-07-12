import React from "react";
import logo from "../assets/logo.webp";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
        <p className="text-xs sm:text-xs md:text-base lg:text-sm font-bold mr-2">
          Free!
        </p>
        <p className="text-sm sm:text-sm md:text-base lg:text-sm mr-2">
          Click here to
        </p>
        <button className="text-sm sm:text-sm md:text-base lg:text-sm mr-2 text-blue-600">
          Join QuizMo
        </button>
        <p className="text-sm sm:text-sm md:text-base lg:text-sm">
          Thousands of games, quizzes, and lots more!
        </p>
      </div>

      <div className="flex sm:flex-row h-fit gap-3 bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center my-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
        <img
          src={logo}
          className="w-32 h-32 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40"
        />
        <div className="flex-wrap">
          <p className="text-app-bg font-bold text-3xl">
            The World's Greatest Trivia Game
          </p>
          <div>
            <button className="text-pinkish font-semibold">New One</button>
            <p>or</p>
            <button className="text-purple-950 font-semibold">Login</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center justify-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-cyan-950">
          2.5 Million
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2">
          Questions
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md mr-2">|</p>
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-red-700">
          160000
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md-sm mr-2">
          Quizes
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md mr-2">|</p>
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-orange-900">
          14000
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md  mr-2">
          Topics
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md mr-2">|</p>
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-yellow-600">
          100000
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md  mr-2">
          Players
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md mr-2">|</p>
        <p className="text-base sm:text-base md:text-base lg:text-md font-bold mr-2 text-blue-800">
          400
        </p>
        <p className="text-base sm:text-base md:text-base lg:text-md mr-2">
          Uniques Challenges
        </p>
      </div>

      <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2 justify-between">
        <p className="text-lg font-bold mr-2">Updated Daily, Since deployed</p>
        <div className="flex">
          <div className="border-2 border-black w-fit h-fit">
            <input placeholder="Topic Search" className="px-1" />
          </div>
          <button className="text-white bg-blue-600 px-2 py-1 rounded ml-2 hover:bg-blue-700 transition-colors">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
