"use client"

import {ReactElement} from "react";
import {DarkModeToggleComponent} from "@/components/ui/dark-mode/dark-mode-toggle.component";
import LanguageDropdownComponent from "@/components/ui/languages/language-dropdown.component";
import Link from "next/dist/client/link";
import {usePathname, useSearchParams} from "next/dist/client/components/navigation";
import {twMerge} from "tailwind-merge";

export default function NavbarComponent(): ReactElement {
    const pathname = usePathname();
    const params = useSearchParams();
    const language = params.get("lang") ?? "en";

    return (
        <nav className="absolute top-0 w-full h-fit bg-white border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 border-b">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Luc Castelain</span>
                </a>

                <div className="items-center justify-between w-full md:flex md:w-auto">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-gray-700">
                        <li>
                            <Link href={`/about?lang=${language}`}
                                  className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/about") && "text-blue-700 dark:text-blue-500")}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={`/portfolio?lang=${language}`}
                                  className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/portfolio") && "text-blue-700 dark:text-blue-500")}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href={`/resume?lang=${language}`}
                                  className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/resume") && "text-blue-700 dark:text-blue-500")}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <a href="#"
                               className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/references") && "text-blue-700 dark:text-blue-500")}>
                                References
                            </a>
                        </li>
                        <li>
                            <Link href={`/contact?lang=${language}`}
                                  className={twMerge("block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500", pathname.includes("/contact") && "text-blue-700 dark:text-blue-500")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row">
                    <DarkModeToggleComponent/>
                    <LanguageDropdownComponent/>
                </div>
            </div>
        </nav>
    );
}