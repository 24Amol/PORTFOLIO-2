
import Marquee from "react-fast-marquee";

import './Skills.css'

import { themeContext } from "../../Context";
import { useContext } from "react";

import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const skillBoxStyle = {
        backgroundColor: "White",
     // boxShadow: `0px 0px 30px ${theme.primary30
    }
    return (
        <div className="skills" id="Skills" style={{Color: darkMode? 'white': ''}}>
            <div className="skillsHeader">
               
                <h2 style={{color:"Orange"}}>Skills</h2>
                
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: "Black"}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills
