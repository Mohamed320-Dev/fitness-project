import React from "react";
import "./Nav-Head.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
          Build Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          <Link to={"/login"} className="header-btn">
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
}
