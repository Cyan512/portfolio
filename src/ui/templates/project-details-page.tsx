import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const markdownFiles = import.meta.glob("@/content/*.md", {
    as: "raw",
});

export default function ProjectDetailsPage() {
    const { slug } = useParams();
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!slug) return;

        const path = `/src/content/${slug}.md`;

        const loadMarkdown = markdownFiles[path];
        if (!loadMarkdown) {
            setContent("# 404\nArchivo no encontrado");
            return;
        }

        loadMarkdown().then(setContent);
    }, [slug]);

    return (
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    );
}
