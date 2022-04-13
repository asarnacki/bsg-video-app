import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <HomeScreen />
    </div>
  );
}

export default App;
