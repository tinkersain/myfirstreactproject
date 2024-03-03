import React from "react";
import "./homepage1.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
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
        <div className="right-div"></div>
      </div>
    </div>
  );
}