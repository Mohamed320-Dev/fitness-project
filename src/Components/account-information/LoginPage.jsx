import React, { useRef } from "react";
import "./LoginPage.css";
import Navbar from "../landing-page/Navbar";
import { h1 } from "framer-motion/client";

export default function LoginPage() {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email === "null") & (password === "null")) {
      return console.log("error!!");
    }
  };
  return (
    <div id="contact-login">
      <Navbar />
      <div id="form-d">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            ref={email}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            ref={password}
            required
          />
          <input
            type="checkbox"
            className="check-icon"
            style={{
              width: "18px",
              height: "18px",
              marginLeft: "-435px",
              position: "absolute",
              marginTop: "40px",
              appearance: "none", // Hides the default checkbox styling
              border: "2px solid #ccc", // Default border
              borderRadius: "4px", // Rounded corners
              transition: "all 0.3s ease", // Smooth transition
              cursor: "pointer",
            }}
            onChange={(e) => {
              e.target.style.border = e.target.checked
                ? "none"
                : "2px solid #ccc"; // Toggle border
              e.target.style.backgroundColor = e.target.checked
                ? "transparent"
                : "white"; // Toggle background
              e.target.style.backgroundImage = e.target.checked
                ? "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22red%22><path d=%22M20.285 6.707a1 1 0 00-1.413-1.414l-8.073 8.074L5.129 8.57a1 1 0 00-1.414 1.415l6.364 6.363a1 1 0 001.414 0l8.792-8.792z%22/></svg>')"
                : "none"; // Red check icon
              e.target.style.backgroundSize = "20px"; // Adjust icon size
              e.target.style.backgroundRepeat = "no-repeat"; // Prevent repetition
              e.target.style.backgroundPosition = "center"; // Center the icon
            }}
          />
          <label htmlFor="custom-checkbox" className="custom-label"></label>
          <p className="p-remember">Remember me</p>
          <p className="p-forget-password">
            <a href="#">Forgot Password</a>
          </p>
          <input type="submit" value="Send" />
          <p className="dont-account">Don't have an account?</p>
          <p className="link-register">
            <a href="/sign-up">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
