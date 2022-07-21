import React from 'react'
import "./Footer.css"
import linkedIn from "../../img/linkedIn.png";
import github from '../../img/github.png';
import whatsApp from '../../img/whatsapp.png';
const Footer = () => {
  return (
    <div className="footer">
        <span>amarnathjnp2002@gmail.com</span>
        <div className="f-image">
          <a href="https://www.linkedin.com/in/amar-nath-prajapati-1b514421b/">
            <img src={linkedIn} alt="" />
          </a>
          <a href="https://github.com/AmarNathPrajapati/">
            <img src={github} alt="" />
          </a>
            <img src={whatsApp} alt="" title='+91 91405 72251' style={{cursor:"pointer"}} />
        </div>
        <span>whatsApp No.<b>+91 91405 72251</b> </span>
        <span>copyright &copy; amarnath@iiits</span>
    </div>
  )
}

export default Footer