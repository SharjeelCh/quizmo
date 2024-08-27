import React, { useEffect, useState } from "react";
import { GiBurningMeteor } from "react-icons/gi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useStore from "../useStore";
import { Spin } from "antd";
import { styles } from "../Styles/loader";
import { truncateText } from "../Functions/HelperFuncs";

const Rankings = () => {
 const [totalRanking, setTotalRanking] = useState([]);
 const [firstRanking, setFirstRanking] = useState([]);
 const [secondRanking, setSecondRanking] = useState([]);
 const [thirdRanking, setThirdRanking] = useState([]);
 const [restRanking, setRestRanking] = useState([]);
 const [userRanking, setUserRanking] = useState({});
 const [loading, setLoading] = useState(true);
 const { user } = useStore();

 const mutation = useMutation({
  mutationFn: () => axios.get(`http://localhost:5002/api/users/rank`),
  onSuccess: (data) => {
   const rankings = data.data;
   setTotalRanking(rankings);
   setFirstRanking(rankings[0] || {});
   setSecondRanking(rankings[1] || {});
   setThirdRanking(rankings[2] || {});
   setUserRanking(
    rankings.find((item) => item.username === user.username) || {}
   );
   setRestRanking(
    rankings.filter(
     (item, index) => index > 2 && item.username !== user.username
    )
   );
   setLoading(false);
  },
 });

 useEffect(() => {
  mutation.mutate();
 }, []);

 return (
  <div className="flex flex-col items-center justify-center">
   {loading && <Spin size="large" style={styles.spinContainer} />}
   <p className="text-white font-serif text-3xl italic m-10">Rankings</p>
   <section className="flex sm:flex md:flex lg:flex xl:flex flex-row items-end gap-5">
    <div>
     <p className="text-white text-center text-sm italic">
      {truncateText(secondRanking.username, 10)}
     </p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className="mb-1" />
      <p className="text-white text-xs mb-1">{secondRanking.totalScore}</p>
     </section>
     <div className="max-w-20 w-20 h-12 bg-slate-400 justify-center items-center flex text-white rounded-t-lg font-bold hover:scale-x-110 transform transition-transform duration-300 ease-in-out">
      2
     </div>
    </div>
    <div>
     <p className="text-white text-center text-sm italic">
      {truncateText(firstRanking.username, 10)}
     </p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className="mb-1" />
      <p className="text-white text-xs mb-1">{firstRanking.totalScore}</p>
     </section>
     <div className="max-w-20 w-20 h-16 bg-red-400 justify-center items-center flex text-white rounded-t-lg font-bold hover:scale-x-110 transform transition-transform duration-300 ease-in-out">
      1
     </div>
    </div>
    <div>
     <p className="text-white text-center text-sm italic">
      {truncateText(thirdRanking.username, 10)}
     </p>
     <section className="flex flex-grow items-center justify-center gap-1">
      <GiBurningMeteor size={16} color="white" className="mb-1" />
      <p className="text-white text-xs mb-1">{thirdRanking.totalScore}</p>
     </section>
     <div className="max-w-20 w-20 h-8 bg-green-400 justify-center items-center flex text-white rounded-t-lg font-bold hover:scale-x-110 transform transition-transform duration-300 ease-in-out">
      3
     </div>
    </div>
   </section>
   <div className="flex flex-col w-full max-w-7xl h-[calc(100vh-150px)] overflow-y-auto bg-white rounded-t-3xl py-3 gap-1">
    {restRanking.map((item, index) => (
     <section
      key={index}
      className="flex flex-row items-center justify-between w-full h-fit p-3 overflow-hidden rounded-lg hover:bg-slate-200 cursor-pointer transition-all ease-out"
     >
      <div className="flex items-center gap-2">
       <p className="text-sm font-semibold">{index + 4}</p>
       <p className="text-md italic font-bold text-app-bg">
        {truncateText(item.username, 15)}
       </p>
      </div>
      <section className="flex items-center justify-center gap-1">
       <GiBurningMeteor size={16} className="mb-1 text-app-bg" />
       <p className="text-xs mb-1 text-app-bg">{item.totalScore}</p>
      </section>
     </section>
    ))}
   </div>

   {userRanking.username && (
    <div className="fixed bottom-0 w-full max-w-7xl bg-yellow-400 p-3 rounded-t-xl">
     <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
       <p className="text-sm font-semibold">{userRanking.rank}</p>
       <p className="text-md italic font-bold text-black">You</p>
      </div>
      <section className="flex items-center justify-center gap-1">
       <GiBurningMeteor size={16} className="mb-1 text-black" />
       <p className="text-xs mb-1 text-black">{userRanking.totalScore}</p>
      </section>
     </div>
    </div>
   )}
  </div>
 );
};

export default Rankings;
