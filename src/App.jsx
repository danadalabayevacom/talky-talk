import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordIsMatchingPage from "./pages/WordIsMatchingPage";
import GenderPage from "./pages/GenderPage";
import About from "./pages/About";
import NavBar from "./shared/NavBar";
import { days, months, numbers } from "./data";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(Number(localStorage.getItem("score")));//получить

  const mySetScore = () => {
    localStorage.setItem("score", score + 10);//дать/записать
    setScore((prev) => prev + 10);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <WordIsMatchingPage
                key="days"
                words={days}
                title="Days of the Week"
                placeholder="Enter day in Spanish"
                score={score}
                setScore={mySetScore}
              />
            }
          />
          <Route
            path="/months"
            element={
              <WordIsMatchingPage
                key="months"
                words={months}
                title="Months"
                placeholder="Enter month in Spanish"
                score={score}
                setScore={mySetScore}
              />
            }
          />
          <Route
            path="/numbers"
            element={
              <WordIsMatchingPage
                key="numbers"
                words={numbers}
                title="Numbers"
                placeholder="Enter number in Spanish"
                score={score}
                setScore={mySetScore}
              />
            }
          />
          <Route
            path="/gender"
            element={<GenderPage score={score} setScore={mySetScore} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
