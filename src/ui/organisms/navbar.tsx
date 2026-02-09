import {Link, NavLink} from "react-router-dom"
import {Logo} from "@/ui/atoms/logo.tsx";
import {NavBarData} from "@/data/NavBarData.ts";
import {cn} from "@/utils/cn.ts";
import {ModeToggle} from "@/ui/molecules/mode-toggle.tsx";

export function Navbar() {
    return (
        <div id="navbar" className="z-50">
            <div
                className="rounded-large rounded-t-none overflow-visible transition max-w-container h-[4.5rem] mx-auto flex items-center justify-between px-4">
                <Link to="/"
                      className="relative flex items-center justify-center h-[3.25rem] px-5 font-bold">
                    <div className="flex flex-row text-primary-500 items-center text-md">
                        <Logo size={32} className="mb-1 mr-2"/>
                        BM
                    </div>
                </Link>
                <div className="hidden md:flex">
                    {NavBarData.map((l) => (
                        <NavLink
                            to={l.href}
                            className={({isActive}) =>
                                cn(
                                    "flex items-center justify-center rounded-lg h-11 font-bold px-5 transition-colors",
                                    isActive
                                        ? "text-primary bg-primary/20"
                                        : ""
                                )
                            }
                        >
                            <div className="flex items-center">
                                {l.name}
                            </div>
                        </NavLink>

                    ))}
                </div>
                <div className="flex">
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    )
}