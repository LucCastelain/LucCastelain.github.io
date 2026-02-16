import {ReactElement, Suspense} from "react";
import AboutPageComponent from "@/components/features/about/page.component";

export default async function HomePage(): Promise<ReactElement> {
    return (
        <Suspense>
            <AboutPageComponent/>
        </Suspense>
    );
}

