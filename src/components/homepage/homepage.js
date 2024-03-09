import React from "react";
import "./homepage1.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
export default function Homepage() {
  return (
    <div className="main-class">
      <div className="first-div">
        <img src="/images/logo.png" alt="logo" />
        <div className="name-div">
          <i>Tanisha Kar's TO-DO LIST</i>
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
                <input type="text" placeholder="Untitled" />
              </div>
              <div className="right-child">
                <button>ADD</button>
              </div>
            </div>
            <div className="child2">
              <textarea placeholder="Enter your task here..."></textarea>
            </div>
          </div>
          <div className="bottom-part">
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
            <div className="child-1">
              <div className="title">
                <div className="main-title">
                  <h3>Untitled</h3>
                </div>
                <div className="close">
                  <span
                    style={{
                      paddingLeft: "3%",
                      fontSize: "x-large",
                    }}
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <div className="content-bottom">
                <ul>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                  <li>Hello this is Tanisha</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
