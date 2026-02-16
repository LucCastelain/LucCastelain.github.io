import {ReactElement} from "react";
import ReferencesPageComponent from "@/components/features/references/page.component";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function ReferencesPage({params}: Readonly<ReferencesPageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <ReferencesPageComponent language={lang}/>
    );
}

interface ReferencesPageProps {
    params: Promise<{ lang: string }>;
}
