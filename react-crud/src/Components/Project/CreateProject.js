import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../../Actions/ProjectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(addProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject);