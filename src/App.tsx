import React from "react";
import "./App.css";
import  HomeScreen  from "./components/HomeScreen";
import Splash from "./components/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Login";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
