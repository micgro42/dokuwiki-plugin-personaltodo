import { TODO_ADD, TODO_COMPLETE, ToDoActions } from '../actions/todoActions';

export interface Todo {
    id: string,
    title: string,
    projectsIds: string[]
    // categoryId: string,
    // dueDate: string,
    completedDate: null | string
    // description?
    // priorities
    // tags/labels
    // workonDate
}

export interface TodoMap {
    [todoId: string]: Todo
}

const todos = (state: TodoMap = {}, action: ToDoActions|any) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case TODO_COMPLETE:
            return {
                ...state,
                [action.todoId]: {
                    ...state[action.todoId],
                    completedDate: action.date
                },
            };
        default:
            return state;
    }
};

export default todos;
