import React from "react";
import { useState } from "react";
import { days, daysEs } from "./dayOfWeeks.js";
import { motion } from "framer-motion";

function App() {
  const [index, setIndex] = useState(getRandomIdx(days));
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState(null); // todo rename
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    console.log("text:", e.target.value);
    setUserInput(e.target.value);
  };

  const onClickCheck = () => {
    const firstvalue = daysEs[index];
    const secondvalue = userInput.trim();
    const thirdvalue = secondvalue.toLowerCase();

    if (firstvalue === thirdvalue) {
      setAnswer(true);
      setCount(count + 1); // todo use current state
    } else {
      setAnswer(false);
    }
  };

  const onClcikNext = () => {
    setIndex(getRandomIdx(days));
    setUserInput("");
    setAnswer(null);
  };

  const getMessage = (answer) => {
    let message = null;
    if (answer === null) {
      message = <div>waiting your answer..</div>;
    } else if (answer === true) {
      message = <div className="text-green-500">Correct</div>;
    } else {
      message = (
        <div className="text-red-400">
          "The expected answer is: {daysEs[index]}"
        </div>
      );
    }
    return message;
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl text-center text-semibold tracking-tight mt-20 text-indigo-700">
            Days of Week
          </h1>
          <div className="flex flex-col ">
            <div className="text-center text-xl text-indigo-600">
              {days[index]}
              {/* Это первое значение */}
            </div>
            <input
              className="w-100 mt-4 p-3 text-xl text-center border border-gray-300 text-gray-900 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              type="text"
              value={userInput}
              // это второе значение
              onChange={handleChange}
              placeholder="enter day of the week in spanish"
            />
            <div className="text-center">{getMessage(answer)}</div>
            <div className="flex justify-center mt-4 gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  answer === true
                    ? { backgroundColor: "#22c55e" } // green
                    : answer === false
                    ? { backgroundColor: "#ef4444" } // red
                    : {}
                }
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1 text-white bg-sky-500 rounded-lg py-2 px-4 border-2 border-sky-700"
                onClick={onClickCheck}
                // todo add clcik action add border
              >
                check
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95}}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1 text-white bg-pink-400 ml-2 rounded-lg py-2 px-4 border-2 border-pink-700"
                onClick={onClcikNext}
              >
                next
              </motion.button>
            </div>
          </div>
          <div></div>
          <div className="absolute top-20 right-40 text-violet-400 text-3xl">
            {count}
          </div>
        </div>
      </div>
    </>
  );
}

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default App;
