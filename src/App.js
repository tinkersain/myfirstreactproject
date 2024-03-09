import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
