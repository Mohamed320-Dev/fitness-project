import React from "react";
import "./Feature.css";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

export default function Feature() {
  return (
    <div id="features">
      <h1 className="title-text">FEATURES</h1>
      <div className="a-container">
        {/* ********************************* */}
        <div className="a1-box">
          <img src={fimage1} alt="" className="b1-img" />
          <h1 className="b1-text">WeightLifting</h1>
          <p className="text-1">
            Lorem ipsum dolor sit <br />
            &nbsp;&nbsp;&nbsp; amet consectetur <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adipisicing
          </p>
        </div>
        {/* **************************** */}
        <div className="a2-box">
          <img src={fimage2} alt="" className="b2-img" />
          <h1 className="b2-text">Specific Muscle</h1>
          <p className="text-2">
            Lorem ipsum dolor sit <br />
            &nbsp;&nbsp;&nbsp; amet consectetur <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adipisicing
          </p>
        </div>
        {/* ************************************* */}
        <div className="a3-box">
          <img src={fimage3} alt="" className="b3-img" />
          <h1 className="b3-text">Flex Your Muscle</h1>
          <p className="text-3">
            Lorem ipsum dolor sit <br />
            &nbsp;&nbsp;&nbsp; amet consectetur <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adipisicing
          </p>
        </div>
        {/* ******************************************  */}
        <div className="a4-box">
          <img src={fimage4} alt="" className="b4-img" />
          <h1 className="b4-text">Cardio Exercicse</h1>
          <p className="text-4">
            Lorem ipsum dolor sit <br />
            &nbsp;&nbsp;&nbsp; amet consectetur <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adipisicing
          </p>
        </div>
      </div>
    </div>
  );
}
