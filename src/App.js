import './App.css';

import Certificate from './components/Certificate/Certificate';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import MajorProject from './components/MajorProject/MajorProject';
import MinorProject from './components/MinorProject/MinorProject';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

import {themeContext} from './Context';
import {useContext} from 'react';
function App() {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?"black":" ",
      color:darkMode?"white":" "
  }}
    >
        <Navbar/>
        <Intro/>
        <Education/>
        <Services/>
        <MajorProject/>
        <MinorProject/>
        <Certificate/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
