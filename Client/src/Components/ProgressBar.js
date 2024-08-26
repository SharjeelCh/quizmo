import React, { useEffect, useState } from "react";

function ProgressBar({ totalQs, increase, setincrease }) {
 const [current, setCurrent] = useState(0);

 const increment = (prev) => {
  if (current < 100) {
   setCurrent((prev) => prev + 100 / totalQs);
  }
 };

 useEffect(() => {
  if (increase == true) {
   increment(current);
   setincrease(false);
  }
 }, [increase]);

 return (
  <div className="flex items-center w-full bg-slate-400 rounded-3xl">
   <div
    style={{
     width: `${current}%`,
    }}
    className="flex justify-center bg-gradient-to-r from-orange-600 to-purple-700 items-center transition-all text-white text-center rounded-3xl py-6"
   ></div>
   <p className="fixed left-1/2 right-1/2 text-white font-bold font-mono">
    {" "}
    {current.toFixed(0)}%
   </p>

   <style jsx>{`
    @media (max-width: 640px) {
     .progress-bar {
      width: ${`${current}%`};
     }
    }
   `}</style>
  </div>
 );
}

export default ProgressBar;
