import React from "react";
import "./MinorProject.css";
import calculator from "./minorImg/calculator.PNG";
import musicApp from "./minorImg/musicApp.png";
import newsApp from "./minorImg/newsApp.png";
import noteMaker from "./minorImg/noteMaker.png";
import snake from "./minorImg/snake1.PNG";
import ticTacToe from "./minorImg/tic_tac_toe2.png";
const MinorProject = () => {
  return (
    <div className="mm-project" id="mm-project">
      <div className="projectDesc">
        <span>My Minor</span>
        <span>Projects</span>
        <span className="mm-aboutProject">
          <h4>The Note Maker App</h4>
          <blockquote>
            Project's Host link:{" "}
            <a href="https://amarnathprajapati.github.io/NoteMaker/">
              Go To App
            </a>
            <br />
            Technology Used: HTML, CSS, JS and Bootstrap. <br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/NoteMaker">
              Get The Code
            </a>
          </blockquote>
          <h4>The Tic Tac Toe Game</h4>
          <blockquote>
            Project's Host link:{" "}
            <a href="https://amarnathprajapati.github.io/Tic_Tac_Toe_GAME/">
              Enjoy The Game
            </a>
            <br />
            Technology Used: HTML, CSS, JS and corelDraw. <br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/Tic_Tac_Toe_GAME">
              Get The Code
            </a>
          </blockquote>
          <h4>The musicApp</h4>
          <blockquote>
          Project's Host link:{" "}
            <a href="https://amarnathprajapati.github.io/musicApp/">
              entertain with MusicApp
            </a>
            <br />
            Technology Used: HTML, CSS, JS and corelDraw. <br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/musicApp">
              Get The Code
            </a>
          </blockquote>
          <h4>The NewsApp</h4>
          <blockquote>
            Technology Used: HTML, CSS, JS, Bootstrap and ReactJs <br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/QuickNews_App
">
              Get The Code
            </a>
          </blockquote>
          <h4>The Calculator</h4>
          <blockquote>
          Project's Host link:{" "}
            <a href="https://amarnathprajapati.github.io/Calculator/
">
              let's use The Calculator.
            </a>
            <br />
            Technology Used: HTML, CSS and JavaScript<br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/Calculator
">
              Get The Code 
            </a>
          </blockquote>
          <h4>The Snake Game</h4>
          <blockquote>
          Project's Host link:{" "}
            <a href="https://amarnathprajapati.github.io/Snake_Game/
">
              let's Enjoy The Game
            </a>
            <br />
            Technology Used: HTML, CSS and JavaScript <br />
            About The project and code repository:{" "}
            <a href="https://github.com/AmarNathPrajapati/Snake_Game
">
              Get The Code
            </a>
          </blockquote>
        </span>
      </div>
      <div className="mm-right">
        <div className="mm-maincircle">
          <div className="mm-secCircle">
            <a href="https://amarnathprajapati.github.io/NoteMaker/">
              <img
                src={noteMaker}
                alt="Note Maker App"
                title="Note Maker App"
              />
            </a>
          </div>
          <div className="mm-secCircle">
            <a href="https://amarnathprajapati.github.io/Tic_Tac_Toe_GAME/">
              <img
                src={ticTacToe}
                alt="Tic Tac Toe Game"
                title="Tic Tac Toe Game"
              />
            </a>
          </div>
          <div className="mm-secCircle">
            <a href="https://amarnathprajapati.github.io/musicApp/">
              <img src={musicApp} alt="Music App" title="Music App" />
            </a>
          </div>
          <div className="mm-secCircle">
            <a href="https://github.com/AmarNathPrajapati/QuickNews_App">
              <img src={newsApp} alt="NewsApp" title="NewsApp" />
            </a>
          </div>
          <div className="mm-secCircle">
            <a href="https://amarnathprajapati.github.io/Calculator/">
              <img src={calculator} alt="Calculator" title="Calculator" />
            </a>
          </div>
          <div className="mm-secCircle">
            <a href="https://amarnathprajapati.github.io/Snake_Game/">
              <img src={snake} alt="Snake Game" title="Snake Game" />
            </a>
          </div>
        </div>
        <div className="m-backCircle blueCircle"></div>
        <div className="m-backCircle voiletCircle "></div>
        <div className="m-backCircle yellowCircle"></div>
        <div className="m-backCircle redCircle "></div>
      </div>
    </div>
  );
};

export default MinorProject;
