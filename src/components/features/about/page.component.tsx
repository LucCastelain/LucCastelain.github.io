import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import Image from "next/image";
import {HiMiniArrowTurnRightDown} from "react-icons/hi2";

export default function AboutPageComponent({language}: Readonly<AboutPageComponentProps>): ReactElement {
    const text = getText(language);

    return (
        <div className="flex flex-row max-w-7xl mx-auto gap-x-2 size-full overflow-y-auto">
            <Image src="/static/me.webp"
                   alt="Luc Castelain"
                   width={500}
                   height={0}
                   style={{width: "auto", height: "100%"}}
                   className="hidden md:block"/>
            <div className="flex flex-col items-center md:mt-24 p-6 md:p-4">
                <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-1 md:mb-10">Luc Castelain</h3>
                <div className="max-w-5xl mx-auto text-left">
                    <TextWithLineBreaksComponent text={text.aboutMe}/>
                </div>
                <div className="flex flex-col py-4 gap-y-1 md:hidden">
                    <div className="mx-auto flex flex-row items-end">
                        <p>That's me</p>
                        <HiMiniArrowTurnRightDown className=""/>
                    </div>
                    <Image src="/static/me_small.webp"
                           alt="Luc Castelain"
                           width={500}
                           height={0}
                           style={{width: "auto", height: "100%"}}
                           className="rounded-md object-contain"/>
                </div>
            </div>
        </div>
    );
}

interface AboutPageComponentProps {
    language: string;
}