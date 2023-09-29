import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experince from "./Components/Experience/Experience";
// import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
//import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";
import Skills from "./Components/Skills/Skills";
// import Projects from "./Components/Projects/Projects";
import Achievement from "./Components/Achievement/Achievement";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Projects from "./Components/Projects/Projects";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background :darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    
    >
      <Navbar/>
      <Intro/>
      <About/>
      <Services/>
      <Experince/>
      <Skills/>
      {/* <Works/> */}
      <Achievement/>
      <Portfolio/> 
      <Projects/>
      <Contact/>
      <Contacts/>
      <Footer/> 
      {/*<Testimonial/>*/}
     
     
    </div>
  );
}

export default App;
