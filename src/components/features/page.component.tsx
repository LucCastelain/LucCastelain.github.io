"use client"

import {ReactElement, useEffect, useState} from "react";
import ProjectCardComponent from "@/components/ui/project-card.component";
import {getPortfolioData} from "@/data/utils/get-data";
import {getText} from "@/data/utils/get-text";

export default function PageComponent({language}: Readonly<PageComponentProps>): ReactElement {
    const data = getPortfolioData(language);
    const text = getText(language);
    const [projectTypeFilter, setProjectTypeFilter] = useState<string>(data.projectTypes.ALL);
    const [softwareFilter, setSoftwareFilter] = useState<string>(data.software.ALL);
    const [programmingLanguageFilter, setProgrammingLanguageFilter] = useState<string>(data.programmingLanguages.ALL);

    useEffect(() => {
        setProjectTypeFilter(data.projectTypes.ALL);
    }, [data.projectTypes]);

    if(!data.projectTypes) return <div>loading...</div>

    return (
        <div className="size-full flex flex-col gap-y-2 p-2">
            <div className="flex flex-row w-full mt-2 mb-2 gap-x-4">
                <div className="flex flex-col">
                    <p className="ml-1 font-semibold">{text.programmingLanguage}</p>
                    <select className="w-48 px-3 py-2.5 bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-gray-50"
                            onChange={(e) => setProgrammingLanguageFilter(e.currentTarget.value)}>
                        {Object.values(data.programmingLanguages).map(language => (
                            <option key={language} value={language}>{language}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="ml-1 font-semibold">{text.software}</p>
                    <select className="w-48 px-3 py-2.5 bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-gray-50"
                            onChange={(e) => setSoftwareFilter(e.currentTarget.value)}>
                        {Object.values(data.software).map(software => (
                            <option key={software} value={software}>{software}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="ml-1 font-semibold">{text.projectType}</p>
                    <select className="w-48 px-3 py-2.5 bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-gray-50"
                        onChange={(e) => setProjectTypeFilter(e.currentTarget.value)}>
                        {Object.values(data.projectTypes).map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
                {data.projects
                    .filter(project => projectTypeFilter === data.projectTypes.ALL ? project : project.types.includes(projectTypeFilter))
                    .filter(project => softwareFilter === data.software.ALL ? project : project.software.includes(softwareFilter))
                    .filter(project => programmingLanguageFilter === data.programmingLanguages.ALL ? project : project.programmingLanguages.includes(programmingLanguageFilter))
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