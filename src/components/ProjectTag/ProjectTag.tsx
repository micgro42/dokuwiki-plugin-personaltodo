import React, { FunctionComponent } from 'react';
import {Project} from "../../reducers/projects";

type ProjectTagProps = Project;

export const ProjectTag: FunctionComponent<ProjectTagProps> = ({ title}) => (
    <span className='tag is-light is-info'>{title}</span>
);
