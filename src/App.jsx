import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordIsMatchingPage from "./pages/WordIsMatchingPage";
import GenderPage from "./pages/GenderPage";
import About from "./pages/About";
import NavBar from "./shared/NavBar";
import { days, months } from "./data";

function App() {
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
              />
            }
          />
          <Route
            path="/months"
            element={
              <WordIsMatchingPage
                key="months"
                words={months}
                title="month"
                placeholder="Enter month in Spanish"
              />
            }
          />
          <Route path="/gender" element={<GenderPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
