"use client";

import {
    autoUpdate,
    flip,
    FloatingPortal,
    offset,
    shift,
    useDismiss,
    useFloating,
    useHover,
    useInteractions,
} from "@floating-ui/react";
import {PropsWithChildren, ReactElement, RefObject, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {HiMiniChevronRight} from "react-icons/hi2";

export default function DropdownComponent({
                                              isOpen,
                                              position = DropdownPos.RIGHT,
                                              className,
                                              children,
                                              reference,
                                              onClose,
                                          }: Readonly<PropsWithChildren<DropdownComponentProps>>): ReactElement | null {
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: (open: boolean) => !open && onClose?.(),
        placement:
            position === DropdownPos.LEFT
                ? "bottom-start"
                : position === DropdownPos.CENTER
                    ? "bottom"
                    : "bottom-end",
        middleware: [
            offset(8),
            flip(),
            shift({ padding: 8 }),
        ],
        whileElementsMounted: autoUpdate,
    });

    useEffect(() => {
        if (reference.current) {
            refs.setReference(reference.current);
        }
    }, [reference, refs]);

    const dismiss = useDismiss(context);
    const { getFloatingProps } = useInteractions([dismiss]);

    return (
        <FloatingPortal>
            <div ref={refs.setFloating}
                 style={floatingStyles}
                 {...getFloatingProps()}
                 className={twMerge("z-50 rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm dark:shadow-neutral-800 transition-all duration-150 origin-top scale-95 data-[open=true]:opacity-100 data-[open=true]:scale-100", className, !isOpen && "opacity-0 pointer-events-none")}
                 data-open={isOpen}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {children}
                </ul>
            </div>
        </FloatingPortal>
    );
}

DropdownComponent.Item = function Item({className, children}: Readonly<PropsWithChildren<DropdownComponentItemProps>>): ReactElement {
    return (
        <li className={twMerge("block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600", className)}>
            {children}
        </li>
    );
};

DropdownComponent.DoubleDropdown = function DoubleDropdown({label, children,}: Readonly<PropsWithChildren<DoubleDropdownProps>>): ReactElement {
    const [open, setOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open,
        onOpenChange: setOpen,
        placement: "right-start",
        middleware: [
            offset(4),
            flip(),
            shift({ padding: 8 }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, { delay: { open: 100, close: 100 } });
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss,]);

    return (
        <li className="relative flex">
            <button ref={refs.setReference}
                    {...getReferenceProps()}
                    className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                {label}
                <HiMiniChevronRight className="size-4" />
            </button>

            {open && (
                <FloatingPortal>
                    <div ref={refs.setFloating}
                         style={floatingStyles}
                         {...getFloatingProps()}
                         className="z-50 w-56 rounded-lg border border-neutral-100 bg-white shadow transition-all duration-150 origin-left scale-95 opacity-0 data-[open=true]:scale-100 data-[open=true]:opacity-100"
                         data-open={open}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {children}
                        </ul>
                    </div>
                </FloatingPortal>
            )}
        </li>
    );
};

interface DropdownComponentProps {
    isOpen?: boolean;
    position?: DropdownPos;
    className?: string;
    reference: RefObject<HTMLElement | null>;
    onClose?: () => void;
}

interface DropdownComponentItemProps {
    className?: string;
}

interface DoubleDropdownProps {
    label: string;
}

export enum DropdownPos {
    LEFT,
    RIGHT,
    CENTER,
}