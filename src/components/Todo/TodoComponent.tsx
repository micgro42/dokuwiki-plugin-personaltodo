import PropTypes from 'prop-types'
import React from 'react'
import { Todo } from '../../reducers/todos';

const TodoComponent = ({ title }: Todo) => (
    <li>
        {title}
    </li>
);

TodoComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default TodoComponent;
