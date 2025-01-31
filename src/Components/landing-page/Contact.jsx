import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Enter Your Email" required />
        <textarea placeholder="Write Here..." name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
