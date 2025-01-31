import React from "react";
// import LoginPage from "./Components/account-information/LoginPage";
import Navbar from "./Components/landing-page/Navbar";
import Header from "./Components/landing-page/Header";
import Feature from "./Components/landing-page/Feature";
import Offer from "./Components/landing-page/Offer";
import About from "./Components/landing-page/About";
import Contact from "./Components/landing-page/Contact";
import LoginPage from "./Components/account-information/LoginPage";
import SignPage from "./Components/account-information/SignPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProfilePage from "./Components/profile/ProfilePage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <Feature />
                <Offer />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
