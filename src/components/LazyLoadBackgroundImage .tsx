import React, { ReactNode } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyLoadBackgroundImageProps {
    src: string;
    placeholderSrc?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
}

const LazyLoadBackgroundImage: React.FC<LazyLoadBackgroundImageProps> = ({
    src,
    alt,
    className,
    style,
    children,
}) => {

    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <LazyLoadImage
                src={src}
                alt={alt}
                effect="opacity"
                wrapperClassName="hidden"
            />
            {children}
        </div>
    );
};

export default LazyLoadBackgroundImage;
