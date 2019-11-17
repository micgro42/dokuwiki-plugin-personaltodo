import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/projectActions';

const AddProject = ({dispatch}: any) => {
    let input: HTMLInputElement|null;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input === null || !input.value.trim()) {
                        return;
                    }
                    dispatch(addProject({
                        id: input.value,
                        title: input.value,
                    }));
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default connect()(AddProject);
