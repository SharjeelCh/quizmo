import React from "react";
import { truncateText } from "../Functions/HelperFuncs";
function Card({ text, image }) {
  return (
    <div className="flex flex-col rounded-md w-fit mt-3 border-2">
      <button>
        <img
          src={image}
          className="w-32 h-32 hover:opacity-80 transition-all rounded-t-md object-cover"
          
        />
      </button>
      <button className="flex justify-center  items-center py-1 text-blue-800 hover:text-blue-600 font-bold bg-lime-200 hover:bg-lime-300 transition-all rounded-b-md">
        {truncateText(text,12)}
      </button>
    </div>
  );
}

export default Card;
