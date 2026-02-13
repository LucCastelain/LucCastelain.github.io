import {ReactElement} from "react";
import ReferencesPageComponent from "@/components/features/references/page.component";

export default async function ReferencesPage({searchParams}: Readonly<ReferencesPageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;

    return (
        <ReferencesPageComponent language={lang ?? "en"}/>
    );
}

interface ReferencesPageProps {
    searchParams: Promise<{ lang: string }>;
}
