import PortfolioPageComponent from "@/components/features/portfolio/page.component";
import {ReactElement} from "react";

export default async function PortfolioPage({searchParams}: Readonly<PortfolioPageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;

    return (
        <PortfolioPageComponent language={lang ?? "en"}/>
    );
}

interface PortfolioPageProps {
    searchParams: Promise<{ lang: string }>
}

