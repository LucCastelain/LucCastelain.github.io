"use client"

import {ReactElement, useEffect, useState, useTransition} from "react";
import {getPortfolioData} from "@/data/utils/get-data";
import CarouselComponent from "@/components/ui/common/carousel/carousel.component";
import Image from "next/image";
import {FastAverageColor, FastAverageColorResult} from "fast-average-color";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import {getText} from "@/data/utils/get-text";
import KeypointComponent from "@/components/features/portfolio/[id]/keypoint.component";
import TagComponent, {TagType} from "@/components/ui/common/tag.component";

export default function ProjectPageComponent({projectId, language}: Readonly<ProjectPageComponentProps>): ReactElement {
    const project = getPortfolioData(language).projects.find(project => project.id === projectId);
    const text = getText(language);

    const [isPending, startTransition] = useTransition();
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [averageColor, setAverageColor] = useState<FastAverageColorResult>();
    const fac = new FastAverageColor();

    useEffect(() => {
        if(!project) return;
        if(project.images.length === 0) return;
        if(!project.images[selectedImage].endsWith(".png") &&
            !project.images[selectedImage].endsWith(".jpg") &&
            !project.images[selectedImage].endsWith(".webp")) return;

        startTransition(async () => {
            try {
                const color = await fac.getColorAsync(`/static/${project.id}/${project.images[selectedImage]}`);
                setAverageColor(color);
            } catch (e) {
                console.log("cannot set average color: ", e);
            }
        });
    }, [selectedImage]);

    return (
        <div className="size-full flex"
             style={{backgroundColor: averageColor ? `rgba(${averageColor.value[0]}, ${averageColor.value[1]}, ${averageColor.value[2]}, 0.1)` : "#fff"}}>
            <div className="size-full max-w-7xl mx-auto flex flex-col p-4 gap-y-2 overflow-y-auto">
                {project ?
                    <>
                        <div className="ml-1 flex flex-row items-end gap-x-1">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <p className="text-xl text-neutral-500 dark:text-neutral-400">• {project.creationDate} •</p>
                        </div>
                        <div className="flex flex-row items-center gap-x-1">
                            {project.types.map((type: string) =>
                                <TagComponent key={type} language={language} label={type} tagType={TagType.PROJECT_TYPE} isLink={true}/>
                            )}
                        </div>
                        {project.images.length === 0 ? null :
                            <div className="w-[80%] mx-auto transition-all rounded-lg">
                                <CarouselComponent options={{loop: true}} setSelectedImage={setSelectedImage}>
                                    {project.images.map((src, i) => {
                                        return (
                                            <div key={i}
                                                 className="relative h-72 md:h-96 flex-[0_0_100%]">
                                                {src.endsWith(".mp4") ?
                                                    <video width={500}
                                                           height={0}
                                                           style={{width: "auto", height: "100%"}}
                                                           className="mx-auto"
                                                           controls
                                                           preload="metadata">
                                                        <source src={`/static/${project.id}/${src}`} type="video/mp4" />
                                                        {text.browserNoSupportVideo}
                                                    </video>
                                                    :
                                                    <Image src={`/static/${project.id}/${src}`}
                                                           width={500}
                                                           height={0}
                                                           style={{width: "auto", height: "100%"}}
                                                           className="mx-auto object-contain"
                                                           loading="lazy"
                                                           alt={src}/>
                                                }
                                            </div>
                                        );
                                    })}
                                </CarouselComponent>
                            </div>
                        }
                        <div className="flex flex-col gap-y-2 md:gap-x-4">
                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-wrap gap-1">
                                    {project.programmingLanguages.sort().map((progLanguage: string) =>
                                        <TagComponent key={progLanguage} language={language} label={progLanguage} tagType={TagType.PROGRAMMING_LANGUAGE} isLink={true}/>
                                    )}
                                    {project.software.sort().map((software: string) =>
                                        <TagComponent key={software} language={language} label={software} tagType={TagType.SOFTWARE} isLink={true}/>
                                    )}
                                </div>
                                <TextWithLineBreaksComponent text={project.description}
                                                             className="w-full"/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-2 py-2 md:px-2">
                                {project.keypoints.map((keypoint, index) => (
                                    <KeypointComponent key={index}
                                                       keypoint={keypoint}
                                                       text={text}/>
                                ))}
                            </div>
                        </div>
                    </>
                    :
                    <div>{text.projectNotFound}</div>
                }
            </div>
        </div>
    );
}

interface ProjectPageComponentProps {
    projectId: string;
    language: string;
}