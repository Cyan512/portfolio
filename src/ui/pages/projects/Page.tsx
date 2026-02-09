import {MainGridLayout} from "@/ui/templates/main-grid-layout.tsx";
import {PostCard} from "@/ui/organisms/post-card.tsx";

export default function ProjectsPage() {
    return (
        <MainGridLayout>
            <div className="transition flex flex-col rounded-large py-1 md:py-0 md:bg-transparent md:gap-4 mb-4">
                <PostCard/>
            </div>
            <div></div>
        </MainGridLayout>
    )
}