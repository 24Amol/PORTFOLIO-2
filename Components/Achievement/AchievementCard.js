// import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Fade from 'react-reveal/Fade';

// import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import { themeContext } from "../../Context";
import { useContext } from "react";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {

    // const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:"Orange",
            "&:hover": {
                backgroundColor: "Red",
            },
        },
    }));

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color : darkMode? 'white': '' ,fontWeight: 'bold',lineHeight: '1'}}>{title}</h2>
                        <p style={{color : darkMode? 'white': ''}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color : darkMode? 'white': ''}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
