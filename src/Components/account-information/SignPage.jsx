import React from "react";
import "./SignPage.css";
import Navbar from "../landing-page/Navbar";

export default function LoginPage() {
  return (
    <div id="contact-sign">
      <Navbar />
      <div id="d-sign">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            className="input-first-name"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-last-name"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="same-input"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            className="same-input"
          />
          <input
            type="checkbox"
            className="check-icon"
            style={{
              width: "18px",
              height: "18px",
              marginLeft: "-426px",
              position: "absolute",
              marginTop: "87px",
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
          <p className="p-sign-remember">Remember me</p>
          <p className="p-sign-forget-password">
            <a href="#">Forgot Password</a>
          </p>
          <input type="submit" value="Send" className="same-input" />
          <p className="dont-sign-account">I have an account?</p>
          <p className="link-sign-login">
            <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
