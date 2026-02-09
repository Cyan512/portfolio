import {cn} from "@/utils/cn.ts";
import {Link} from "react-router-dom"
import {PostMetadata} from "@/ui/molecules/post-metadata.tsx";
import { FaChevronRight } from "react-icons/fa";

interface PostCardProps {
    className?: string;
};

export function PostCard({className}: PostCardProps) {
    return (
        <>
            <div
                className={cn("flex flex-col-reverse md:flex-col w-full rounded-[var(--radius-large)] overflow-hidden relative", className)}>
                <div className={cn("pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative")}>
                    <Link to="#"
                          className="transition group w-full block font-bold mb-3 text-3xl text-90 hover:text-primary-500 before:w-1 before:h-5 before:rounded-md before:bg-primary-500 before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block">
                        Markdown Extended Features
                    </Link>
                    <PostMetadata className="mb-4"/>
                    {/* Description */}
                    <div className={cn("transition text-75 mb-3.5 pr-4")}>
                        Read more about Markdown features in Fuwari
                    </div>
                    {/* word count and read time */}
                    <div className="text-sm text-black/30 dark:text-white/30 flex gap-4 transition">
                        <div>
                            116 words
                        </div>
                        <div>|</div>
                        <div>
                            1 minute
                        </div>
                    </div>
                </div>
                <Link to="#"
                      className="hidden md:flex items-center justify-center bg-primary-300 w-[3.25rem] absolute right-3 top-3 bottom-3 rounded-xl">
                    <FaChevronRight className="transition text-primary-500 text-4xl mx-auto"/>
                </Link>
            </div>
            <div
                className="transition border-t-[1px] border-dashed mx-6 border-black/10 dark:border-white/[0.15] last:border-t-0 md:hidden"
            >
            </div>
        </>
    )
}