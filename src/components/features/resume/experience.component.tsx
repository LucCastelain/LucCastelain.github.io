import {ReactElement} from "react";
import {ExperienceData} from "@/data/resume-data.component";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";

export default function ExperienceComponent({experience}: Readonly<ExperienceComponentProps>): ReactElement {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex flex-row items-center">
                <p className="font-bold text-lg">{experience.title}</p>
                <p className="ml-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {experience.startDate.getMonth() < 9 ? "0" : ""}{experience.startDate.getMonth()+1}/{experience.startDate.getFullYear()} - {experience.endDate ? (experience.endDate.getMonth() < 9 ? `0${experience.startDate.getMonth()+1}/${experience.endDate.getFullYear()}` : `${experience.startDate.getMonth()+1}/${experience.endDate.getFullYear()}`) : "now"}
                </p>
            </div>
            <div className="flex flex-row items-center">
                {experience.companyWebsite ?
                    <a href={experience.companyWebsite}
                       className="text-sky-500 dark:text-sky-300 hover:underline"
                       target="_blank">
                        {experience.company}
                    </a>
                    :
                    <p className="text-sky-500 dark:text-sky-300">
                        {experience.company}
                    </p>
                }
                <p>, {experience.location}</p>
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
            <TextWithLineBreaksComponent text={experience.summary}/>
        </div>
    );
}

interface ExperienceComponentProps {
    experience: ExperienceData;
}