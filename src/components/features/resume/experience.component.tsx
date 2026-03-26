import {ReactElement} from "react";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import {ExperienceData} from "@/data/utils/get-data";
import {TextData} from "@/data/utils/get-text";
import {twMerge} from "tailwind-merge";
import TagComponent, {TagType} from "@/components/ui/common/tag.component";

export default function ExperienceComponent({experience, language, text}: Readonly<ExperienceComponentProps>): ReactElement {
    const startDateMonth = experience.startDate.getMonth() < 9 ? `0${experience.startDate.getMonth()+1}` : `${experience.startDate.getMonth()+1}`;
    const endDateMonth = experience.endDate ? (experience.endDate.getMonth() < 9 ? `0${experience.endDate.getMonth()+1}` : `${experience.endDate.getMonth()+1}`) : "";

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
                {experience.programmingLanguages.sort().map((progLanguage: string) =>
                    <TagComponent key={progLanguage} language={language} label={progLanguage} tagType={"PROGRAMMING_LANGUAGE" as TagType}/>
                )}
                {experience.software.sort().map((software: string) =>
                    <TagComponent key={software} language={language} label={software} tagType={"SOFTWARE" as TagType}/>
                )}
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