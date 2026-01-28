"use client"

import {ReactElement, useEffect, useState} from "react";
import ProjectCardComponent from "@/components/ui/project-card.component";
import PortfolioDataComponent, {ProjectTypeComponent} from "@/data/portfolio-data.component";

export default function PageComponent(): ReactElement {
    const data = PortfolioDataComponent();
    const projectTypes = ProjectTypeComponent();
    const [projectTypeFilter, setProjectTypeFilter] = useState<string>(projectTypes.ALL);

    useEffect(() => {
        setProjectTypeFilter(projectTypes.ALL);
    }, [projectTypes]);

    if(!projectTypes) return <div>loading...</div>

    return (
        <div className="size-full flex flex-col gap-y-2">
            <div className="flex flex-row mb-2">
                <select className="ml-auto w-36 px-3 py-2.5 bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-gray-50"
                    onChange={(e) => setProjectTypeFilter(e.currentTarget.value)}>
                    {Object.values(projectTypes).map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div className="w-full h-10 grow grid grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
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