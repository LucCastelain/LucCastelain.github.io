import PortfolioPageComponent from "@/components/features/portfolio/page.component";
import {ReactElement} from "react";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function PortfolioPage({params}: Readonly<PortfolioPageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <PortfolioPageComponent language={lang}/>
    );
}

interface PortfolioPageProps {
    params: Promise<{ lang: string }>;
}

