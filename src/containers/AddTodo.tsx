import React from 'react'
import { connect } from 'react-redux'
import { submitTodo } from '../actions/todoActions'

const AddTodo = ({ dispatch }: any) => {
    let titleInput: HTMLInputElement | null;
    let dueDateInput: HTMLInputElement | null;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (titleInput === null || !titleInput.value.trim()) {
                        return
                    }
                    dispatch(submitTodo({
                        todoId:  titleInput.value,
                        title: titleInput.value,
                        projectIds: [],
                        dueDate: dueDateInput?.value,
                        completedDate: null,
                    }));
                    titleInput.value = ''
                }}
            >
                <input
                    required
                    ref={node => (titleInput = node)}
                />
                <input
                    type="date"
                    ref={node => (dueDateInput = node)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};

export default connect()(AddTodo)
