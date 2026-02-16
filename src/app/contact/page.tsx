import {ReactElement, Suspense} from "react";
import ContactPageComponent from "@/components/features/contact/page.component";

export default async function ContactPage(): Promise<ReactElement> {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ContactPageComponent/>
        </Suspense>
    );
}