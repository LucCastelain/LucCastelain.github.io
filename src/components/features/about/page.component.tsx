"use client"

import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import Image from "next/image";

export default function AboutPageComponent({language}: Readonly<AboutPageComponentProps>): ReactElement {
    const text = getText(language);

    return (
        <div className="flex flex-row gap-x-2">
            <Image src="/static/me.webp"
                   alt="Luc Castelain"
                   width={500}
                   height={0}
                   style={{width: "auto", height: "100%"}}
                   className=""/>
            <div className="size-full flex flex-col items-center mt-24 p-4">
                <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-10">Luc Castelain</h3>
                <div className="max-w-5xl mx-auto text-left">
                    <TextWithLineBreaksComponent text={text.aboutMe}/>
                </div>
            </div>
        </div>
    );
}

interface AboutPageComponentProps {
    language: string;
}