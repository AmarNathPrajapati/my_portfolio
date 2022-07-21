import React from 'react'
import '../Services/Services.css'
import './MajorProject.css'
import ovm from './MajorImg/ovm.jpg'
import ec from './MajorImg/ec.png'
import text from './MajorImg/text.png'
import NewCard from '../NewCard/NewCard'
import {themeContext} from '../../Context';
import {useContext} from 'react';
const MajorProject = () => {
    const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="services m-project" id='M-project'>
        <div className="projectDesc">
            <span>My Major</span>
            <span>Projects</span>
            <span> 
                <h3>Online Voting System</h3>
                <blockquote>
            <p >In this project ,An Online Voting System is developed which provide not only easy login and registration process but also provide full security of voter data .This system also send every information related voting process on email of voter.</p> 
                Project's Host link : <a href="https://amarnathprajapati.github.io/Online_Voting_System/">Go To Website</a><br/>
                Project's Code Repository : <a href="https://github.com/AmarNathPrajapati/Online_Voting_System">Get The Code</a>                                                         
                </blockquote>
                <h3>Various Functionality for Ecommerce website</h3>
                <blockquote>
                    <p>In this project, An “ECommerce Website with different kinds of Functionality” is proposed. A normal Ecommerce website is enhanced by various functionality like text manipulator, newsApp, NoteTaking App etc </p>
                Project's Host link : <a href="https://github.com/AmarNathPrajapati/Ecommerce-Website-">Go To Website</a> <br/>
                Project's Code Repository : <a href="https://amarnathprajapati.github.io/Ecommerce-Website-/">Get the Code</a>
                </blockquote>
                <h3>The Text Manipulator</h3>
                <blockquote>
                    <p>In this project, A text Manipulator is developed which provides a lot of functionalities like convertToUpperCase, convertToLowerCase, clear etc.
                    </p>
                Project's Host link : <a href="https://github.com/AmarNathPrajapati/textutils">Go To Text Manipulator</a><br/>
                Project's Code Repository : <a href="https://amarnathprajapati.github.io/textutils/">Get The code</a>
                </blockquote>
            </span>
        </div>
        <div className="projectCard">
            <div className='m-Card' id='Major1' style={{position:"absolute",left:"0.5rem"}}>
                <NewCard 
                href={"https://amarnathprajapati.github.io/Online_Voting_System/"}
                alt={"Online Voting System"}
                title={"Online Voting System"}
                image={ovm}
                heading={'Online Voting System'}
                detail={'Technologies Used: HTML, CSS, JS, SQL, PHP, MySQL'}
                />
            </div>
            <div className='m-Card major2' id='Major2'>
                <NewCard
                href={"https://amarnathprajapati.github.io/Ecommerce-Website-/"}
                image={ec} 
                heading={'Various Functionality for ECommerce Website'}
                alt={'Various Functionality for ECommerce Website'}
                title={'Various Functionality for ECommerce Website'}
                detail={'Technologies Used: HTML, CSS, JS, ReactJS, Bootstrap'}
                />
            </div>
            <div className='m-Card' id='Major3' style={{position:"absolute",left:"0.5rem",top:"16rem", background:darkMode?"black":" ",
                    color:darkMode?"white":" "}}>
                <NewCard 
                href={"https://amarnathprajapati.github.io/textutils/"}
                image={text} 
                heading={'The Text Manipulator'}
                title={'The Text Manipulator'}
                alt={'The Text Manipulator'}
                detail={'Technologies Used: HTML, CSS, JS, ReactJS, Bootstrap'}
                />
            </div>
        </div>
    </div>
  )
}

export default MajorProject