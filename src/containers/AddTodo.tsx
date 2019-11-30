import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

const AddTodo = ({ dispatch }: any) => {
    let titleInput: HTMLInputElement | null;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (titleInput === null || !titleInput.value.trim()) {
                        return
                    }
                    dispatch(addTodo({
                        todoId:  titleInput.value,
                        title: titleInput.value,
                        projectIds: [],
                        completedDate: null,
                    }));
                    titleInput.value = ''
                }}
            >
                <input ref={node => (titleInput = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};

export default connect()(AddTodo)
