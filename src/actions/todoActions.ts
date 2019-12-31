// todo actions

import { Todo } from '../reducers/todos';

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

// addTodoAction
export function submitTodo( todo: Todo ) {

    return (dispatch: Function) => {

        const params = {
            call: 'plugin_personaltodo',
            action: 'saveTodo',
            title: todo.title,
            dueDate: todo.dueDate,
        };
        const paramString = Object.entries(params).map(([k,v]) => `${k}=${v}`).join('&')
        return fetch( 'http://127.0.0.1/~michael/dokuwiki/lib/exe/ajax.php?'+paramString, {
            // credentials: 'include',
            mode: 'cors',
        } )
            .then( () => {
                dispatch(addTodo(todo))

            })
            .catch(
                console.error
            );
    }
}

export type ToDoActions = addTodoAction | completeTodoAction;
