import {ReactElement} from "react";
import {twMerge} from "tailwind-merge";
import {EmblaCarouselType} from "embla-carousel";

export default function DotComponent({itemsLength, selectedIndex, emblaApi}: Readonly<DotComponentProps>): ReactElement {
    const array: number[] = new Array(itemsLength).fill(0);

    return (
        <div className="flex gap-1 my-2 justify-center -translate-y-5">
            {array.map((_, index) => (
                <button key={index}
                        className={twMerge("size-2 rounded-full transition-all duration-300 bg-indigo-400 dark:bg-indigo-300 opacity-50", index === selectedIndex && "bg-indigo-600 dark:bg-indigo-500")}
                        onClick={() => emblaApi?.scrollTo(index)}></button>
            ))}
        </div>
    );
}

interface DotComponentProps {
    itemsLength: number;
    selectedIndex: number;
    emblaApi: EmblaCarouselType | undefined;
}