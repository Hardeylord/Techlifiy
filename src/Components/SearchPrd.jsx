import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

export const SearchPrd = () => {
  const [input, setInput] = useState("");
  const [Gotresults, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((respJson) => {
        const results = respJson.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
        <div className="flex items-center">
          <input
            className="bg-white pl-2 p-1 outline-none rounded-l-full"
            type="text"
            placeholder="search..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              fetchData(e.target.value);
            }}
            name=""
            id=""
          />
          <div className="p-1 rounded-r-full bg-white">
            <Search className="bg-black rounded-full p-1" stroke="white" />
          </div>
        </div>
        {/* result */}
        <div className="text-black p-3 rounded-xl mt-2  bg-white overflow-y-scroll">
          {Gotresults.map((gresult, index) => (
            <p key={index}>{gresult.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};
