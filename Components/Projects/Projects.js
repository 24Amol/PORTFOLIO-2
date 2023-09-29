


import { projectsData } from '../../data/projectsData'

import { themeContext } from "../../Context";
import { useContext } from "react";

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {
        
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{color: darkMode ? 'white': ''}}>
                    <div className="projects--header">
                        <h1 style={{color: 'Orange',fontWeight: 'bold'}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                   
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
