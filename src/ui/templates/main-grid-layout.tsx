import * as React from "react";
import {Navbar} from "@/ui/organisms/navbar.tsx";
import {Sidebar} from "@/ui/organisms/sidebar.tsx";
import {Footer} from "@/ui/organisms/footer.tsx";

interface MainGridLayoutProps {
    children: React.ReactNode
}

export function MainGridLayout({children}: MainGridLayoutProps) {
    return (
        <div>
            {/* Navbar */}
            <div
                className="z-50 pointer-events-none relative transition-all duration-700 max-w-container px-0 md:px-4 mx-auto">
                <div className="pointer-events-auto sticky top-0 transition-all">
                    <Navbar/>
                </div>
            </div>
            {/* Main content */}
            <div className="absolute w-full z-30 pointer-events-none">
                <div className="relative max-w-container mx-auto pointer-events-auto">
                    <div
                        className="transition duration-700 w-full left-0 right-0 grid grid-cols-[17.5rem_auto] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] mx-auto gap-4 px-0 md:px-4">
                        <Sidebar
                            className="mb-4 row-start-2 row-end-3 col-span-2 lg:row-start-1 lg:row-end-2 lg:col-span-1 lg:max-w-[17.5rem]"/>
                        <main className="col-span-2 lg:col-span-1 overflow-hidden">
                            <div>
                                {children}
                                <div className="col-span-2 hidden lg:block">
                                    <Footer/>
                                </div>
                            </div>
                        </main>
                        <div className="col-span-2 block lg:hidden">
                            <Footer/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}