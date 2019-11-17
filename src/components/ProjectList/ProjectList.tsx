import React from 'react'
// import PropTypes from 'prop-types'
import Project from '../Project/Project';

const ProjectList = ({ projects }: any) => (
    <ul>
        {Object.values(projects).map(
            (project: any) => (<Project key={project.id} {...project} />)
        )}
    </ul>
);

export default ProjectList;
