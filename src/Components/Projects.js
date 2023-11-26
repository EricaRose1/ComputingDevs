import React from 'react';
import { projects } from '../Data.js';

import '../Styles/Projects.css';

function Projects() {

    
    return (
        <div className='projectlist'>
            <div className='ptitle'>
                <h1 id='projectTitle'>Projects</h1>
            </div>
            <div classname='ProjectCard' id='projectCard'>
                {projects.map((project) => (
                    <a href={project.link} key={project.link} className='project'>
                        <h1 id='projectTitle'>{project.title}</h1>
                        <div id='projectImg'>
                             <img className='projectImg' src={project.image} alt='project img'/>
                        </div>
                        <h2 id='subtitle'>{project.subtitle}</h2>
                        <p id='description'>{project.description}</p>
                    </a> 
                ))}
            </div>
        </div>
    )
}

export default Projects;