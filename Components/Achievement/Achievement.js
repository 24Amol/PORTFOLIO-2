import { themeContext } from "../../Context";
import { useContext } from "react";

import './Achievement.css';

import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

   
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{Color: darkMode? 'white': ''}}>
                <div className="achievement-body">
                    <h1 style={{color: "orange",fontWeight: 'bold'}}>Achievements</h1>
                    <h4 >{achievementData.bio}</h4>
                </div>
                <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement
