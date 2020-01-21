import { Project } from '../reducers/projects';
import { Todo } from '../reducers/todos';

export const INITIALIZE = 'INITIALIZE';

interface StateData {
    // todoList: string[],
    todos: {
        [todoId: string]: Todo,
    }
    projects: {
        [projectId: string]: Project,
    }
    // categories: {
    //     [categoryId: string]: {
    //         categoryId: string
    //         title: string,
    //         color: string,
    //     }
    // }
}


export interface initalizeAction {
    type: typeof INITIALIZE,
    payload: {
        todos: {
            [todoId: string]:  Todo,
        },
        projects:  {
            [projectId: string]: Project
        }
    },
}

export default function hydrateStore(initialStoreData: StateData): initalizeAction {
    return {
        type: INITIALIZE,
        payload: initialStoreData,
    };
}
