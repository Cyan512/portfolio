import {MainGridLayout} from "@/ui/templates/main-grid-layout.tsx";
import ReactMarkdown from "react-markdown";
import content from "@/content/readme.md?raw";

export default function AboutPage() {
    return (
        <MainGridLayout>
            <ReactMarkdown>{content}</ReactMarkdown>;
        </MainGridLayout>
    )
}