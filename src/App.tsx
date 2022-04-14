import React from "react";
import "./App.css";
import  HomeScreen  from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/test";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="homescreen" element={<HomeScreen />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
