import {ReactElement} from "react";
import {Keypoint} from "@/data/utils/get-data";
import {HiArrowSmallRight} from "react-icons/hi2";
import {TextData} from "@/data/utils/get-text";

export default function KeypointComponent({keypoint, text}: Readonly<KeypointComponentProps>): ReactElement {
    return (
        <div className="flex flex-col p-6 gap-y-2 bg-white/60 rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800/60 dark:border-neutral-700 transition-all hover:rotate-2">
            <div className="flex flex-row items-center">
                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {keypoint.title}
                </p>
                {keypoint.description ? null :
                    <a href={keypoint.link}
                       target="_blank"
                       className="ml-auto inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        {text.seeMore}
                        <HiArrowSmallRight className="size-5"/>
                    </a>
                }
            </div>
            {!keypoint.description ? null :
                <p className="font-light text-gray-500 dark:text-neutral-400">
                    {keypoint.description}
                </p>
            }
            {!keypoint.link || !keypoint.description ? null :
                <div className="flex flex-row">
                    <a href={keypoint.link}
                       target="_blank"
                       className="ml-auto inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        {text.seeMore}
                        <HiArrowSmallRight className="size-5"/>
                    </a>
                </div>
            }
        </div>
    );
}

interface KeypointComponentProps {
    keypoint: Keypoint;
    text: TextData;
}