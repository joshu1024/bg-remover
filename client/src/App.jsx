import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ByCredits from "./pages/ByCredits";
import Result from "./pages/Result";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bycredit" element={<ByCredits />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
