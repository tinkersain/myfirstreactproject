import React, { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";

// function Home(){

// }
const Home = () => {
  const [time, setTime] = useState("65");
  const [data, setData] = useState("Hi");
  const handleClick = () => {
    if (data === "Hi") setData("Hello");
    else setData("Hi");
  };
  useEffect(() => {
    setTimeout(() => {
      if (time === 0) setTime(65);
      else setTime(time - 1);
    }, 1000);
  }, []);
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
        <button onClick={handleClick}>{time}</button>
        <p>{data}</p>
      </header>
    </div>
  );
};

export default Home;
