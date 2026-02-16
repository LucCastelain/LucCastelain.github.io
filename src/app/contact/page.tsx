import {ReactElement, Suspense} from "react";
import ContactPageComponent from "@/components/features/contact/page.component";

export default async function ContactPage(): Promise<ReactElement> {
    return (
        <Suspense>
            <ContactPageComponent/>
        </Suspense>
    );
}