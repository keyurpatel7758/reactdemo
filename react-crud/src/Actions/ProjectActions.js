import Axios from "axios"

export const fetchAllProjects = () => {

    return (dispatch, getState) => {
        console.log(getState());
        const token = getState().auth.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Axios.get("http://localhost:51303/project/getall", config)
            .then((data) => {
                console.log(data);
                dispatch({ type: 'PROJECTSGET_SUCCESS', 'projects': data.data });
            })
            .catch((err) => {
                dispatch({ type: 'PROJECTGET_ERROR' });
            })
    }
}

export const addProject = (project) => {

    return(dispatch, getState) => {
        console.log(project);
        const token = getState().auth.token;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }

        Axios.post("http://localhost:51303/project/add",project,{headers:headers}
        ).then((data)=>{
            console.log(data);
            dispatch({type :'CREATE_PROJECT_SUCCESS', project: data.data});
        }).catch(err=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        })
    }
};
