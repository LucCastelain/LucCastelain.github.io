"use client"

import {ReactElement, useRef, useState} from "react";
import Image from "next/image";
import DropdownComponent from "@/components/ui/common/dropdown.component";
import {usePathname, useSearchParams} from "next/dist/client/components/navigation";

export default function LanguageDropdownComponent(): ReactElement {
    const pathname = usePathname();
    const params = useSearchParams();
    const language = params.get("lang") ?? "en";

    //const language = useLanguageContext();
    const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <button ref={buttonRef}
                    onClick={() => setLanguageDropdown(!languageDropdown)} className="p-1.5 hover:bg-gray-200 rounded-lg focus:outline-none dark:hover:bg-gray-700">
                {language === "fr" ? <Image src="/static/flags/fr.svg" height="24" width="24" className="size-5" alt="drapeau français"/> : null}
                {language === "en" ? <Image src="/static/flags/gb.svg" height="24" width="24" className="size-5" alt="english flag"/> : null}
                {language === "ch" ? <Image src="/static/flags/tw.svg" height="24" width="24" className="size-5" alt="中文"/> : null}
            </button>
            <DropdownComponent isOpen={languageDropdown}
                               reference={buttonRef}
                               onClose={() => setLanguageDropdown(false)}>
                <DropdownComponent.Item className="px-0">
                    <a href={`${pathname}?lang=fr`}
                       className="w-10 items-center flex"><Image src="/static/flags/fr.svg" width="24" height="24" alt="drapeau français" className="mx-auto"/></a>
                    {/*<button onClick={() => {language.toggle("français"); setLanguageDropdown(false);}}
                            className="w-10 items-center flex"><Image src="/static/flags/fr.svg" width="24" height="24" alt="drapeau français" className="mx-auto"/></button>*/}
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <a href={`${pathname}?lang=en`}
                       className="w-10 items-center flex"><Image src="/static/flags/gb.svg" height="24" width="24" alt="english flag" className="mx-auto"/></a>
                    {/*<button onClick={() => {language.toggle("english"); setLanguageDropdown(false);}}
                            className="w-10 items-center flex"><Image src="/static/flags/gb.svg" height="24" width="24" alt="english flag" className="mx-auto"/></button>*/}
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <a href={`${pathname}?lang=ch`}
                       className="w-10 items-center flex"><Image src="/static/flags/tw.svg" height="24" width="24" alt="中文" className="mx-auto"/></a>
                    {/*<button onClick={() => {language.toggle("中文"); setLanguageDropdown(false);}} className="w-10 items-center flex"><Image src="/static/flags/tw.svg" height="24" width="24" alt="中文" className="mx-auto"/></button>*/}
                </DropdownComponent.Item>
            </DropdownComponent>
        </div>
    );
}