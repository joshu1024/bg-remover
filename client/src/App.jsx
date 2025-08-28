import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ByCredits from "./pages/ByCredits";
import CompletePayment from "./pages/CompletePayment";
import CancelPayment from "./pages/CancelPayment";
import Result from "./pages/Result";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className="bg-slate-50 min-h-screen">
      <ToastContainer position="bottom-right" />
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<ByCredits />} />
        <Route path="/result" element={<Result />} />
        <Route path="/complete-payment" element={<CompletePayment />} />
        <Route path="/cancel-payment" element={<CancelPayment />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
