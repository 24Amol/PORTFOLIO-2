import React from 'react';
import './Services.css'

import Card from '../Card/Card';

import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from 'framer-motion';

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './MY RESUME 1.pdf'

const Services = () => {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return(
        <div className="services" id="Services">

            {/*Left Side*/}
            <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <spane>
            An enthusiastic fresher with highly motivated and leadership 
                <br/>
                skills ensuing Bachelors of Technology Degree in Computer Science & Engineering.
            </spane>

            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>

            {/*Right Side*/}
                                     {/* First card*/}
            <div className="cards">

                <motion.div 
                whileInView={{left: '14rem'}}
                initial={{left: '25rem'}}
                transition={transition}
                style={{left:'14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Html, Css, Php, Xml, Photoshop, Adobe, Adobe xd"}
                     />
                </motion.div>

                                    {/* Second card*/}
                <motion.div 
                whileInView={{left: '-4rem'}}
                initial={{top: '12rem',left: '-11rem'}}
                transition={transition}
                style={{top: "12rem", left: "-4rem",}}>
                    <Card
                    emoji={Glasses}
                    heading={"Developer"}
                    detail = {"C, C++, Java, Advamce Java, JavaScript, React, Android Dvelopment"}
                    />
                </motion.div>

                                     {/* Third card*/}
                <motion.div
                whileInView={{left: '14rem'}}
                initial={{top: '19rem',left: '35rem'}}
                transition={transition}
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                    emoji = {Humble}
                    heading = {"UI/UX"}
                    detail = {"Figma, Sketch, InVision Studio, Marvel, Html, Css, JavaScript"}
                     />
                </motion.div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>


            </div>
        </div>
    )
}

export default Services