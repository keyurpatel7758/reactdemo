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
                    {props.shortName}
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

const mapStateToProps = (state) => {
    var userData = state.auth.userData;
    var firstName = userData.firstName;
    var lastName = userData.lastName;
    var shortName = firstName.charAt(0) + lastName.charAt(0);

    return{
        shortName : shortName    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);