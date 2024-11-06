import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Browse from "./components/Browse";
import View from "./components/View";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Browse />} />
        <Route path="/articles/:article_id" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
