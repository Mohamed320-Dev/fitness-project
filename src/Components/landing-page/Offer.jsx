import React from "react";
import "./Offer.css";
import { Link } from "react-router-dom";

export default function Offer() {
  return (
    <div id="offer">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span>
          FOR THIS SUMMER
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="pr-btns">
          <Link to={"/login"} className="pr-btn">
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
