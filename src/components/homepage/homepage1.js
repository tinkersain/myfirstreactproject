import React, { useState } from "react";
import "./homepage.css";

const Homepage22 = () => {
  const [arr, setarr] = useState([]);
  const [value, setvalue] = useState("");
  console.log(arr);
  const handleAddClick = () => {
    setarr((prev) => [...prev, value]);
  };
  const handleDeleteClick = (index) => {
    const newItems = [...arr];
    newItems.splice(index, 1);
    setarr(newItems);
  };

  return (
    <div>
      <h1 className="header">To-Do List</h1>
      <div className="main1">
        <div>
          {arr.map((item) => {
            return (
              <>
                <p>{item}</p>
                <button onClick={() => handleDeleteClick(arr.indexOf(item))}>
                  {" "}
                </button>
              </>
            );
          })}
        </div>
        <div className="inputdiv">
          <div>
            <input
              type="text"
              className="taskInput"
              placeholder="Enter task here..."
              onChange={(e) => {
                setvalue(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="addbtn" onClick={handleAddClick}>
              Add
            </button>
            <button className="dltbtn" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage22;
