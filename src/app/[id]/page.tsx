import {ReactElement} from "react";
import ProjectPageComponent from "@/components/features/[id]/page.component";

export default async function ProjectPage({params}: Readonly<ProjectPageProps>): Promise<ReactElement> {
    const {id} = await params;

    if(!id) return (<div>404 not found</div>);

    return (
        <ProjectPageComponent projectId={id.toString()}/>
    );
}

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}