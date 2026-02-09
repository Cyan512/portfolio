import {MainGridLayout} from "@/ui/templates/main-grid-layout.tsx";

export default function HomePage() {
    return (
        <MainGridLayout>
            <div className="grid grid-cols-11">
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-50">50</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-100">100</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-200">200</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-300">300</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-400">400</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-500">500</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-600">600</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-700">700</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-800">800</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-900">900</div>
                <div className="h-25 w-25 text-white flex items-center justify-center bg-primary-950">950</div>
            </div>
        </MainGridLayout>
    )
}