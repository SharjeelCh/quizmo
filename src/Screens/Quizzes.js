import { useEffect, useState } from "react";
import { fetchdata } from "../Functions/Fetch";

export default function Quizzes() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchdata();
      if (result) {
        setData(result.results);
      } else {
        setError("Failed to fetch data");
      }
    };

    getData();
  }, []);
  return (
    <h1 className="font-bold underline">
       {data.map((item, index) => (
        <div key={index} className="mb-4 p-4 border">
        <p className="text-black">{item.question}</p>
        </div>
       ))}
    </h1>
  );
}
