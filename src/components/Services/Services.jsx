import React from 'react'
import './Services.css'
import backend from './ServiceImg/backend.jpg'
import frontend from './ServiceImg/frontend.jpg'
import reactjs from './ServiceImg/ReactJs.png'
import Card from '../Card/Card'
import resume from './RESUME.docx' 
import {themeContext} from '../../Context';
import {useContext} from 'react';
const Services = () => { 
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="projectDesc">
            <span>My Awesome</span>
            <span>Services</span>
            <span> 
                <h2>As A Frontend Developer</h2>
                <blockquote>
                    Because of Intermediate leve knowledge in HTML, CSS and JavaScript, I am certified by <b>Sololeanr</b> and <b>linkedIn</b> in the web scripting language HTML, CSS, and JS. A lot of webApp are developed by me which are: SnakeGame, MusicApp, NoteTaking etc..
                </blockquote>
                <h2>As A ReactJs Developer</h2>
                <blockquote>
                    I can also provide service as ReactJs Developer. Because of Intermediate knowledge in ReactJs, SwiperJs, I am certified by <b>Sololearn</b> and <b>Simplilearn</b>. A lot of webApps which are based on ReactJs are developed by me which are: My_Portfolio, TextManipulator, NewsApp, ReactRevisionApp etc..
                </blockquote>
                <h2 >As A Backend Developer</h2>
                <blockquote>
                    I am beginner level Backend developer. The Backend Technogies which I Known are : NodeJs, PHP, SQL and ExpressJs and The database which I generally used are : MySQL and MongoDB. Some backend based my project are: Online Voting System and Trip Form.
                </blockquote>
            </span>
            <a href={resume} download>
                <button className="s-button button">
                    Download CV
                </button>
            </a>
        </div>
        <div className="projectCard">
            <div id='Service1' style={{position:"absolute",right:"0.5rem"}}>
                <Card 
                image={reactjs}
                heading={'ReactJS Developer'}
                detail={'Technologis Known: ReactJS, Redux, SwiperJs and EmailJS'}
                />
            </div>
            <div id='Service2' className='service2'>
                <Card 
                image={frontend}
                heading={'Frontend Developer'}
                detail={'Technologies Known: HTML,CSS, JavaScript'}
                />
            </div>
            <div id='Service3' style={{position:"absolute",right:"0.5rem",top:"16rem",
      background:darkMode?"black":" ",
      color:darkMode?"white":" "
  }}>
                <Card 
                image={backend}
                heading={'Backend Developer'}
                detail={'Technologies known: NodeJs, ExpressJS, MySQL, MongoDB,PHP and SQL'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services