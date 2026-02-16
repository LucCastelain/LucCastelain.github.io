import {ReactElement, Suspense} from "react";
import ReferencesPageComponent from "@/components/features/references/page.component";

export default async function ReferencesPage(): Promise<ReactElement> {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ReferencesPageComponent/>
        </Suspense>
    );
}
