import React from "react";
import { useState } from "react";
import { days } from "./dayOfWeeks.js";

function App() {
  const [index, setIndex] = useState(getRandomIdx(days));
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log("text:", e.target.value);
    setUserInput(e.target.value);
  };

  const onClick = () => {
    const firstvalue = days[index];
    const secondvalue = userInput;
    if (firstvalue === secondvalue) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  console.log("render");
  return (
    <>
      <div className="flex justify-center min-h-screen border border-red-400">
        <div className="flex flex-col justify-between border border-red-400">
          <div className=" border-2 border-yellow-600">Days of Week</div>
          <div className="flex flex-col border border-red-400">
            <div className="border border-red-400 text-center text-xl">
              {days[index]}
              {/* Это первое значение */}
            </div>
            <input
              className="w-100 mt-4 text-red-400 border-2 rounded-lg border-emerald-800"
              type="text"
              value={userInput}
              // это второе значение
              onChange={handleChange}
              placeholder="введите текст"
            />
            <div className="flex justify-center">
              <button
                className="mt-4 border-2 border-blue-500 shadow-blue-400 rounded-lg py-2 px-4"
                onClick={onClick}
              >
                check
              </button>
            </div>
          </div>
          <div className="border border-blue-500">3</div>
        </div>
      </div>
    </>
  );
}

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default App;
