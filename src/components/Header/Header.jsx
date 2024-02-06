import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const page2 = () => {
    navigate("/");
  };
  const pageAboutUs = () => {
    navigate("/aboutUs");
  };
  const AddFlat = () => {
    navigate("/registration");
  };

  return (
    <div className="post-header">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="menu">
        <ul className="lishki">
          <li onClick={page2} className="li1">
            Home
          </li>

          <li onClick={pageAboutUs} className="li">
            About Us
          </li>
        </ul>
        <button onClick={AddFlat} className="btn1">+ Добавить обьявление</button>
      </div>
    </div>
  );
};

export default Header;
