"use client"

import {ReactElement, useState} from "react";
import Image from "next/image";
import DropdownComponent from "@/components/ui/common/dropdown.component";
import {useLanguageContext} from "@/components/ui/languages/languages-provider.component";

export default function LanguageDropdownComponent(): ReactElement {
    const language = useLanguageContext();
    const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);

    return (
        <div className="relative">
            <button onClick={() => setLanguageDropdown(!languageDropdown)} className="p-1.5 hover:bg-gray-200 rounded-lg focus:outline-none dark:hover:bg-gray-700">
                {language.language === "français" ? <Image src="/static/flags/fr.svg" height="24" width="24" className="size-5" alt="drapeau français"/> : null}
                {language.language === "english" ? <Image src="/static/flags/gb.svg" height="24" width="24" className="size-5" alt="english flag"/> : null}
                {language.language === "中文" ? <Image src="/static/flags/tw.svg" height="24" width="24" className="size-5" alt="中文"/> : null}
            </button>
            <DropdownComponent isOpen={languageDropdown} className="w-fit">
                <DropdownComponent.Item className="px-0">
                    <button onClick={() => {language.toggle("français"); setLanguageDropdown(false);}}
                            className="w-10 items-center flex"><Image src="/static/flags/fr.svg" width="24" height="24" alt="drapeau français" className="mx-auto"/></button>
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <button onClick={() => {language.toggle("english"); setLanguageDropdown(false);}}
                            className="w-10 items-center flex"><Image src="/static/flags/gb.svg" height="24" width="24" alt="english flag" className="mx-auto"/></button>
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <button onClick={() => {language.toggle("中文"); setLanguageDropdown(false);}} className="w-10 items-center flex"><Image src="/static/flags/tw.svg" height="24" width="24" alt="中文" className="mx-auto"/></button>
                </DropdownComponent.Item>
            </DropdownComponent>
        </div>
    );
}