import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import {FaLinkedin} from "react-icons/fa6";

export default function ContactPageComponent({language}: Readonly<ContactPageComponent>): ReactElement {
    const text = getText(language);

    return (
        <div className="size-full max-w-7xl mx-auto flex flex-col items-center mt-24 p-4">
            <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-5">{text.contact}</h3>
            <div className="gap-y-3 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center gap-x-1">
                    <p>{text.canContactMeByEmail}</p>
                    <a href="mailto:luc.castelain@icloud.com"
                       className="hover:underline font-semibold">
                        luc.castelain@icloud.com
                    </a>
                </div>
                <div className="flex flex-row items-center gap-x-1">
                    <p>{text.orOn}</p>
                    <a href="https://www.linkedin.com/in/luc-castelain-714307178/"
                       className="flex flex-row rounded-lg p-2 border text-gray-100 bg-[#0A66C2] hover:bg-[#0a5daf] border-[#0b61b7] hover:border-[#0956a3] dark:bg-[#0a5daf] dark:hover:bg-[#0956a3]">
                        <FaLinkedin className="size-6"/>
                        LinkedIn
                    </a>
                    <p>{text.afterOrOn}</p>
                </div>
            </div>
            <p className="mt-14">{text.pageIsEmpty}</p>
        </div>
    );
}

interface ContactPageComponent {
    language: string;
}