"use client"

import {ReactElement} from "react";
import ResumeDataComponent from "@/data/resume-data.component";

export default function ResumePageComponent(): ReactElement {
    const data = ResumeDataComponent();

    return (
        <div className="size-full flex flex-col">
            <h3 className="mx-auto text-2xl font-bold text-sky-500">Education</h3>
            <div className="flex flex-col mx-auto w-full max-w-5xl mb-5 gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EDUCATION).reverse().map(education => (
                    <div key={education.title}
                         className="flex flex-col gap-y-1">
                        <div><span className="font-bold">{education.title}</span>
                            {education.startDate.getMonth() < 9 ? "0" : ""}{education.startDate.getMonth()+1}/{education.startDate.getFullYear()} - {education.endDate ? (education.endDate.getMonth() < 9 ? `0${education.startDate.getMonth()+1}/${education.endDate.getFullYear()}` : `${education.startDate.getMonth()+1}/${education.endDate.getFullYear()}`) : "now"}
                        </div>
                        <div className="flex flex-row gap-1">
                            {education.programmingLanguages.map(language => (
                                <div key={language}
                                     className="px-2 py-1 rounded-md bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-800">
                                    {language}
                                </div>
                            ))}
                            {education.software.map(software => (
                                <div key={software}
                                     className="px-2 py-1 rounded-md bg-sky-100 border-sky-200 dark:bg-sky-700 dark:border-sky-800">
                                    {software}
                                </div>
                            ))}
                        </div>
                        <div>{education.summary}</div>
                    </div>
                ))}
            </div>

            <h3 className="mx-auto text-2xl font-bold text-sky-500">Experiences</h3>
            <div className="flex flex-col mx-auto w-full max-w-5xl gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EXPERIENCE).reverse().map(experience => (
                    <div key={experience.title}
                         className="flex flex-col gap-y-1">
                        <div><span className="font-bold">{experience.title}</span>
                            {experience.startDate.getMonth() < 9 ? "0" : ""}{experience.startDate.getMonth()+1}/{experience.startDate.getFullYear()} - {experience.endDate ? (experience.endDate.getMonth() < 9 ? `0${experience.startDate.getMonth()+1}/${experience.endDate.getFullYear()}` : `${experience.startDate.getMonth()+1}/${experience.endDate.getFullYear()}`) : "now"}
                        </div>
                        <div className="flex flex-row gap-1">
                            {experience.programmingLanguages.map(language => (
                                <div key={language}
                                     className="px-2 py-1 rounded-md bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-800">
                                    {language}
                                </div>
                            ))}
                            {experience.software.map(software => (
                                <div key={software}
                                     className="px-2 py-1 rounded-md bg-sky-100 border-sky-200 dark:bg-sky-700 dark:border-sky-800">
                                    {software}
                                </div>
                            ))}
                        </div>
                        <div>{experience.summary}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}