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
import projects from './projects';
import todos from './todos';

const rootReducer = combineReducers({
    projects,
    todos,
});

export default rootReducer;
