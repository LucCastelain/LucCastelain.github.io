"use client"

import {ReactElement} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {ProjectData} from "@/data/utils/get-data";

export default function ProjectCardComponent({project, language}: Readonly<ProjectCardComponentProps>): ReactElement {
    const router = useRouter();

    return (
        <div className="group cursor-pointer flex flex-col w-full p-4 gap-y-2 text-center text-gray-900 dark:text-gray-50 hover:bg-neutral-100 dark:hover:bg-neutral-700"
             onClick={() => router.push(`/${language}/portfolio/${project.id}`)}>
            <h3 className="text-xl font-bold">
                {project.title}
            </h3>
            <div className="flex flex-row gap-1 justify-center">
                {project.types.map((type: string) => (
                    <div key={type}
                         className="px-2 py-1 rounded-md bg-neutral-200 border-neutral-300 dark:bg-neutral-600 dark:border-neutral-800">
                        {type}
                    </div>
                ))}
            </div>
            <div className="min-h-72 max-h-72 overflow-hidden">
                <Image src={`/me/static/${project.id}/icon.webp`}
                       alt={project.title}
                       width={500}
                       height={0}
                       style={{width: "auto", height: "100%"}}
                       className="mx-auto object-contain rounded-sm transition-all group-hover:scale-[1.02]"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-wrap gap-1">
                    {project.programmingLanguages.sort().map((language: string) => (
                        <div key={language}
                             className="px-2 py-1 rounded-md bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-800">
                            {language}
                        </div>
                    ))}
                    {project.software.sort().map((software: string) => (
                        <div key={software}
                             className="px-2 py-1 rounded-md bg-sky-100 border-sky-200 dark:bg-sky-700 dark:border-sky-800">
                            {software}
                        </div>
                    ))}
                </div>
                <p>{project.summary}</p>
            </div>
        </div>
    );
}

interface ProjectCardComponentProps {
    project: ProjectData;
    language: string;
}