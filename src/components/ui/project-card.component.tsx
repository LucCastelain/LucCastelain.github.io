"use client"

import {ReactElement} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {ProjectData} from "@/data/data.component";

export default function ProjectCardComponent({project}: Readonly<ProjectCardComponentProps>): ReactElement {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full p-4 gap-y-2 text-center text-gray-900 dark:text-gray-50 hover:bg-neutral-100 dark:hover:bg-neutral-700"
             onClick={() => router.push(project.id)}>
            <h3 className="text-xl font-bold">
                {project.title}
            </h3>
            <div className="max-h-72">
            <Image src={`/static/${project.id}/icon.png`}
                   alt={project.title}
                   width={500}
                   height={0}
                   style={{width: "auto", height: "100%"}}
                   className="mx-auto min-h-72 max-h-72 rounded-sm"/>
            </div>
            <div className="flex flex-row">
                <p>type: {project.types.slice(1).join(", ")}</p>
            </div>
        </div>
    );
}

interface ProjectCardComponentProps {
    project: ProjectData;
}