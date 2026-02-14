"use client"

import {Children, PropsWithChildren, ReactElement, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaOptionsType} from "embla-carousel";
import DotComponent from "@/components/ui/common/carousel/dot.component";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

export default function CarouselComponent({options, setSelectedImage, children}: Readonly<PropsWithChildren<CarouselComponentProps>>): ReactElement {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const length = Children.count(children);

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }
        emblaApi?.on("select", selectHandler);

        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);

    useEffect(() => {
        setSelectedImage(selectedIndex);
    }, [selectedIndex, setSelectedImage]);

    function scrollPrev(): void {
        if(!emblaApi) return;
        if(emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    }

    function scrollNext(): void {
        if(!emblaApi) return;
        if(emblaApi.canScrollNext()) emblaApi.scrollNext();
    }

    return (
        <div className="relative h-full">

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {children}
                </div>
            </div>
            <DotComponent itemsLength={length}
                          selectedIndex={selectedIndex}
                          emblaApi={emblaApi}/>

            <button className="absolute z-10 top-1/2 -left-12 -translate-y-1/2 text-indigo-400 dark:text-indigo-200 opacity-50 transition-all hover:scale-110"
                    onClick={scrollPrev}>
                <FaArrowCircleLeft className="size-10"/>
            </button>
            <button className="absolute z-10 top-1/2 -right-12 -translate-y-1/2 text-indigo-400 dark:text-indigo-200 opacity-50 transition-all hover:scale-110"
                    onClick={scrollNext}>
                <FaArrowCircleRight className="size-10"/>
            </button>
        </div>
    );
}
interface CarouselComponentProps {
    options: EmblaOptionsType;
    setSelectedImage: (imgIndex: number) => void;
}