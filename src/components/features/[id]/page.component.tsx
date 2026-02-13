"use client"

import {ReactElement, useEffect, useState, useTransition} from "react";
import {getPortfolioData} from "@/data/utils/get-data";
import CarouselComponent from "@/components/ui/common/carousel/carousel.component";
import Image from "next/image";
import {FastAverageColor, FastAverageColorResult} from "fast-average-color";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import {getText} from "@/data/utils/get-text";
import {HiArrowTopRightOnSquare} from "react-icons/hi2";

export default function ProjectPageComponent({language, projectId}: Readonly<ProjectPageComponentProps>): ReactElement {
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
            const color = await fac.getColorAsync(`/static/${project.id}/${project.images[selectedImage]}`);
            setAverageColor(color);
        });
    }, [selectedImage]);

    return (
        <div className="size-full flex flex-col p-4 gap-y-2 overflow-y-auto"
             style={{backgroundColor: averageColor ? `rgba(${averageColor.value[0]}, ${averageColor.value[1]}, ${averageColor.value[2]}, 0.1)` : "#fff"}}>
            {project ?
                <>
                    <div className="flex flex-row items-center gap-x-1">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.types.map((type: string) => (
                            <div key={type}
                                 className="px-2 py-1 rounded-md bg-neutral-200 border-neutral-300 dark:bg-neutral-600 dark:border-neutral-800">
                                {type}
                            </div>
                        ))}
                    </div>
                    <div className="w-[80%] mx-auto transition-all rounded-lg">
                        <CarouselComponent options={{loop: true}} setSelectedImage={setSelectedImage}>
                            {project.images.map((src, i) => {
                                return (
                                    <div key={i}
                                         className="relative h-96 flex-[0_0_100%]">
                                        {src.endsWith(".mp4") ?
                                            <video width={500}
                                                   height={0}
                                                   style={{width: "auto", height: "100%"}}
                                                   className="mx-auto"
                                                   controls
                                                   preload="none">
                                                <source src={`/static/${project.id}/${src}`} type="video/mp4" />
                                                {text.browserNoSupportVideo}
                                            </video>
                                            :
                                            <Image src={`/static/${project.id}/${src}`}
                                                   width={500}
                                                   height={0}
                                                   style={{width: "auto", height: "100%"}}
                                                   className="mx-auto"
                                                   alt={src}/>
                                        }
                                    </div>
                                );
                            })}
                        </CarouselComponent>
                    </div>
                    <div className="flex flex-row gap-x-4">
                        <div className="w-10 grow flex flex-col gap-y-2">
                            <div className="flex flex-wrap gap-1">
                                {project.programmingLanguages.sort().map((language: string) => (
                                    <div key={language}
                                         className="px-2 py-1 rounded-md bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-800">
                                        {language}
                                    </div>
                                ))}
                                {project.software.sort().map((software: string) => (
                                    <div key={software}
                                         className="px-2 py-1 rounded-md bg-sky-100 border-sky-200 dark:bg-sky-700 dark:border-sky-800">
                                        {software}
                                    </div>
                                ))}
                            </div>
                            <TextWithLineBreaksComponent text={project.description}
                                                         className="w-full"/>
                        </div>
                        <ul className="w-[40%] flex flex-col gap-y-2">
                            {project.keypoints.map(keypoint => (
                                <li key={keypoint.title}>
                                    {keypoint.link ?
                                        <a className="flex flex-row gap-x-1 items-center font-bold underline hover:text-blue-600 dark:hover:text-blue-500"
                                           target="_blank"
                                           href={keypoint.link}>
                                            <p>{keypoint.title}</p>
                                            <HiArrowTopRightOnSquare className="size-5"/>
                                        </a>
                                        :
                                        <p className="font-bold">{keypoint.title}</p>
                                    }
                                    <p className="ml-1">{keypoint.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
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