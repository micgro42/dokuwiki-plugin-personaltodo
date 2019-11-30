import { PROJECT_ADD } from '../actions/projectActions';
import { INITIALIZE } from '../actions/RootActions';

export interface Project {
    id: string
    title: string
}

export interface ProjectsMap {
    [projectId: string]: Project
}

const projects = (state: ProjectsMap = {}, action: any) => {
    switch (action.type) {
        case PROJECT_ADD:
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        case INITIALIZE:
            return action.payload.projects;
        default:
            return state;
    }

};

export default projects;
