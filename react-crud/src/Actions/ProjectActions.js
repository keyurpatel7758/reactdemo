import Axios from "axios"

export const fetchAllProjects = () => {

    return (dispatch, getState) => {
        console.log(getState());
        const token = getState().auth.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Axios.get("http://localhost:51303/project", config)
            .then((data) => {
                console.log(data);
                dispatch({ type: 'PROJECTSGET_SUCCESS', 'projects': data.data });
            })
            .catch((err) => {
                dispatch({ type: 'PROJECTGET_ERROR' });
            })
    }
}