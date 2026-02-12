"use client"

import {ReactElement} from "react";
import ExperienceComponent from "@/components/features/resume/experience.component";
import {getResumeData} from "@/data/utils/get-data";

export default function ResumePageComponent({language}: Readonly<ExcperiencePageComponentProps>): ReactElement {
    const data = getResumeData(language);

    return (
        <div className="size-full flex flex-col overflow-y-auto p-6">
            <h3 className="mx-auto text-2xl font-bold text-sky-500">Education</h3>
            <div className="flex flex-col mx-auto w-full max-w-5xl mb-5 gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EDUCATION).reverse().map(education => (
                    <ExperienceComponent key={education.id} experience={education}/>
                ))}
            </div>

            <h3 className="mx-auto text-2xl font-bold text-sky-500">Experiences</h3>
            <div className="flex flex-col mx-auto w-full max-w-5xl gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EXPERIENCE).reverse().map(experience => (
                    <ExperienceComponent key={experience.id} experience={experience}/>
                ))}
            </div>
        </div>
    );
}

interface ExcperiencePageComponentProps {
    language: string;
}