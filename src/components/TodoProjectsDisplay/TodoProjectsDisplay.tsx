import React, { FunctionComponent } from 'react';
import {Project, ProjectsMap} from "../../reducers/projects";
import {ProjectTag} from "../ProjectTag/ProjectTag";
import "./TodoProjectsDisplay.scss";

type TodoProjectsDisplayProps = {
    projectIds: string[],
    projects: ProjectsMap,
}

export const TodoProjectsDisplay: FunctionComponent<TodoProjectsDisplayProps> = ({projectIds, projects}) => {

    const projectList: Project[] = projectIds.map(projectId => {
        return projects[projectId] ? projects[projectId] : { projectId: projectId, title: projectId}
    });

    return (
        <ul className="TodoProjectsDisplay">
            {projectList.map( project => (<li className="TodoProjectsDisplay__project" key={project.projectId}><ProjectTag {...project} /></li>))}
        </ul>
    );
};
