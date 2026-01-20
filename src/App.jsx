import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordIsMatchingPage from "./pages/WordIsMatchingPage";
import Month from "./pages/Month";
import GenderPage from "./pages/GenderPage";
import About from "./pages/About";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <BrowserRouter>
       
        <NavBar />

          <Routes>
            <Route path="/" element={<WordIsMatchingPage />} />
            <Route path="/month" element={<Month />} />
            <Route path="/gender" element={<GenderPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
