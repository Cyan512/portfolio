import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { MainGridLayout } from "@/ui/templates/main-grid-layout.tsx";

const markdownFiles = import.meta.glob("@/content/*.md", { as: "raw" });

type LoadState = "idle" | "loading" | "success" | "not-found";

export default function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState("");
    const [frontmatter, setFrontmatter] = useState<any>(null);
    const [state, setState] = useState<LoadState>("idle");

    useEffect(() => {
        if (!slug) return;
        let isMounted = true;

        const loadMarkdown = async () => {
            setState("loading");
            const loader = Object.entries(markdownFiles).find(([key]) =>
                key.toLowerCase().endsWith(`${slug.toLowerCase()}.md`)
            )?.[1];

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
                    // Parse simple frontmatter
                    const frontmatterRegex = /^---\s*([\s\S]+?)\s*---/;
                    const match = md.match(frontmatterRegex);

                    let fm = null;
                    let mdContent = md;

                    if (match) {
                        fm = Object.fromEntries(
                            match[1].split("\n").map(line => {
                                const [key, ...rest] = line.split(":");
                                if (!key) return ["", ""];
                                const value = rest.join(":").trim();
                                if (key.trim() === "tags") {
                                    return [key.trim(), value.replace(/\[|\]/g, "").split(",").map(t => t.trim())];
                                }
                                if (key.trim() === "draft") {
                                    return [key.trim(), value.toLowerCase() === "true"];
                                }
                                return [key.trim(), value];
                            }).filter(([k]) => k)
                        );
                        mdContent = md.replace(frontmatterRegex, "");
                    }

                    setFrontmatter(fm);
                    setContent(mdContent);
                    setState("success");
                }
            } catch (err) {
                console.error("Error cargando el archivo Markdown:", err);
                if (isMounted) {
                    setContent("# 404\nError cargando el archivo");
                    setState("not-found");
                }
            }
        };

        loadMarkdown();
        return () => { isMounted = false; };
    }, [slug]);

    return (
        <MainGridLayout>
            {state === "loading" && (
                <p className="text-muted-foreground">Cargando contenido…</p>
            )}

            {frontmatter && (
                <div className="mb-6  p-6 border rounded-xl shadow-md bg-primary-500 dark:bg-gray-800">
                    <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{frontmatter.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                            <span>{frontmatter.published}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{frontmatter.updated}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{frontmatter.category}</span>
                        </div>
                        {frontmatter.tags?.map((tag: string) => (
                            <div key={tag} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded px-2 py-0.5">
                                <span>{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(state === "success" || state === "not-found") && (
                <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            )}
        </MainGridLayout>
    );
}
