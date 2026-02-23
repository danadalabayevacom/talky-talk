import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MotionButton from "../components/MotionButton.jsx";
import clsx from "clsx";
import ScoreCounter from "../components/ScoreCounter.jsx";
import { wordsWithGender as words3 } from ".././data.js";
import WordList from "./WordList.jsx";
import ToggleFavorite from "../components/ToggleFavorite.jsx";

function GenderPage({ score, setScore }) {
  const [sourceList, setSourceList] = useState("word");

  const [favorite, setFavorite] = useState(() => {
    const starword = localStorage.getItem("word");
    if (starword) {
      return starword.split(",");
    } else {
      return [];
    }
  });

  const words =
    sourceList === "word"
      ? words3
      : words3.filter((it) => favorite.includes(it.word));

  const [index, setIndex] = useState(getRandomIdx(words));

  const [answer, setAnswer] = useState(null);

  console.log("problema:", index);

  useEffect(() => {
    setIndex(getRandomIdx(words));
  }, [words]);

  const renderGameControls = () => {
    return (
      <>
        <div className="text-center mt-4">{getMessage(answer)}</div>

        <div className="flex flex-col justify-center mt-6 gap-3">
          <div className="flex">
            <MotionButton
              className={clsx(
                "flex-1 text-white rounded-lg py-2 px-4 border-2 border-pink-400",
                isUserAnswered ? "bg-pink-400" : "bg-pink-500"
              )}
              onClick={() => onClick("el")}
              disabled={isUserAnswered}
            >
              el
            </MotionButton>
            <MotionButton
              className={clsx(
                "flex-1 text-white rounded-lg py-2 px-4 border-2 border-violet-400",
                isUserAnswered ? "bg-violet-400" : "bg-violet-500"
              )}
              onClick={() => onClick("la")}
              disabled={isUserAnswered}
            >
              la
            </MotionButton>
          </div>
          <MotionButton
            className="flex-1 text-white bg-sky-500 rounded-lg py-2 px-4 border-2 border-sky-700"
            onClick={onClickNext}
          >
            Next
          </MotionButton>
        </div>
      </>
    );
  };

  const onClickNext = () => {
    setIndex(getRandomIdx(words));
    setAnswer(null);
  };

  const onClick = (gender) => {
    const expected = words[index].gender;
    if (expected === gender) {
      setAnswer(true);
      setScore();
    } else {
      setAnswer(false);
    }
  };
  const getMessage = (answer) => {
    if (answer === null) {
      return <div className="text-sky-500">Waiting for your answer…</div>;
    }
    if (answer === true) {
      return <div className="text-blue-600 font-semibold">Correct ✅</div>;
    }
    return (
      <div className="text-red-400">
        The expected answer is: <b>{words[index].gender}</b>
      </div>
    );
  };

  let isUserAnswered;

  if (answer === true || answer === false) {
    isUserAnswered = true;
  } else {
    isUserAnswered = false;
  }

  const word = words[index]?.word ?? "";

  console.log(sourceList);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-between w-full max-w-md p-6">
        <h1 className="text-3xl text-center font-semibold tracking-tight mt-16 text-blue-700">
          Gender Page
        </h1>

        <div className="flex flex-col mt-10">
          <div className="text-center text-2xl font-medium text-blue-600">
            <select
              id="word-select"
              value={sourceList}
              onChange={(e) => setSourceList(e.target.value)}
            >
              <option value="word">All Words</option>
              <option value="favorite">Favorite Words</option>
            </select>
            <div className="mr-2 mt-2">

              {word}
              <ToggleFavorite
                favorite={favorite}
                word={word}
                setFavorite={setFavorite}
              />
            </div>
          </div>
          {favorite.length === 0 && sourceList === "favorite" ? <div className="text-xl text-rose-400 text-center">You may choose your favorite words...
          </div> : renderGameControls()}
        </div>
        <div className="absolute top-30 right-20 text-blue-500 text-3xl font-bold">
          <ScoreCounter score={score} />
        </div>
      </div>
    </div>
  );
}

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default GenderPage;
