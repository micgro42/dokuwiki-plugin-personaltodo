// todo actions

// eslint-disable-next-line
import { Project } from '../reducers/projects';
import { Todo } from '../reducers/todos';
// eslint-disable-next-line
import { PROJECT_ADD } from './projectActions';

export const TODO_ADD = 'TODO_ADD';
export const TODO_COMPLETE = 'TODO_COMPLETE';

interface addTodoAction {
    type: typeof TODO_ADD,
    payload: Todo,
}

interface completeTodoAction {
    type: typeof TODO_COMPLETE,
    todoId: string,
    date: string,
}

export function addTodo( todo: Todo ): addTodoAction {
    return {
        type: TODO_ADD,
        payload: todo,
    }
}

export type ToDoActions = addTodoAction | completeTodoAction;
