"use client"

import {ReactElement, useCallback, useEffect, useRef, useState} from "react";
import ProjectCardComponent from "@/components/ui/project-card.component";
import {getPortfolioData} from "@/data/utils/get-data";
import {getText} from "@/data/utils/get-text";
import {HiMiniArrowLeft} from "react-icons/hi2";
import {twMerge} from "tailwind-merge";
import {IoFilter} from "react-icons/io5";

export default function PortfolioPageComponent({language}: Readonly<PortfolioPageComponentProps>): ReactElement {
    const data = getPortfolioData(language);
    const text = getText(language);
    const [projectTypeFilter, setProjectTypeFilter] = useState<string>(data.projectTypes.ALL);
    const [softwareFilter, setSoftwareFilter] = useState<string>(data.software.ALL);
    const [programmingLanguageFilter, setProgrammingLanguageFilter] = useState<string>(data.programmingLanguages.ALL);
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const filtersRef = useRef<HTMLDivElement>(null);

    const closeDropdown = useCallback((e: MouseEvent): void => {
        if(showFilters && !filtersRef.current?.contains(e.target as Node)) {
            setShowFilters(false);
        }
    }, [showFilters]);

    useEffect(() => {
        document.addEventListener("click", closeDropdown);
        return (): void => {document.removeEventListener("click", closeDropdown);};
    }, [closeDropdown]);

    if(!data.projectTypes) return <div>loading...</div>

    return (
        <div className="size-full max-w-7xl mx-auto flex flex-col">
            <div className={twMerge("md:hidden absolute w-full h-[calc(100%-3rem)] z-10 bg-gray-900 dark:bg-neutral-800 opacity-50", !showFilters && "hidden")}/>
            <div ref={filtersRef}
                 className={twMerge("absolute left-0 z-20 h-[calc(100%-3rem)] md:h-fit w-fit md:w-full bg-white dark:bg-neutral-900 dark:text-gray-100 md:bg-transparent md:z-0 md:static flex flex-col md:flex-row p-2 md:p-0 md:px-2 md:my-2 gap-4 transition-all -translate-x-full md:translate-x-0", showFilters && "translate-x-0")}>
                <button onClick={() => setShowFilters(false)}
                        className="md:hidden md:pointer-events-none size-fit p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800">
                    <HiMiniArrowLeft className="size-5"/>
                </button>
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
            <button onClick={() => setShowFilters(true)}
                    className="flex flex-row gap-x-1 items-center md:hidden md:pointer-events-none mx-1 my-2 w-fit p-2 rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-600">
                <IoFilter className="size-5"/>
                <p>{text.filters}</p>
            </button>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto p-2">
                {data.projects
                    .filter(project => projectTypeFilter === data.projectTypes.ALL ? project : project.types.includes(projectTypeFilter))
                    .filter(project => softwareFilter === data.software.ALL ? project : project.software.includes(softwareFilter))
                    .filter(project => programmingLanguageFilter === data.programmingLanguages.ALL ? project : project.programmingLanguages.includes(programmingLanguageFilter))
                    .map(project => (
                    <ProjectCardComponent key={project.id}
                                          project={project}
                                          language={language}/>
                ))}
            </div>
        </div>
    );
}

interface PortfolioPageComponentProps {
    language: string;
}