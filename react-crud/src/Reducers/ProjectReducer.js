const initState = {
    projectList: null
}
const ProjectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'PROJECTSGET_SUCCESS':
            return{
                ...state,
                projectList: action.projects
            }
            case 'PROJECTGET_ERROR':
                return{
                    ...state,
                    projectList: action.projects
                }
                case 'CREATE_PROJECT_SUCCESS':
                    const list = [...state.projectList, action.project];
                    return{
                        ...state,
                        projectList: list
                    }
        default:
            return state;

    }
}

export default ProjectReducer;