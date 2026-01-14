import React, { useState } from "react";
import { days, daysEs } from "./dayOfWeeks.js";
import { motion } from "framer-motion";

function App() {
  const [index, setIndex] = useState(getRandomIdx(days));
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState(null);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const onClickCheck = () => {
    const expected = daysEs[index];
    const userValue = userInput.trim().toLowerCase();

    if (expected === userValue) {
      setAnswer(true);
      setCount((prev) => prev + 1);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setIndex(getRandomIdx(days));
    setUserInput("");
    setAnswer(null);
  };

  const getMessage = (answer) => {
    if (answer === null) {
      return <div className="text-sky-500">Waiting for your answer…</div>;
    }
    if (answer === true) {
      return <div className="text-blue-600 font-semibold">Correct ✅</div>;
    }
    return (
      <div className="text-blue-400">
        The expected answer is: <b>{daysEs[index]}</b>
      </div>
    );
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="flex flex-col justify-between w-full max-w-md p-6">
        <h1 className="text-3xl text-center font-semibold tracking-tight mt-16 text-blue-700">
          Days of the Week
        </h1>

        <div className="flex flex-col mt-10">
          <div className="text-center text-2xl font-medium text-blue-600">
            {days[index]}
          </div>

          <input
            className="mt-6 p-3 text-xl text-center border border-blue-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition bg-white"
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter day in Spanish"
          />

          <div className="text-center mt-4">
            {getMessage(answer)}
          </div>

          <div className="flex justify-center mt-6 gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                answer === true
                  ? { backgroundColor: "#2563eb" } // blue-600
                  : answer === false
                  ? { backgroundColor: "#60a5fa" } // blue-400
                  : {}
              }
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 text-white bg-blue-500 rounded-lg py-2 px-4 border-2 border-blue-700"
              onClick={onClickCheck}
            >
              Check
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 text-white bg-sky-500 rounded-lg py-2 px-4 border-2 border-sky-700"
              onClick={onClickNext}
            >
              Next
            </motion.button>
          </div>
        </div>

        <div className="absolute top-20 right-40 text-blue-500 text-3xl font-bold">
          {count}
        </div>
      </div>
    </div>
  );
}

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default App;