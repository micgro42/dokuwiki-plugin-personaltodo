import { TODO_ADD, TODO_COMPLETE, ToDoActions } from '../actions/todoActions';
import todos, {Todo} from './todos';
import {State} from "./rootReducer";

function getExampleState(): State['todos'] {
    return {
        foo: {
            todoId: 'foo',
            title: 'bar',
            dueDate: '2019-12-31',
            projectIds: [],
            completedDate: null,
        }
    };
}

describe('todos reduce', () => {
    it( 'returns the original state for unknown actions', () => {
        const incomingState = getExampleState();
        // @ts-ignore
        const actualState = todos(incomingState, { type: 'unknown' });
        expect(actualState).toBe(incomingState);
    });

    it('adds a todo with the corresponding action', () => {
        const incomingState = getExampleState();
        const newTodo: Todo = {
            todoId: 'new',
            title: 'new Todo',
            projectIds: [],
            completedDate: null,
        };

        const expectedState = {
            ...incomingState,
            [newTodo.todoId]: newTodo,
        };
        const testAction: ToDoActions = {
            type: TODO_ADD,
            payload: newTodo
        };

        const actualState = todos(incomingState, testAction);

        expect(actualState).toStrictEqual(expectedState);
    });

    it('completes a todo with the corresponding action', () => {
        const incomingState = getExampleState();
        const testCompletedDate = '2019-11-17';
        const testAction: ToDoActions = {
            type: TODO_COMPLETE,
            todoId: 'foo',
            date: testCompletedDate
        };

        const expectedState = {
            foo: {
                ...incomingState.foo,
                completedDate: testCompletedDate,
            },
        };

        const actualState = todos(incomingState, testAction);

        expect(actualState).toStrictEqual(expectedState);
    });
});
