import React, { useState } from "react";
import ProgressBar from "../Components/ProgressBar";

export const QuizMulti = () => {
  const [Increase, setincrease] = useState(false);
  return (
    <div className="flex flex-col  items-center px-4 bg-white h-dvh">
      <ProgressBar totalQs={10} increase={Increase} setincrease={setincrease} />
      <button
        onClick={() => {
          setincrease(true);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increase
      </button>
    </div>
  );
};
