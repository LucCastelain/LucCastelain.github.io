import {ReactElement} from "react";
import ExperienceComponent from "@/components/features/resume/experience.component";
import {getResumeData} from "@/data/utils/get-data";
import {getText} from "@/data/utils/get-text";
import {useSearchParams} from "next/dist/client/components/navigation";

export default function ResumePageComponent({language}: Readonly<ResumePageComponentProps>): ReactElement {
    const data = getResumeData(language);
    const text = getText(language);

    return (
        <div className="size-full flex flex-col overflow-y-auto p-6">
            <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-1 md:mb-0">{text.education}</h3>
            <div className="flex flex-col mx-auto w-full max-w-7xl mb-5 gap-y-4 md:gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EDUCATION).reverse().map(education => (
                    <ExperienceComponent key={education.id}
                                         experience={education}
                                         language={language}
                                         text={text}/>
                ))}
            </div>

            <h3 className="mx-auto text-2xl font-bold text-sky-500 mt-3 md:mt-0 mb-1 md:mb-0">{text.experiences}</h3>
            <div className="flex flex-col mx-auto w-full max-w-7xl gap-y-4 md:gap-y-3">
                {data.experiences.filter(exp => exp.type === data.types.EXPERIENCE).reverse().map(experience => (
                    <ExperienceComponent key={experience.id}
                                         experience={experience}
                                         language={language}
                                         text={text}/>
                ))}
            </div>
        </div>
    );
}

interface ResumePageComponentProps {
    language: string;
}