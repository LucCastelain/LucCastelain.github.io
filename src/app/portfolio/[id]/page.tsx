import {ReactElement, Suspense} from "react";
import ProjectPageComponent from "@/components/features/portfolio/[id]/page.component";
import {getPortfolioData} from "@/data/utils/get-data";

export function generateStaticParams() {
    const portfolioData = getPortfolioData("en");

    return portfolioData.projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({params}: Readonly<ProjectPageProps>): Promise<ReactElement> {
    const {id} = await params

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ProjectPageComponent projectId={id}/>
        </Suspense>
    );
}

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}