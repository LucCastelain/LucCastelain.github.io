"use client"

import {ReactElement} from "react";
import {useLanguageContext} from "@/components/ui/languages/languages-provider.component";
import {EN_TEXT} from "@/data/text.en";
import {FR_TEXT} from "@/data/text.fr";
import {CH_TEXT} from "@/data/text.ch";

export default function ContactPageComponent(): ReactElement {
    const language = useLanguageContext();
    let data = EN_TEXT;

    switch(language.language) {
        case "français":
            data = FR_TEXT;
            break;
        case "中文":
            data = CH_TEXT;
            break;
        default:
            data = EN_TEXT;
    }

    return (
        <div className="size-full flex flex-col items-center mt-24">
            <h3 className="mx-auto text-2xl font-bold text-sky-500">{data.contact}</h3>
            <div className="gap-y-3 flex flex-col">
                <div className="flex flex-row items-center">
                    <p>You can contact me by email: </p>
                    <a href="mailto:luc.castelain@icloud.com"
                       className="hover:underline">
                        luc.castelain@icloud.com
                    </a>
                </div>
                <a href="https://www.linkedin.com/in/luc-castelain-714307178/"
                   className="hover:underline">
                    Here is my LinkedIn
                </a>
            </div>
            <p className="mt-14">Yeah, I know this page is pretty empty...</p>
        </div>
    );
}