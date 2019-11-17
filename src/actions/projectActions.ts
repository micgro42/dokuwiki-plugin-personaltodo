import { Project } from '../reducers/projects';

export const PROJECT_ADD = 'PROJECT_ADD';

interface AddProjectAction {
    type: typeof PROJECT_ADD,
    payload: Project // FIXME: payload is not a good name here
}

export type ProjectActions = AddProjectAction;

export function addProject( project: Project ): AddProjectAction {
    return {
        type: PROJECT_ADD,
        payload: project,
    }
}
