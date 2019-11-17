import { PROJECT_ADD, ProjectActions } from '../actions/projectActions';
import projects from './projects';

describe( 'projects reducer', () => {
    it( 'returns the original state for unknown actions', () => {
        const someState = {
            foo: {
                id: 'foo',
                title: 'bar'
            }
        };
        const actualState = projects(someState, {type: 'unknown'});
        expect(actualState).toBe(someState);
    });

    it('adds a new project from the corresponding action', () => {
        const someState = {
            foo: {
                id: 'foo',
                title: 'bar'
            }
        };
        const newProject = {
            id: 'newId',
            title: 'baz'
        };
        const action: ProjectActions = {
            type: PROJECT_ADD,
            payload: newProject,
        };

        const expectedState = {
            ...someState,
            [newProject.id]: newProject
        };
        const actualState = projects(someState, action);
        expect(actualState).toStrictEqual(expectedState);
    });
});
