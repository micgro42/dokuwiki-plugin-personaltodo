import React from 'react'
// import PropTypes from 'prop-types'
import TodoComponent from '../Todo/TodoComponent';

const TodoList = ({ todos, projects }: any) => (
    <ul>
        {Object.values(todos).map(
            (todo: any) => (<TodoComponent key={todo.id} {...todo} projects={projects} />)
        )}
    </ul>
);

export default TodoList;
