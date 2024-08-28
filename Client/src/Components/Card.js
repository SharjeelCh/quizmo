import React, { memo } from "react";
import { truncateText } from "../Functions/HelperFuncs";
import { useNavigate } from "react-router-dom";

const Card = memo(({ text, image }) => {
 const navigate = useNavigate();

 const memoizedText = React.useMemo(() => text, [text]);
 const memoizedImage = React.useMemo(() => image, [image]);

 return (
  <div className="flex flex-col rounded-md w-fit mt-3 border-2">
   <button
    onClick={() => navigate("/QuizPage", { state: memoizedText })}
   >
    <img
     src={memoizedImage}
     className="w-32 h-32 hover:opacity-95 transition-all rounded-t-md object-cover hover:transition-transform hover:scale-105"
     loading="lazy"
     alt={memoizedText}
    />
   </button>
   <button className="flex justify-center items-center py-1 text-blue-800 hover:text-blue-600 font-bold bg-lime-200 hover:bg-lime-300 transition-all rounded-b-md">
    {truncateText(memoizedText, 12)}
   </button>
  </div>
 );
});

export default Card;
