"use client"

import {ReactElement} from "react";
import DataComponent from "@/data/data.component";

export default function ProjectPageComponent({projectId}: Readonly<ProjectPageComponentProps>): ReactElement {
    const project = DataComponent().projects.find(project => project.id === projectId);

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
    projectId: string;
}