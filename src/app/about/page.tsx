import {ReactElement} from "react";
import AboutPageComponent from "@/components/features/about/page.component";

export default async function AboutPage({searchParams}: Readonly<AboutPageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;

    return (
        <AboutPageComponent language={lang ?? "en"}/>
    );
}

interface AboutPageProps {
    searchParams: Promise<{ lang: string }>;
}
