import {PropsWithChildren, ReactElement, useState} from "react";
import {twMerge} from "tailwind-merge";
import {HiMiniChevronRight} from "react-icons/hi2";

export enum DropdownPos {
    LEFT,
    RIGHT,
    CENTER,
}

export default function DropdownComponent({isOpen, position, className, children}: Readonly<PropsWithChildren<DropdownComponentProps>>): ReactElement {
    return (
        <div className={twMerge("absolute pointer-events-none w-56 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm border border-neutral-100 dark:bg-gray-700 transition-all opacity-0 -translate-y-5", isOpen && "opacity-100 translate-y-1 pointer-events-auto", position === DropdownPos.LEFT && "right-0", position === DropdownPos.CENTER && "-translate-x-1/2", className)}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {children}
            </ul>
        </div>
    );
}

DropdownComponent.Item = function Item({className, children}: Readonly<PropsWithChildren<DropdownComponentItemProps>>): ReactElement {
    return (
        <li className={twMerge("hover:bg-gray-100 block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-gray-100", className)}>
            {children}
        </li>
    );
}

DropdownComponent.DoubleDropdown = function DoubleDropdown({label, children}: Readonly<PropsWithChildren<DoubleDropdownProps>>): ReactElement {
    const [toggle, setToggle] = useState(false);

    return (
        <li className="flex flex-row">
            <button type="button" onClick={() => setToggle(!toggle)} className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-100">
                {label}
                <HiMiniChevronRight className="size-4"/>
            </button>
            <div className={twMerge("left-[11.5rem] -offset absolute z-10 w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 transition-all duration-150 scale-y-0", toggle && "scale-y-100")}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {children}
                </ul>
            </div>
        </li>
    );
}

interface DropdownComponentProps {
    isOpen?: boolean;
    position?: DropdownPos;
    className?: string;
}

interface  DropdownComponentItemProps {
    className?: string;
}

interface DoubleDropdownProps {
    label: string;
}