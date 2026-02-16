"use client"

import {ReactElement, useRef, useState} from "react";
import Image from "next/image";
import DropdownComponent from "@/components/ui/common/dropdown.component";
import {usePathname, useSearchParams} from "next/dist/client/components/navigation";
import Link from "next/dist/client/link";

export default function LanguageDropdownComponent({language}: Readonly<LanguageDropdownComponentProps>): ReactElement {
    const pathname = usePathname();
    const params = pathname.split("/") ?? [""];
    params.shift(); // remove first element => ''
    params.shift(); // remove first element => language param
    const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <button ref={buttonRef}
                    onClick={() => setLanguageDropdown(!languageDropdown)} className="p-1.5 hover:bg-gray-200 rounded-lg focus:outline-none dark:hover:bg-gray-700">
                {language === "fr" ? <Image src="/me/static/flags/fr.svg" height="24" width="24" className="size-5" alt="drapeau français"/> : null}
                {language === "en" ? <Image src="/me/static/flags/gb.svg" height="24" width="24" className="size-5" alt="english flag"/> : null}
                {language === "ch-zh" ? <Image src="/me/static/flags/tw.svg" height="24" width="24" className="size-5" alt="中文"/> : null}
            </button>
            <DropdownComponent isOpen={languageDropdown}
                               reference={buttonRef}
                               onClose={() => setLanguageDropdown(false)}>
                <DropdownComponent.Item className="px-0">
                    <Link href={`/fr/${params.join("/")}`}
                       className="w-10 items-center flex"><Image src="/me/static/flags/fr.svg" width="24" height="24" alt="drapeau français" className="mx-auto"/></Link>
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <Link href={`/en/${params.join("/")}`}
                       className="w-10 items-center flex"><Image src="/me/static/flags/gb.svg" height="24" width="24" alt="english flag" className="mx-auto"/></Link>
                </DropdownComponent.Item>
                <DropdownComponent.Item className="px-0">
                    <Link href={`/ch-zh/${params.join("/")}`}
                       className="w-10 items-center flex"><Image src="/me/static/flags/tw.svg" height="24" width="24" alt="中文" className="mx-auto"/></Link>
                </DropdownComponent.Item>
            </DropdownComponent>
        </div>
    );
}

interface LanguageDropdownComponentProps {
    language: string;
}