import React from "react";
import "./About.css";
import about_image from "../images/about.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={about_image} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aliquid voluptate, dicta nesciunt, illum, reprehenderit rerum ducimus
          at nemo cumque animi iste consequatur accusantium dolorem adipisci
          earum. Officiis, facilis maiores?
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
