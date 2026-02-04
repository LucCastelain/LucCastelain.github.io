import PageComponent from "@/components/features/page.component";
import {ReactElement} from "react";

export default async function Home({searchParams}: Readonly<HomePageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;
    console.log(lang);

    return (
        <PageComponent language={lang ?? "en"}/>
    );
}

interface HomePageProps {
    searchParams: Promise<{ lang: string }>
}

