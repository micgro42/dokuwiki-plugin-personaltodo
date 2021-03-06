// interface State {
//     isFetching: boolean,
//     todoList: string[],
//     todos: {
//         [todoId: string]: {
//             todoId: string,
//             title: string,
//             projectIds: string[],
//             categoryId: string,
//             dueDate: string,
//             completedDate: null|string
//             // description?
//             // priorities
//             // tags/labels
//             // workonDate
//         }
//     }
//     projects: {
//         [projectId: string]: {
//             projectId: string
//             title: string
//         }
//     }
//     categories: {
//         [categoryId: string]: {
//             categoryId: string
//             title: string,
//             color: string,
//         }
//     }
// }


import { combineReducers } from 'redux'
import projects, {ProjectsMap} from './projects';
import todos, {TodoMap} from './todos';

export interface State {
    todos: TodoMap,
    projects: ProjectsMap,
}

const rootReducer = combineReducers({
    projects,
    todos,
});

export default rootReducer;
