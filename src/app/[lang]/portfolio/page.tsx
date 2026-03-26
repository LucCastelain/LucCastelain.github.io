import PortfolioPageComponent from "@/components/features/portfolio/page.component";
import {ReactElement, Suspense} from "react";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function PortfolioPage({params, searchParams}: Readonly<PortfolioPageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <Suspense>
            <PortfolioPageComponent language={lang}/>
        </Suspense>
    );
}

interface PortfolioPageProps {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ software?: string }>
}

