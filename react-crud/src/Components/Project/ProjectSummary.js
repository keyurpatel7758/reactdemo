import React from 'react';

const ProjectSummary = (props) => {
    const project = props.project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{project.title}</span>
                <p>{project.content}</p>

                <button className="btn waves-effect waves-light" name="action">Edit
                    <i className="material-icons right">edit</i>
                </button>
                <button className="btn waves-effect waves-light" name="action">Delete
                    <i className="material-icons right">delete</i>
                </button>
            </div>
        </div>
    );
}

export default ProjectSummary;