import {ReactElement, Suspense} from "react";
import ResumePageComponent from "@/components/features/resume/page.component";

export default async function ResumePage(): Promise<ReactElement> {
    return (
        <Suspense>
            <ResumePageComponent/>
        </Suspense>
    );
}
