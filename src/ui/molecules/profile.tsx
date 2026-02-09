import {ImageWrapper} from "@/ui/atoms/image-wrapper.tsx";
import {Link} from "react-router-dom"
import {ProfileData} from "@/data/profile-data.ts";
import {PiUserListBold} from "react-icons/pi";

export function Profile() {
    const config = ProfileData;
    return (
        <div className="p-3">
            <Link to="/about"
                  className="group block relative mx-auto mt-1 lg:mx-0 lg:mt-0 mb-3 max-w-[12rem] lg:max-w-none overflow-hidden rounded-xl active:scale-95">
                <div
                    className="absolute transition pointer-events-none group-hover:bg-black/30 group-active:bg-black/50 w-full h-full z-50 flex items-center justify-center">
                    <PiUserListBold
                        className="transition opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 text-white text-5xl"/>
                </div>
                <ImageWrapper src={config.avatar} className="mx-auto lg:w-full h-full lg:mt-0"/>
            </Link>
            <div className="px-2">
                <div className="font-bold text-xl text-center mb-1 transition">{config.name}</div>
                <div className="h-1 w-5 bg-primary-500 mx-auto rounded-full mb-2 transition"></div>
                <div className="text-center text-neutral-400 mb-2.5 transition">{config.bio}</div>
                <div className="flex flex-wrap gap-2 justify-center mb-1">
                    {config.links.map((item) => {
                        const Icon = item.icon
                        const isSingle = config.links.length === 1
                        console.log("isSingle",isSingle)

                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                className={`transition flex items-center justify-center rounded-lg h-10 active:scale-95 ${isSingle ? "gap-2 px-3 font-bold" : "w-10"}`}
                            >
                                <Icon className="text-[1.5rem]"/>
                                {isSingle && item.name}
                            </a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}