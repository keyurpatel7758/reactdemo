import React, { Component } from 'react';
import ProjectList from '../Project/ProjectList';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';

class Dashboard extends Component{
    render(){
        const {projects,token} = this.props;
        if(!token)  return <Redirect to="/login"></Redirect>
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        Notifications
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects : state.project.projectList,
        token : state.auth.token
    }
}
export default connect(mapStateToProps)(Dashboard);