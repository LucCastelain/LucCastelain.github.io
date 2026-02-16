import {ReactElement} from "react";
import {getText} from "@/data/utils/get-text";
import TextWithLineBreaksComponent from "@/components/ui/common/text-with-line-breaks.component";
import Image from "next/image";

export default function ReferencesPageComponent({language}: Readonly<ReferencesPageComponent>): ReactElement {
    const text = getText(language);

    return (
        <div className="size-full flex flex-col items-center p-6">
            <h3 className="mx-auto text-2xl font-bold text-sky-500 mb-5">{text.references}</h3>
            <div className="flex flex-col max-w-7xl mx-auto size-full text-center gap-y-4 overflow-y-auto">
                <TextWithLineBreaksComponent text={text.referencesIHave}
                                             className="text-left"/>
                <div className="size-full flex flex-wrap justify-around">
                    <a href="/fiu_reference.pdf"
                       target="_blank"
                       rel="noopeneexitr noreferrer"
                       className="group h-fit p-3 rounded-lg transition-all hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        <figure>
                            <Image src="/static/references/fiu_reference.webp"
                                   alt="FIU reference"
                                   width={500}
                                   height={0}
                                   style={{width: "auto", height: "100%"}}
                                   className="transition-all md:max-w-96 border group-hover:border-0 dark:border-0"/>
                            <figcaption>{text.fiuReference}</figcaption>
                        </figure>
                    </a>
                    <a href="/dosisoft_reference.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group h-fit p-3 rounded-lg transition-all hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        <figure>
                            <Image src="/static/references/dosisoft_reference.webp"
                                   alt="Dosisoft reference"
                                   width={500}
                                   height={0}
                                   style={{width: "auto", height: "100%"}}
                                   className="transition-all md:max-w-96 border group-hover:border-0 dark:border-0"/>
                            <figcaption>{text.dosisoftReference}</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    );
}

interface ReferencesPageComponent {
    language: string;
}