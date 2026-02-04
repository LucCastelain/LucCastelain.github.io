"use client"

import {ReactElement, useEffect, useState} from "react";
import ProjectCardComponent from "@/components/ui/project-card.component";
import {getPortfolioData} from "@/data/utils/get-data";

export default function PageComponent({language}: Readonly<PageComponentProps>): ReactElement {
    const data = getPortfolioData(language);
    const [projectTypeFilter, setProjectTypeFilter] = useState<string>(data.projectTypes.ALL);

    useEffect(() => {
        setProjectTypeFilter(data.projectTypes.ALL);
    }, [data.projectTypes]);

    if(!data.projectTypes) return <div>loading...</div>

    return (
        <div className="size-full flex flex-col gap-y-2">
            <div className="flex flex-row w-full mb-2">
                <select className="ml-auto w-36 px-3 py-2.5 bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-gray-50"
                    onChange={(e) => setProjectTypeFilter(e.currentTarget.value)}>
                    {Object.values(data.projectTypes).map(type => (
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

interface PageComponentProps {
    language: string;
}