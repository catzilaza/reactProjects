import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";
import { FiAlignJustify, FiX } from "react-icons/fi";
//import { FcMenu } from "react-icons/fc";
import "./Landing.css";

function Landing() {
  const bannerData = {
    title: "Dessert Landing Page",
    desc: "lorem lorem lorem lorem",
  };
  const footerData = {
    title: "footerData",
    desc: "lorem lorem lorem lorem",
  };

  const [landingClick, setLandingClick] = useState(false);
  const handleLandingClick = () => {
    setLandingClick(!landingClick);
  };

  console.log("Status : ", landingClick);

  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <a className="landing-logo" href="#3">
            <FaAngellist></FaAngellist>Dessert Landing Page
          </a>
          <ul className={landingClick ? "landing-menu-active" : "landing-menu"}>
            <li className="landing-menu-link ">
              <Link to="/">Home Page</Link>
            </li>
            <li className="landing-menu-link">
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li className="landing-menu-link">
              <a href="#3">An item</a>
            </li>
            <li className="landing-menu-link">
              <a href="#3">An item</a>
            </li>
            <li className="landing-menu-link">
              <a href="#3">An item</a>
            </li>
          </ul>
          <div className="landing-toggle" onClick={handleLandingClick}>
            {landingClick ? <FiX></FiX> : <FiAlignJustify></FiAlignJustify>}
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-text">
              <h1>{bannerData.title}</h1>
              <p>{bannerData.desc}</p>
              <a href="#3" className="banner-btn">
                Banner Button
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-section">
        <div className="landing-section-container">
          <div className="landing-section-content">
            <div className="landing-section-content-left">
              <img
                src="https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              ></img>
            </div>
            <div className="landing-section-content-right">
              <h2>Some Title</h2>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
        <div className="landing-section-container">
          <div className="landing-section-content">
            <div className="landing-section-content-right">
              <h2>Some Title</h2>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
            <div className="landing-section-content-left">
              <img
                src="https://images.unsplash.com/photo-1492683513054-55277abccd99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="landing-section-container">
          <div className="landing-section-content">
            <div className="landing-section-content-left">
              <img
                src="https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              ></img>
            </div>
            <div className="landing-section-content-right">
              <h2>Some Title</h2>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-footer">
        <div className="landing-footer-container">
          <div className="landing-footer-content">
            <div className="landing-footer-text">
              <h1>{footerData.title}</h1>
              <p>{footerData.desc}</p>
              <a href="#3" className="landing-footer-btn">
              <FaAngellist></FaAngellist>footer Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
