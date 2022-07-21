import React from "react";
import "./intro.css";
import photo from "../../img/photo.jpeg";
import github from "../../img/github.png";
import linkedIn from "../../img/linkedIn.png";
import whatsapp from "../../img/whatsapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {Link} from "react-scroll";
// import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import {motion} from "framer-motion";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const transition = {duration:2,type:"spring"};
  return (
    <div className="intro" id="Intro"> 
      <div className="i-left"> 
        <div className="i-name">
          <span
            style={{
              background: darkMode ? "black" : " ",
              color: darkMode ? "white" : " ",
            }}
          >
            Hy! I Am
          </span>
          <span>Amar Nath Prajapati</span>
          <span
            style={{
              background: darkMode ? "black" : " ",
              color: darkMode ? "white" : " ",
            }}
          >
            Frontend Developer, ReactJs Developer, Backend Developer <br />
            5 star Coder At Hackerrank <br />A student of Institute of National
            Importance(IIIT SONEPAT)
          </span>
        </div>
        <Link spy={true} to="ContactUs" smooth={true}>
        <button className="button i-button">Hire me!</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/AmarNathPrajapati/">
            <img
              src={github}
              alt=""
              style={{
                background: darkMode ? "white" : " ",
                color: darkMode ? "white" : " ",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/amar-nath-prajapati-1b514421b/">
            <img src={linkedIn} alt="" />
          </a>

          <img
            src={whatsapp}
            id="i-whatsapp"
            alt=""
            title="+91 91405 72251"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="i-right">
        {/* <div >
                <FloatingDiv/>
            </div> */}
        <img src={photo} alt="" id="myPhoto"/>
      </div>
    </div>
  );
};

export default Intro;
