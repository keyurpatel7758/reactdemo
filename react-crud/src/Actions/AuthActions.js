import Axios from "axios";

export const signIn = (credentials) => {


    return (dispatch, getState) => {

        //console.log(credentials);

        Axios.post('http://localhost:51303/users/authenticate',
            {
                Username: credentials.email,
                Password: credentials.password
            }).then((data) => {
                console.log(data);
                var userData = data.data;
                dispatch({ type: 'LOGIN_SUCCESS', userData : userData });
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

