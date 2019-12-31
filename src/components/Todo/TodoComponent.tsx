import PropTypes from 'prop-types'
import React from 'react'
import { Todo } from '../../reducers/todos';
import {ProjectsMap} from "../../reducers/projects";
import {TodoProjectsDisplay} from "../TodoProjectsDisplay/TodoProjectsDisplay";

const TodoComponent = ({ title, projectIds, projects}: Todo&{projects: ProjectsMap}) => (
    <li>
        {title} <TodoProjectsDisplay projectIds={projectIds} projects={projects} />
    </li>
);

TodoComponent.propTypes = {
    title: PropTypes.string.isRequired,
    projectIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    projects: PropTypes.object.isRequired,
};

export default TodoComponent;
