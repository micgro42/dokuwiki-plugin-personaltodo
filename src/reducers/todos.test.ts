import { TODO_ADD, TODO_COMPLETE, ToDoActions } from '../actions/todoActions';
import todos from './todos';

describe('todos reduce', () => {
    it( 'returns the original state for unknown actions', () => {
        const incomingState = {
            foo: {
                id: 'foo',
                title: 'bar',
                projectsIds: [],
                completedDate: null,
            }
        };
        const actualState = todos(incomingState, { type: 'unknown' });
        expect(actualState).toBe(incomingState);
    });

    it('adds a todo with the corresponding action', () => {
        const incomingState = {
            foo: {
                id: 'foo',
                title: 'bar',
                projectsIds: [],
                completedDate: null,
            }
        };
        const newTodo = {
            id: 'new',
            title: 'new Todo',
            projectsIds: [],
            completedDate: null,
        };

        const expectedState = {
            ...incomingState,
            [newTodo.id]: newTodo,
        };
        const testAction: ToDoActions = {
            type: TODO_ADD,
            payload: newTodo
        };

        const actualState = todos(incomingState, testAction);

        expect(actualState).toStrictEqual(expectedState);
    });

    it('completes a todo with the corresponding action', () => {
        const incomingState = {
            foo: {
                id: 'foo',
                title: 'bar',
                projectsIds: [],
                completedDate: null,
            }
        };
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
