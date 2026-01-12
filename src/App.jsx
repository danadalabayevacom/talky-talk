import React from "react";
import { useState } from "react";
import { days, daysEs } from "./dayOfWeeks.js";

function App() {
  const [index, setIndex] = useState(getRandomIdx(days));
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log("text:", e.target.value);
    setUserInput(e.target.value);
  };


  const onClick = () => {
    const firstvalue = daysEs[index];
    const secondvalue = userInput.trim();
    const thirdvalue = secondvalue.toLowerCase();

    if (firstvalue === thirdvalue) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  console.log("render");
  return (
    <>
      <div className="flex justify-center min-h-screen  bg-slate-50">
        <div className="flex flex-col justify-between">
          <div className="text-3xl text-center text-bold">Days of Week</div>
          <div className="flex flex-col ">
            <div className="text-center text-xl">
              {days[index]}
              {/* Это первое значение */}
            </div>
            <input
              className="w-100 mt-4 p-3 text-center border border-gray-300 text-gray-900 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              type="text"
              value={userInput}
              // это второе значение
              onChange={handleChange}
              placeholder="enter day of the week in spanish"
            />
            <div className="flex justify-center">
              <button
                className="mt-4 bg-sky-500 hover:bg-sky-700  rounded-lg py-2 px-4"
                onClick={onClick}
              >
                check
              </button>
            </div>
          </div>
          <div className="border border-blue-500"></div>
        </div>
      </div>
    </>
  );
}

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default App;
