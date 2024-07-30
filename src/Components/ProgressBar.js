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
    <div className="w-full bg-slate-300 rounded-3xl">
      <div
        style={{
          width: current == 0 ? 30 : `${current}%`,
          backgroundColor: "green",
        }}
        className="flex justify-center items-center transition-all text-white text-center rounded-3xl py-3"
      >
        {current.toFixed(0)}%
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .progress-bar {
            width: ${current === 0 ? "20px" : `${current}%`};
          }
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
