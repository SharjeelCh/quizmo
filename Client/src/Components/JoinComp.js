import React from "react";

function JoinComp() {
  return (
    <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
      <p className="text-sm sm:text-sm md:text-base lg:text-sm font-bold mr-2">
        Free!
      </p>
      <p className="text-sm sm:text-sm md:text-base lg:text-sm mr-2">
        Click here to
      </p>
      <button
        className="text-sm sm:text-sm md:text-base lg:text-sm mr-2 text-blue-600 hover:text-blue-900"
      >
        Join QuizMo
      </button>
      <p className="text-sm sm:text-sm md:text-base lg:text-sm">
        Thousands of games, quizzes, and lots more!
      </p>
    </div>
  );
}

export default JoinComp;
