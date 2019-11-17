import React from 'react'
// import PropTypes from 'prop-types'
import TodoComponent from '../Todo/TodoComponent';

const TodoList = ({ todos }: any) => (
    <ul>
        {Object.values(todos).map(
            (project: any) => (<TodoComponent key={project.id} {...project} />)
        )}
    </ul>
);

export default TodoList;
