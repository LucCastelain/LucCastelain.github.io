import {ReactElement} from "react";
import AboutPageComponent from "@/components/features/about/page.component";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function HomePage({params}: Readonly<HomePageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <AboutPageComponent language={lang}/>
    );
}

interface HomePageProps {
    params: Promise<{ lang: string }>;
}

