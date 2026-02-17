import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../../globals.css";
import NavbarComponent from "@/components/ui/navbar.component";
import {PropsWithChildren} from "react";
import {DarkModeProvider} from "@/components/ui/dark-mode/dark-mode-provider.component";
import {twMerge} from "tailwind-merge";
import {languages} from "@/data/utils/get-data";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Luc Castelain",
    description: "Luc Castelain website. It shows my portfolio.",
    icons: {
        icon: "/static/favicon.ico",
    },
};

export function generateStaticParams() {
    return languages.flatMap(lang => ({
        lang,
    }));
}

export default async function RootLayout({children, params}: Readonly<PropsWithChildren<RootLayoutProps>>) {
    const {lang} = await params;

    return (
        <html lang="en">
            <body className={twMerge("flex flex-col max-sm:min-h-screen antialiased sm:w-screen sm:h-screen", geistSans.className, geistSans.variable, geistMono.variable)}>
                <DarkModeProvider>
                    <NavbarComponent language={lang}/>
                    <div className="h-12"/>
                    <main className="size-full grow overflow-hidden bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-50">
                        {children}
                    </main>
                </DarkModeProvider>
            </body>
        </html>
    );
}

interface RootLayoutProps {
    params: Promise<{ lang: string }>;
}
