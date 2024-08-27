import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alumni from "./pages/Alumni";
import { useState } from "react";

const App = () => {
  const [renderFirst, setRenderFirst] = useState(false);
  const [renderSecond, setRenderSecond] = useState(false);
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/projects" || location.pathname === "/events";

  return (
    <div className="w-full min-h-screen">
      
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <Events renderFirst={renderFirst} renderSecond={renderSecond} />
          }
        />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
