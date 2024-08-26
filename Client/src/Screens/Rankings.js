import React from "react";
import { GiBurn, GiBurningMeteor } from "react-icons/gi";
const Rankings = () => {
 return (
  <div className="flex flex-col items-center justify-center">
   <p className="text-white font-serif text-3xl italic m-10">Rankings</p>
   <section className="flex sm:flex md:flex lg:flex xl:flex flex-row items-end gap-5">
    <div>
     <p className="text-white text-center text-sm italic">Jennie</p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className=" mb-1" />
      <p className="text-white text-xs mb-1">2.6k</p>
     </section>
     <div className="max-w-20 w-20 h-12 bg-slate-400 justify-center items-center flex text-white rounded-t-lg font-bold hover:scale-x-110 transform transition-transform duration-300 ease-in-out ">
      2
     </div>
    </div>
    <div>
     <p className="text-white text-center text-sm italic">Alice</p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className=" mb-1" />
      <p className="text-white text-xs mb-1">3.5k</p>
     </section>
     <div className="max-w-20 w-20 h-16 bg-red-400 justify-center items-center flex text-white rounded-t-lg font-bold  hover:scale-x-110 transform transition-transform duration-300 ease-in-out ">
      1
     </div>
    </div>
    <div>
     <p className="text-white text-center text-sm italic">Vinxen</p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className=" mb-1" />
      <p className="text-white text-xs mb-1">1.7kk</p>
     </section>
     <div className="max-w-20 w-20 h-8 bg-green-400 justify-center items-center flex text-white rounded-t-lg font-bold  hover:scale-x-110 transform transition-transform duration-300 ease-in-out ">
      3
     </div>
    </div>
   </section>
   <div className="flex w-full h-lvh flex-col bg-white rounded-t-3xl py-3 gap-1 ">
    <section className="flex flex-row items-center justify-between w-full h-fit p-3 overflow-hidden rounded-lg hover:bg-slate-200 cursor-pointer transition-all ease-out">
     <div className="flex items-center gap-2">
      <p className="text-sm font-semibold">4</p>
      <p className=" text-md italic font-bold text-app-bg">Zack</p>
     </div>
     <section className="flex items-center justify-center gap-1">
      <GiBurningMeteor size={16} className=" mb-1 text-app-bg" />
      <p className="text-xs mb-1 text-app-bg">1.1k</p>
     </section>
    </section>
   </div>
  </div>
 );
};

export default Rankings;
