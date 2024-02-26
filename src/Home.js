import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";

// function Home(){

// }
const Home = () => {
  const [data, setData] = useState("Hi");
  const handleClick = () => {
    if (data === "Hi") setData("Hello");
    else setData("Hi");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Change Data</button>
        <p>{data}</p>
      </header>
    </div>
  );
};

export default Home;
