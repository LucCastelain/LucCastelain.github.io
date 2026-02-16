import PortfolioPageComponent from "@/components/features/portfolio/page.component";
import {ReactElement, Suspense} from "react";

export default async function PortfolioPage(): Promise<ReactElement> {
    return (
        <Suspense>
            <PortfolioPageComponent/>
        </Suspense>
    );
}

