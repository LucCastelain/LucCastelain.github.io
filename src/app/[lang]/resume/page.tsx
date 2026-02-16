import {ReactElement} from "react";
import ResumePageComponent from "@/components/features/resume/page.component";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function ResumePage({params}: Readonly<ResumePageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <ResumePageComponent language={lang}/>
    );
}

interface ResumePageProps {
    params: Promise<{ lang: string }>;
}
