import React from "react";
import "./Education.css";
import "swiper/css";
import IIITS from './eduImg/IIITS.png';
import JRS from './eduImg/JRS.png';
import RIC from './eduImg/RIC.gif'
const Education = () => {
  return (
    <div id="Education" className="education"> 
      <div className="e-boxSpan">
        <span>Educational</span>
        <span>Qualifications</span>
      </div>
      <div className="e-container">
        <div className="e-box">
          <img src={RIC} alt="" />
          <span style={{fontWeight:"bold",fontSize:"1rem"}}>Radhika Inter College</span>
          <span>Jaunpur U.P.</span>
          <span>Secondary(X)</span>
          <span style={{fontWeight:"bold"}}>Percentage: 90.5%</span>
          <span>Year of Completion: 2016</span>
        </div>
        <div className="e-box">
          <img src={RIC} alt="" /> 
          <span style={{fontWeight:"bold",fontSize:"1rem"}}>Radhika Inter College</span>
          <span>Jaunpur U.P.</span>
          <span>Senior Secondary(XII)</span>
          <span style={{fontWeight:"bold"}}>Percentage: 85.6%</span>
          <span>Year of Completion: 2018</span>
        </div>
        <div className="e-box">
          <img src={JRS} alt="" />
          <span style={{fontWeight:"bold",fontSize:"1rem"}}>JRS Tutorials</span>
          <span>Varanashi U.P.</span>
          <span>JEE Exam Preperation</span>
          <span style={{fontWeight:"bold"}}>JEE Mains : 97.56 %tile</span>
        </div>
        <div className="e-box">
          <img src={IIITS} alt="" />
          <span style={{fontWeight:"bold",fontSize:"1rem"}}>Indian Institute of Information Technology (IIIT)  Sonepat Haryana</span>
          <span>Bachelor in Technology</span>
          <span style={{fontWeight:"bold"}}>Grade: 9.4 CGPA</span>
          <span style={{fontSize:"0.8rem"}}>Year of Completion: 2020-24</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
