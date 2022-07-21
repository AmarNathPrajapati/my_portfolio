import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="n-left">
        <div className="n-name">Amar Nath</div>
        <Toggle />
      </div>
      <div className="n-right">
        <ul className="n-list">
          <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to="Education" smooth={true}>
            <li>Education</li>
          </Link>
          <Link spy={true} to="Services" smooth={true}>
            <li>Services</li>
          </Link>
          <Link spy={true} to="M-project" smooth={true}>
            <li>Major Projects</li>
          </Link>
          <Link spy={true} to="mm-project" smooth={true}>
            <li>Minor Projects</li>
          </Link>
          <Link spy={true} to="Certificates" smooth={true}>
            <li>Certificates</li>
          </Link>
        </ul>
        <Link spy={true} to="ContactUs" smooth={true}>
          <button className="button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
