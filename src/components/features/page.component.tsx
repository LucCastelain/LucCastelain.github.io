"use client"

import {ReactElement, useEffect, useState} from "react";
import ProjectCardComponent from "@/components/ui/project-card.component";
import DataComponent, {ProjectTypeComponent} from "@/data/data.component";

export default function PageComponent(): ReactElement {
    const data = DataComponent();
    const projectTypes = ProjectTypeComponent();
    const [projectTypeFilter, setProjectTypeFilter] = useState<string>(projectTypes.ALL);

    useEffect(() => {
        setProjectTypeFilter(projectTypes.ALL);
    }, [projectTypes]);

    if(!projectTypes) return <div>loading...</div>

    return (
        <div className="size-full">
            <div className="flex flex-row">
                <select onChange={(e) => setProjectTypeFilter(e.currentTarget.value)}>
                    {Object.values(projectTypes).map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div className="size-full grid grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700">
                {data.projects
                    .filter(project => project.types.includes(projectTypeFilter))
                    .map(project => (
                    <ProjectCardComponent project={project}
                                          key={project.id}/>
                ))}
            </div>
        </div>
    );
}