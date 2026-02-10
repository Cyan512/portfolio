import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { MainGridLayout } from "@/ui/templates/main-grid-layout.tsx";

const markdownFiles = import.meta.glob("@/content/*.md", {
    as: "raw",
});

type LoadState = "idle" | "loading" | "success" | "not-found";

export default function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();

    const [content, setContent] = useState("");
    const [state, setState] = useState<LoadState>("idle");

    useEffect(() => {
        if (!slug) return;

        let isMounted = true;

        const loadMarkdown = async () => {
            setState("loading");

            const path = `/src/content/${slug}.md`;
            const loader = markdownFiles[path];

            if (!loader) {
                if (isMounted) {
                    setContent("# 404\nArchivo no encontrado");
                    setState("not-found");
                }
                return;
            }

            try {
                const md = await loader();
                if (isMounted) {
                    setContent(md);
                    setState("success");
                }
            } catch {
                if (isMounted) {
                    setContent("# 404\nError cargando el archivo");
                    setState("not-found");
                }
            }
        };

        loadMarkdown();

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return (
        <MainGridLayout>
            {state === "loading" && (
                <p className="text-muted-foreground">Cargando contenido…</p>
            )}

            {(state === "success" || state === "not-found") && (
                <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                </div>
            )}
        </MainGridLayout>
    );
}
