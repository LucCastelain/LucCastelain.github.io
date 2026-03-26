import {ReactElement, Suspense} from "react";
import ProjectPageComponent from "@/components/features/portfolio/[id]/page.component";
import {getPortfolioData, languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    const projects = getPortfolioData("en").projects;

    return languages.flatMap(lang =>
        projects.map(project => ({
            lang,
            id: project.id,
        }))
    );
}

export default async function ProjectPage({params}: Readonly<ProjectPageProps>): Promise<ReactElement> {
    const {id, lang} = await params

    return (
        <Suspense>
            <ProjectPageComponent projectId={id} language={lang}/>
        </Suspense>
    );
}

interface ProjectPageProps {
    params: Promise<{ lang: string, id: string }>;
}