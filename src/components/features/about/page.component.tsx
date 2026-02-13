"use client"

import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";

export default function AboutPageComponent({language}: Readonly<AboutPageComponentProps>): ReactElement {
    const text = getText(language);

    return (
        <div className="size-full flex flex-col items-center mt-24">
            <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-5">Luc Castelain</h3>
            <div className="max-w-5xl mx-auto text-center">
                <TextWithLineBreaksComponent text={text.aboutMe}/>
            </div>
        </div>
    );
}

interface AboutPageComponentProps {
    language: string;
}