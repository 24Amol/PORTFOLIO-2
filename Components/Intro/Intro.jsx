import React from "react";
import './Intro.css'

// import { Button } from '@material-ui/core';
// import { NavHashLink as NavLink } from 'react-router-hash-link';

import { themeContext } from "../../Context";
import { useContext } from "react";


import { Link } from 'react-scroll'

import { motion } from 'framer-motion'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
/*import boy from '../../img/boy.png';*/
import boy2 from '../../img/boy2.png';
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import Contact from "../Contact/Contact";

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color : darkMode? 'white': ''}}>Hy! I Am</span>
            <span>Amol Pawar</span>
            <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
            {/* <span>An enthusiastic fresher with highly motivated and leadership skills ensuing Bachelors of degree in Technology Computer Science & Engineering.</span> */}
            </div>


            {/* <button className="button i-button">HireMe</button>  */}

            <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
    
                        
                        <Link spy={true} to="Contacts" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'White',
                                fontSize: '16px',
                                cursor: 'pointer',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>HireMe</li>
                        </Link>

                        {/*<Link spy={true} to="Testimonials" smooth={true} >
                            <li>Testmonials</li>
                        </Link>*/}
                        
                        
                    </ul>
                </div>
                       
                        

            <div className="i-icons">
                <a href='https://github.com/2404Amol'>
                <img src={Github} alt="" />
                </a>

                <a href='https://www.linkedin.com/in/2404amolpawar/'>
                <img src={LinkedIn} alt="" />
                </a>

                <a href='https://www.instagram.com/2404_amol/'>
                <img src={Instagram} alt="" />
                </a>
            </div>       
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy2} alt="" />

            <motion.img                         
            initial = {{left: "-36%"}}
            whileInView = {{left: "-24%"}}              //Motion Animation Effect      
            transition={transition}
            src={glassesimoji} alt="" />

            <motion.div 
            initial = {{top: '-4%',left: "74%"}}
            whileInView = {{left: "68%"}}              //Motion Animation Effect      
            transition={transition}
            style={{top: '-4%', left:'68%'}} 
            className="floating-div"
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
             initial = {{left: '9rem',top : '18rem'}}
             whileInView = {{left: '0rem'}}              //Motion Animation Effect      
             transition={transition}
            style={{top: '18rem', left: '0rem'}}
            className="floating-div"
            >
                <FloatingDiv image={thumbup} txt1='Best ' txt2='Desiner'/>
            </motion.div>

            {/*blur divs*/}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: '#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
    </div>/*<img src={boy} alt="" />*/
    )
}


export default Intro
    
   