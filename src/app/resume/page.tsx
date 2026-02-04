import {ReactElement} from "react";
import ResumePageComponent from "@/components/features/resume/page.component";

export default async function ResumePage({searchParams}: Readonly<ResumePageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;

    return (
        <ResumePageComponent language={lang ?? "en"}/>
    );
}

interface ResumePageProps {
    searchParams: Promise<{ lang: string }>
}
