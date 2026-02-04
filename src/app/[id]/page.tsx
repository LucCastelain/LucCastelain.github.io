import {ReactElement} from "react";
import ProjectPageComponent from "@/components/features/[id]/page.component";

export default async function ProjectPage({params, searchParams}: Readonly<ProjectPageProps>): Promise<ReactElement> {
    const {id} = await params;
    const {lang} = await searchParams;

    if(!id) return (<div>404 not found</div>);

    return (
        <ProjectPageComponent language={lang ?? "en"} projectId={id.toString()}/>
    );
}

interface ProjectPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ lang: string }>;
}