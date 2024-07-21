import React, { ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyLoadBackgroundImageProps {
    src: string;
    placeholderSrc?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
}

const LazyLoadBackgroundImage: React.FC<LazyLoadBackgroundImageProps> = ({ src, alt, className, style, children }) => {
    return (
        <div
            className={className}
            style={{ ...style }}
        >
            <LazyLoadImage src={src} alt={alt} effect='opacity' wrapperClassName='w-full h-full ' className="object-cover h-full w-full" />
            {children}
        </div>
    );
};

export default LazyLoadBackgroundImage;
