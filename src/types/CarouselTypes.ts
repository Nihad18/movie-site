import {
    type EmblaCarouselType as CarouselApi,
    type EmblaOptionsType as CarouselOptions,
    type EmblaPluginType as CarouselPlugin,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

export type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin[];
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;