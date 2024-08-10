import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Departments from "./pages/Departments";
import Alumni from "./pages/Alumni";

function App() {

  return (
    <div className=" w-full min-h-screen "> 
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/departments" element={<Departments />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/alumni" element={<Alumni />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
