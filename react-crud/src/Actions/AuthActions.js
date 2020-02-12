import Axios from "axios";

export const signIn = (credentials) => {


    return (dispatch, getState) => {

        //console.log(credentials);

        Axios.post('http://localhost:51303/users/authenticate',
            {
                Username: credentials.email,
                Password: credentials.password
            }).then((data) => {
                //console.log(data);
                var token = data.data.token;
                dispatch({ type: 'LOGIN_SUCCESS', token : token });
            }).catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err });
            });
    }
}

export const signOut = () => {
    return(dispatch, getState) => {
        dispatch({type:'SIGNOUT_SUCCESS'});
    }
}

