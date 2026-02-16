import {ReactElement} from "react";
import AboutPageComponent from "@/components/features/about/page.component";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function AboutPage({params}: Readonly<AboutPageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <AboutPageComponent language={lang}/>
    );
}

interface AboutPageProps {
    params: Promise<{ lang: string }>;
}
