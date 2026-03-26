import {ReactElement} from "react";
import Image from "next/image";
import {ProjectData} from "@/data/utils/get-data";
import Link from "next/dist/client/link";
import TagComponent, {TagType} from "@/components/ui/common/tag.component";

export default function ProjectCardComponent({project, language}: Readonly<ProjectCardComponentProps>): ReactElement {
    return (
        <Link className="group cursor-pointer flex flex-col w-full p-4 gap-y-2 text-center text-gray-900 dark:text-gray-50 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              href={`/${language}/portfolio/${project.id}`}>
            <h3 className="text-xl font-bold">
                {project.title}
            </h3>
            <div className="flex flex-row gap-1 justify-center">
                {project.types.map((type: string) =>
                    <TagComponent key={type} language={language} label={type} tagType={TagType.PROJECT_TYPE}/>
                )}
            </div>
            <div className="min-h-72 max-h-72 overflow-hidden">
                <Image src={`/static/${project.id}/icon.webp`}
                       alt={project.title}
                       width={500}
                       height={0}
                       style={{width: "auto", height: "100%"}}
                       className="mx-auto object-contain rounded-sm transition-all group-hover:scale-[1.02]"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-wrap gap-1">
                    {project.programmingLanguages.sort().map((progLanguage: string) =>
                        <TagComponent key={progLanguage} language={language} label={progLanguage} tagType={TagType.PROGRAMMING_LANGUAGE}/>
                    )}
                    {project.software.sort().map((software: string) =>
                        <TagComponent key={software} language={language} label={software} tagType={TagType.SOFTWARE}/>
                    )}
                </div>
                <p>{project.summary}</p>
            </div>
        </Link>
    );
}

interface ProjectCardComponentProps {
    project: ProjectData;
    language: string;
}