import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Navbar from "./components/layouts/Navbar";
import Contact from "./components/Contact";



function App() {
  
  <Navbar/>
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App
