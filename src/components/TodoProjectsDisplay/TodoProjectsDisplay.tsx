import React, { FunctionComponent } from 'react';
import {ProjectsMap} from "../../reducers/projects";
import {ProjectTag} from "../ProjectTag/ProjectTag";
import "./TodoProjectsDisplay.scss";

type TodoProjectsDisplayProps = {
    projectIds: string[],
    projects: ProjectsMap,
}

export const TodoProjectsDisplay: FunctionComponent<TodoProjectsDisplayProps> = ({projectIds, projects}) => {

    return (
        <ul className="TodoProjectsDisplay">
            {projectIds.map( projectId => (<li className="TodoProjectsDisplay__project" key={projectId}><ProjectTag {...projects[projectId]} /></li>))}
        </ul>
    );
};
