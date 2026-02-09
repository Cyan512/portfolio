import {cn} from "@/utils/cn.ts";
import { MdCalendarMonth, MdOutlineCategory } from "react-icons/md";
import { RiHashtag } from "react-icons/ri";
import {Link} from "react-router-dom"
interface PostMetadataProps {
    className?: string;
};

export function PostMetadata({className}: PostMetadataProps) {
    return (
        <div className={cn("flex flex-wrap text-neutral-500 items-center gap-4 gap-x-4 gap-y-2", className)}>
            {/* Publish Date */}
            <div className="flex items-center">
                <div className="w-8 h-8 transition rounded-md flex items-center justify-center bg-primary-100 text-primary-500 mr-2">
                    <MdCalendarMonth className="text-xl"/>
                </div>
                <span className="text-sm font-medium">2024-05-01</span>
            </div>
            {/* Categories */}
            <div className="flex items-center">
                <div className="w-8 h-8 transition rounded-md flex items-center justify-center bg-primary-100 text-primary-500 mr-2">
                    <MdOutlineCategory className="text-xl"/>
                </div>
                <Link to="#" className="text-sm font-medium hover:text-primary-500">
                    categoria
                </Link>
            </div>
            {/* Tags */}
            <div className="flex items-center">
                <div className="w-8 h-8 transition rounded-md flex items-center justify-center bg-primary-100 text-primary-500 mr-2">
                    <RiHashtag className="text-xl"/>
                </div>
                <div className="flex flex-row flex-nowrap items-center">
                    <div>/</div>
                    <Link to="#" className="text-sm font-medium hover:text-primary-500">
                        categoria
                    </Link>
                </div>
            </div>

        </div>
    )
}