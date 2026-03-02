import {ReactElement} from "react";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import {ExperienceData} from "@/data/utils/get-data";
import {TextData} from "@/data/utils/get-text";
import {twMerge} from "tailwind-merge";

export default function ExperienceComponent({experience, language, text}: Readonly<ExperienceComponentProps>): ReactElement {
    const startDateMonth = experience.startDate.getMonth() === 0 ? "12" : (experience.startDate.getMonth() < 10 ? `0${experience.startDate.getMonth()}` : `${experience.startDate.getMonth()}`);
    const endDateMonth = experience.endDate ? (experience.endDate.getMonth() === 0 ? "12" : (experience.endDate.getMonth() < 10 ? `0${experience.endDate.getMonth()}` : `${experience.endDate.getMonth()}`)) : "";

    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row md:items-center">
                <p className="font-bold text-lg">{experience.title}</p>
                <p className="md:ml-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {language === "ch-zh" ?
                        <>{startDateMonth}月{experience.startDate.getFullYear()}年 - {experience.endDate ? `${endDateMonth}月${experience.endDate?.getFullYear()}年` : text.now}</>
                        :
                        <>{startDateMonth}/{experience.startDate.getFullYear()} - {experience.endDate ? `${endDateMonth}/${experience.endDate.getFullYear()}` : text.now}</>
                    }
                </p>
            </div>
            <div className="flex flex-wrap items-center">
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
                <p className={twMerge(language !== "ch-zh" && "mr-1")}>{language === "ch-zh" ? "，" : ","}</p>
                <p>{experience.location}</p>
            </div>
            <div className="flex flex-wrap gap-1">
                {experience.programmingLanguages.sort().map((language: string) => (
                    <div key={language}
                         className="px-2 py-1 rounded-md bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-800">
                        {language}
                    </div>
                ))}
                {experience.software.sort().map((software: string) => (
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
    language: string;
    text: TextData;
}