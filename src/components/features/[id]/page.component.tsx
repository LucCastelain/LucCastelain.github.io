"use client"

import {ReactElement} from "react";
import {getPortfolioData} from "@/data/utils/get-data";

export default function ProjectPageComponent({language, projectId}: Readonly<ProjectPageComponentProps>): ReactElement {
    const project = getPortfolioData(language).projects.find(project => project.id === projectId);

    return (
        <div className="size-full">
            {project ?
                <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                :
                <div>Ce project n&apos;a pas été trouvé</div>
            }
        </div>
    );
}

interface ProjectPageComponentProps {
    language: string;
    projectId: string;
}