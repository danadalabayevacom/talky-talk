import { BrowserRouter, Routes, Route} from "react-router-dom";
import DayOfWeeksPage from "./pages/DayOfWeeksPage";
import Month from "./pages/Month";
import GenderPage from "./pages/GenderPage";
import About from "./pages/About";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
    <>
      <Routes>
        <Route path="/" element={<DayOfWeeksPage />} />
        <Route path="/month" element={<Month />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
