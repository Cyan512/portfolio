import {ProfileData} from "@/data/profile-data.ts";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="transition border-t border-black/10 dark:border-white/15 my-10 border-dashed mx-32"></div>
            <div
                className="transition border-dashed border-primary-500 dark:border-white/15 rounded-2xl mb-12 flex flex-col items-center justify-center px-6">
                <div className="transition text-50 text-sm text-center">
                    &copy; <span id="copyright-year">{currentYear}</span> {ProfileData.name}. All Rights Reserved.
                    /{" "}
                    <a className="transition link text-primary-500 font-medium" target="_blank">RSS</a> /{" "}
                    <a className="transition link text-primary-500 font-medium" target="_blank">Sitemap</a>
                    <br/>
                    Powered by{" "}
                    <a className="transition link text-primary-500 font-medium" target="_blank"
                       href="https://astro.build">Astro</a> &{" "}
                    <a className="transition link text-primary-500 font-medium" target="_blank"
                       href="https://github.com/saicaca/fuwari">BM</a>
                </div>
            </div>
        </>
    )
}