import {ReactElement} from "react";
import AboutPageComponent from "@/components/features/about/page.component";
import {languages} from "@/data/utils/get-data";
import {redirect} from "next/navigation";

export default function HomePage(): void {
    redirect("/en/about");
}

