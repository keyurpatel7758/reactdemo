import React from 'react';
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    //var links = SignInLinks;
    console.log(props);

    const links = props.token ? <SignInLinks /> : <SignOutLinks />;
    return (
        
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className="brand-logo">BlueBit</Link>
            {links}
        </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        token : state.auth.token
    }
}

export default connect(mapStateToProps)(Navbar);