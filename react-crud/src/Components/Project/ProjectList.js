import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {

    return(
        <div className="project-list section">
                {props.projects && props.projects.map(p=>{
                    return(
                        <ProjectSummary project={p} key={p.id}></ProjectSummary>
                    )
                })}
        </div>
    )
}

export default ProjectList;