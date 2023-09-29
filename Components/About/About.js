// import React, { useContext } from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";

import about from '../../img/About.webp'

import './About.css';
// import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'





function About() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="About" style={{Color: darkMode? 'white': ''}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: '#FCA61F'}}></div>
              <div className="style-circle" style={{backgroundColor: '#FCA61F'}}></div>
              <div className="style-line" style={{backgroundColor: '#FCA61F'}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: "Orange"}}>{aboutData.title}</h2>
                    <p >{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">

                <img src={about} alt="" />
                    {/* <img 
                        src={aboutData.image === 1 ? '#f03939'.aboutimg1 : '#f03939'.aboutimg2}  
                        alt="" 
                    /> */}
                    
                </div>
            </div>
        
        </div>

    )
}

export default About
