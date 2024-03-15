import React, { useEffect, useState } from "react";
import "./homepage1.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import FileData from "../../data.json";
export default function Homepage() {
  const name = FileData.users[0].name;
  const username = FileData.users[0].username;
  const stickyNotes = FileData.list;
  const [formData, setFormData] = useState({ header: "", content: "" });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const handleAdd = async () => {
    const finalHeader = formData.header;
    let finalContent = formData.content.split("\n"); // this is a list []
    const finalData = {
      username: username,
      data: { header: finalHeader, content: finalContent },
    };
    await fetch("http://localhost:8080/list", {
      method: "POST",
      body: JSON.stringify(finalData),
    })
      .then((response) => {
        alert("Note Successfully Added");
        setFormData({ header: "", content: "" });
      })
      .catch((err) => {
        console.log("Error : ", err);
        alert("Error Occurred !!");
      });
  };
  // console.log("formData", formData);
  useEffect(() => {
    setStart(0);
    setEnd(2);
  }, []);

  const handleLeftPage = () => {
    var length = stickyNotes.length;
    setStart((start + 3) % length);
    setEnd((end + 3) % length);
  };

  const handleRightPage = () => {
    var length = stickyNotes.length;
    setStart((start - 3 + length) % length);
    setEnd((end - 3 + length) % length);
  };
  return (
    <div className="main-class">
      <div className="first-div">
        <img src="/images/logo.png" alt="logo" />
        <div className="name-div">
          <i>{name}'s TO-DO LIST</i>
        </div>
      </div>
      <div className="second-div">
        <div className="left-div">
          <div className="top-section">
            <p>
              <span>
                <IoSearchSharp />
              </span>
              <span className="text-class">Search</span>
            </p>
            <p>
              <span>
                <FaCalendarAlt />
              </span>
              <span className="text-class">Calendar</span>
            </p>
            <p>
              <span>
                <HiOutlineTemplate />
              </span>
              <span className="text-class">Templates</span>
            </p>
            <p>
              <span>
                <CiImport />
              </span>
              <span className="text-class">Import</span>
            </p>
            <p>
              <span>
                <FaTrashAlt />
              </span>
              <span className="text-class">Trash</span>
            </p>
          </div>
          <div className="bottom-left-div">
            <p>About Us</p>
            <p>Help</p>
            <p>Contact Us</p>
            <p>Sign Out</p>
          </div>
        </div>
        <div className="right-div">
          <div className="top-part">
            <div className="child1">
              <div className="left-child">
                <input
                  type="text"
                  placeholder="Untitled"
                  value={formData.header}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      header: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="right-child">
                <button onClick={handleAdd}>ADD</button>
              </div>
            </div>
            <div className="child2">
              <textarea
                placeholder="Enter your task here..."
                value={formData.content}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }));
                }}
              ></textarea>
              <div className="pagination">
                <div className="left-page" onClick={handleLeftPage}>
                  <FaArrowAltCircleLeft />
                </div>
                <div className="right-page" onClick={handleRightPage}>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            {stickyNotes.slice(start, end + 1).map((item) => {
              return (
                <div className="child-1">
                  <div className="title">
                    <div className="main-title">
                      <h3>{item.data.header}</h3>
                    </div>
                    <div className="close">
                      <span
                        style={{
                          paddingLeft: "3%",
                          fontSize: "x-large",
                          cursor: "pointer",
                        }}
                      >
                        <IoMdClose />
                      </span>
                    </div>
                  </div>
                  <div className="content-bottom">
                    <ul>
                      {item.data.content.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
