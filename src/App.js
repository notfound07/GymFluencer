import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Join from "./components/Join";
import Faqs from "./components/Faqs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} /> 
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
};

export default App;
