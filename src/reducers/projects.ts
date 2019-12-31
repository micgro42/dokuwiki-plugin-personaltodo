import {PROJECT_ADD, ProjectActions} from '../actions/projectActions';
import {initalizeAction, INITIALIZE} from '../actions/RootActions';

export interface Project {
    projectId: string
    title: string
}

export interface ProjectsMap {
    [projectId: string]: Project
}

const projects = (state: ProjectsMap = {}, action: ProjectActions|initalizeAction) => {
    switch (action.type) {
        case PROJECT_ADD:
            return {
                ...state,
                [action.payload.projectId]: action.payload,
            };
        case INITIALIZE:
            return action.payload.projects;
        default:
            return state;
    }

};

export default projects;
