"use client"

import React, {ReactElement} from "react";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/dist/client/components/navigation";

export enum TagType {
    PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE",
    SOFTWARE = "SOFTWARE",
    PROJECT_TYPE = "PROJECT_TYPE"
}

export default function TagComponent({language, label, tagType, isLink}: Readonly<TagComponentProps>): ReactElement {
    const router = useRouter();
    let colorClasses = "";

    switch (tagType) {
        case TagType.PROGRAMMING_LANGUAGE:
            colorClasses = "bg-green-100 border-transparent dark:bg-green-700 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700";
            break;
        case TagType.SOFTWARE:
            colorClasses = "bg-sky-100 border-transparent dark:bg-sky-700 dark:border-sky-800 hover:border-sky-200 dark:hover:border-sky-700";
            break;
        default:
            colorClasses = "bg-neutral-200 border-transparent dark:bg-neutral-600 dark:border-transparent hover:border-neutral-300 dark:hover:border-neutral-700";
    }

    function handleTagClick(event: React.MouseEvent): void {
        if(!isLink) return;

        event.preventDefault();
        const params = new URLSearchParams();

        switch (tagType) {
            case TagType.PROGRAMMING_LANGUAGE:
                params.set("programming-language", label);
                break;
            case TagType.SOFTWARE:
                params.set("software", label);
                break;
            default:
                params.set("project-type", label);
                break;
        }

        router.push(`/${language}/portfolio?${params.toString()}`);
    }

    return (
        <button className={twMerge("px-2 py-1 rounded-md shadow-sm border", colorClasses, isLink && "cursor-pointer")}
                onClick={handleTagClick}>
            {label}
        </button>
    );
}

interface TagComponentProps {
    language: string;
    label: string;
    tagType: TagType;
    isLink: boolean;
}