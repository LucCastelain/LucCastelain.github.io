"use client"

import {ReactElement, useEffect} from "react";
import {useDarkModeContext} from "@/components/ui/dark-mode/dark-mode-provider.component";
import {twMerge} from "tailwind-merge";
import {HiMoon, HiSun} from "react-icons/hi2";

export function DarkModeToggleComponent({className}: {className?: string}): ReactElement {
    const darkMode = useDarkModeContext();

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode.darkTheme) root.classList.add("dark");
        else root.classList.remove("dark");
    });

    return (
        <button type="button" onClick={() => darkMode.toggle()} className={twMerge("group rounded-lg h-fit p-1.5 text-sm text-gray-900 hover:bg-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700", className)}>
            {darkMode.darkTheme ?
                <HiSun className="size-5 text-gray-100 transition-colors group-hover:text-yellow-300"/>
                :
                <HiMoon className="size-5 text-gray-800 transition-colors group-hover:text-purple-600"/>
            }
        </button>
    );
}