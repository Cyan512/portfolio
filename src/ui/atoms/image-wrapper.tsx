import {cn} from "@/utils/cn.ts";
import * as React from "react";

interface ImageWrapperProps {
    id?: string;
    src: string;
    alt?: string;
    className?: string;
    position?: React.CSSProperties["objectPosition"];
}

export function ImageWrapper({id, src, alt = "", className = "", position = "center"}: ImageWrapperProps) {

    const imageStyle = {objectPosition: position};

    return (
        <div id={id} className={cn("overflow-hidden relative", className)}>
            <div className="transition absolute inset-0 bg-opacity-50 pointer-events-none"></div>
            <img src={src} alt={alt} className="w-full h-full object-cover" style={imageStyle}/>
        </div>
    )
}