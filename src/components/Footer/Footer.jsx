import React from "react";
import logo from "../../assets/logo.svg";
import social1 from "../../assets/1-sucial.png";
import social2 from "../../assets/2-sucial.png";
import social3 from "../../assets/3-sucial.png";
import social4 from "../../assets/4-sucial.png";
import social5 from "../../assets/5-sucial.png";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="logo-footer" src={logo} alt="" />
        <span className="footer-text">
          Contrary to popular is not simply random text. It has
        </span>
        <div className="social">
          <a href="https://twitter.com/i/flow/login">
            <img src={social1} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={social2} alt="" />
          </a>
          <a href="https://www.facebook.com/?locale=ru_RU">
            <img src={social3} alt="" />
          </a>
          <a href="https://apps.apple.com/us/app/dop-%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-%D1%81%D0%BE%D1%86%D1%81%D0%B5%D1%82%D1%8C/id1540483706">
            <img src={social4} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={social5} alt="" />
          </a>
        </div>
      </div>

      <div className="more">
        <div className="About">
          <h2>About</h2>
          <ul>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="Products">
          <h2>Products</h2>
          <ul>
            <li>
              <a href="">E-Books</a>
            </li>
            <li>
              <a href="">Preasantation</a>
            </li>
            <li>
              <a href="">Management</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
          </ul>
        </div>

        <div className="Address">
          <h2>Address</h2>
          <ul>
            <li>
              <a href="">Country Delevery</a>
            </li>
            <li>
              <a href="">Counter Beach Post</a>
            </li>
            <li>
              <a href="">www.itobd.com</a>
            </li>
            <li>
              <a href="">+880176565655</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
