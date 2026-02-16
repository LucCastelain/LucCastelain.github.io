import {ReactElement} from "react";
import ContactPageComponent from "@/components/features/contact/page.component";
import {languages} from "@/data/utils/get-data";

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}


export default async function ContactPage({params}: Readonly<ContactPageProps>): Promise<ReactElement> {
    const {lang} = await params;

    return (
        <ContactPageComponent language={lang}/>
    );
}

interface ContactPageProps {
    params: Promise<{ lang: string }>;
}