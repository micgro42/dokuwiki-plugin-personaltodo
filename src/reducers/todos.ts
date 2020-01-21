import {initalizeAction, INITIALIZE} from '../actions/RootActions';
import { TODO_ADD, TODO_COMPLETE, ToDoActions } from '../actions/todoActions';

export interface Todo {
    todoId: string,
    title: string,
    projectIds: string[]
    dueDate?: string,
    completedDate: null | string
    // categoryId: string,
    // description?
    // priorities
    // tags/labels
    // workonDate
}

export interface TodoMap {
    [todoId: string]: Todo
}

const todos = (state: TodoMap = {}, action: ToDoActions|initalizeAction) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                [action.payload.todoId]: action.payload
            };
        case TODO_COMPLETE:
            return {
                ...state,
                [action.todoId]: {
                    ...state[action.todoId],
                    completedDate: action.date
                },
            };
        case INITIALIZE:
            // Todo: sort todos
            return action.payload.todos;
        default:
            return state;
    }
};

export default todos;
