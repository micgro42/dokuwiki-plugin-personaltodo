import PropTypes from 'prop-types'
import React from 'react'

const Project = ({ title }: { title: string }) => (
    <li>
        {title}
    </li>
);

Project.propTypes = {
    title: PropTypes.string.isRequired
};

export default Project;
