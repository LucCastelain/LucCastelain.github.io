import {ReactElement} from "react";
import ContactPageComponent from "@/components/features/contact/page.component";

export default async function ContactPage({searchParams}: Readonly<ContactPageProps>): Promise<ReactElement> {
    const {lang} = await searchParams;

    return (
        <ContactPageComponent language={lang ?? "en"}/>
    );
}

interface ContactPageProps {
    searchParams: Promise<{ lang: string }>;
}
