import React from 'react';
import {NavLink} from 'react-router-dom';

const SignInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><NavLink to='/logout'>Logout</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                    KP
                </NavLink></li>
            </ul>
        </div>
    )
}

export default SignInLinks;