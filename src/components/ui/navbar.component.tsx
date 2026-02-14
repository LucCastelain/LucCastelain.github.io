"use client"

import {ReactElement, useState} from "react";
import {DarkModeToggleComponent} from "@/components/ui/dark-mode/dark-mode-toggle.component";
import LanguageDropdownComponent from "@/components/ui/languages/language-dropdown.component";
import Link from "next/dist/client/link";
import {usePathname, useSearchParams} from "next/dist/client/components/navigation";
import {twMerge} from "tailwind-merge";
import {getText} from "@/data/utils/get-text";
import {FaBars} from "react-icons/fa6";

export default function NavbarComponent(): ReactElement {
    const pathname = usePathname();
    const params = useSearchParams();
    const language = params.get("lang") ?? "en";
    const text = getText(language);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <nav className={twMerge("absolute top-0 z-50 w-full h-fit bg-white border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 border-b md:shadow-none", openMenu && "shadow-md")}>
            <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-2">
                <div className="flex flex-row w-full md:w-fit">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Luc Castelain</span>
                    </a>
                    <button className="ml-auto p-2 md:hidden md:pointer-events-none rounded-lg hover:bg-neutral-200 dark:text-gray-100 dark:hover:bg-neutral-800"
                            onClick={() => setOpenMenu(!openMenu)}>
                        <FaBars className="size-5"/>
                    </button>
                </div>

                <div className={twMerge("w-full flex flex-col md:flex-row origin-top transition-all h-0 scale-y-0 md:h-fit md:scale-y-100", openMenu && "h-fit scale-y-100")}>
                    <div className="items-center justify-between w-full text-center md:w-fit md:mx-auto md:flex">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-gray-700">
                            <li>
                                <Link href={`/about?lang=${language}`}
                                      className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/about") && "text-blue-700 dark:text-blue-500")}>
                                    {text.about}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/portfolio?lang=${language}`}
                                      className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/portfolio") && "text-blue-700 dark:text-blue-500")}>
                                    {text.portfolio}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/resume?lang=${language}`}
                                      className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/resume") && "text-blue-700 dark:text-blue-500")}>
                                    {text.resume}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/references?lang=${language}`}
                                   className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/references") && "text-blue-700 dark:text-blue-500")}>
                                    {text.references}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/contact?lang=${language}`}
                                      className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/contact") && "text-blue-700 dark:text-blue-500")}>
                                    {text.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row mx-auto mt-2 md:mx-0 md:mt-0">
                        <DarkModeToggleComponent/>
                        <LanguageDropdownComponent/>
                    </div>
                </div>
            </div>
        </nav>
    );
}