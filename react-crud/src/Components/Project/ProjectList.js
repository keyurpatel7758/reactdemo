import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary'
import { fetchAllProjects } from '../../Actions/ProjectActions';
import { connect } from 'react-redux';

class ProjectList extends Component {

    componentDidMount() {
        if (this.props.projects && this.props.projects.length > 0)
            return;
        this.props.fetchAllProjects();
    }

    render() {
        return (
            <div className="project-list section">
                {this.props.projects && this.props.projects.map(p => {
                    return (
                        <ProjectSummary project={p} key={p.id}></ProjectSummary>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProjects: () => dispatch(fetchAllProjects())
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.project.projectList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);