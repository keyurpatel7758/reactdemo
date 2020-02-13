const initState = {
    authError: null,
    token: null
}
const AuthReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed',
                token: null
            }
        case 'LOGIN_SUCCESS':
            //console.log('login success');
            
            return {
                ...state,
                authError: null,
                userData: action.userData,
                token: action.userData.token
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            
            return {
                ...state,
                authError: null,
                token: null
            };
        default:
            return state;
    }
}

export default AuthReducer;