import {cn} from "@/utils/cn.ts";
import {Profile} from "@/ui/molecules/profile.tsx";

interface SidebarProps {
    className?: string;
};

export function Sidebar({className}: SidebarProps) {
    return (
        <div className={cn("w-full", className)}>
            <div className="flex flex-col w-full gap-4 mb-4">
                <Profile/>
            </div>
            <div className="transition-all duration-700 flex flex-col w-full gap-4 top-4 sticky top-4">

            </div>
        </div>
    )
}