"use client"

import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";

export default function ReferencesPageComponent({language}: Readonly<ReferencesPageComponentProps>): ReactElement {
    const text = getText(language);

    return (
        <div className="size-full flex flex-col items-center p-6">
            <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-5">{text.references}</h3>
            <div className="max-w-5xl mx-auto text-center">
                <TextWithLineBreaksComponent text={text.referencesIHave}/>
            </div>
        </div>
    );
}

interface ReferencesPageComponentProps {
    language: string;
}