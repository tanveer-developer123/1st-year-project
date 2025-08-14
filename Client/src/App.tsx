import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Tanveer from "./pages/Tanveer";
import Maroof from "./pages/Maroof";
import Analysis from "./pages/Analysis"
import Concept from "./components/Concept"
import About from "./pages/About";
import Chatbot from "./pages/Chatbot";

function App() {
  const location = useLocation();

  // Check if current path is chatbot-ai
  const hideLayout = location.pathname === "/chatbot-ai";

  return (
    <>
      {!hideLayout && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="tanveer" element={<Tanveer />} />
         <Route path="/concept/:id" element={<Concept />} />
        <Route path="maroof" element={<Maroof />} />
        <Route path="about" element={<About />} />
        <Route path="chatbot-ai" element={<Chatbot />} />
        <Route path="data-analysis" element={<Analysis />} />
        
        <Route path="*" element={<Notfound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
