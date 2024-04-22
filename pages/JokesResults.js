import Joke from "./Joke";
import React, { useState, useEffect } from "react";

function JokesResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/list");
        if (!response.ok) {
          throw new Error("Erreur de réseau");
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const joke = results.map((data, index) => {
    const bgColor = index % 2 === 0 ? "bg-[#E9E9E9]" : "";
    return (
      <Joke
        hey={index}
        value={data.value}
        date={data.date}
        background={bgColor}
      />
    );
  });
  return (
    <div className="table w-10/12">
      <p className="title font-jomhuria text-4xl text-[#35505D]">
        "Mes" blagues
      </p>
      <div className=" border-red-500 border-4 rounded-xl h-96 overflow-auto">
        {joke}
      </div>
    </div>
  );
}

export default JokesResults;
