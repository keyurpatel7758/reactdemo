import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../Actions/AuthActions';
import { connect } from 'react-redux';

const SignInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><a onClick={props.signout}>Log out</a></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                    KPS
                </NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignInLinks);