import { useQuery } from "@tanstack/react-query";

import { useContext, useState } from "react";
import { DataContext } from "@/context/MainContext";

import { Card, CardContent } from "@/components/ui/carousel/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel/Carousel";

import MovieService from "@/services/MovieService";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export function CarouselContainer() {
    const { activeCarouselIndex } = useContext(DataContext);
    const [activeText, setActiveText] = useState<boolean>(true);

    const { data, isLoading } = useQuery({
        queryKey: ["fetchData", activeText ? 1 : 2],
        queryFn: () => MovieService.getAll(activeText ? 1 : 2),
        staleTime: 60 * 60 * 1000,
    });

    if (isLoading) console.log("loading...");
    return (
        <div className='relative max-w-sm min-w-full select-none carousel-image'>
            <LazyLoadImage
                alt={`${data?.data?.results?.[activeCarouselIndex]?.title || data?.data?.results?.[activeCarouselIndex]?.name} Poster`}
                effect='blur'
                src={`https://image.tmdb.org/t/p/original/${data?.data?.results?.[activeCarouselIndex]?.backdrop_path}`}
                placeholderSrc='placeholder.jpg'
                wrapperClassName='carousel-poster-image'
            />
            <div className='absolute bottom-[128px] h-[1px] w-full bg-gray-lightest-alt7'></div>

            <div className='absolute top-[264px] z-20'>
                <div onClick={() => setActiveText(true)} className={`${activeText == true ? "active-carousel-text" : "carousel-text"}`}>
                    <div className='h-[1px] w-full bg-white'></div>
                    <div>Today</div>
                </div>
                <div onClick={() => setActiveText(false)} className={`${activeText == true ? "carousel-text" : "active-carousel-text"} mt-[33px]`}>
                    <div className='h-[1px] w-full bg-white'></div>
                    <div>SOON</div>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                    loop: true,
                }}
                className='relative z-10 w-full'
            >
                <CarouselContent>
                    {data?.data?.results?.map((item: any, index: any) => (
                        <CarouselItem key={index} id={`${index}`}>
                            <Card
                                className={`relative mx-[16px] lg:mx-[23px] cursor-pointer overflow-hidden transition-[width,height] duration-300 ${
                                    index == activeCarouselIndex ? "h-[255px] w-[191px] lg:h-[383px] lg:w-[287px]" : "h-[120px] w-[88px] lg:h-[179px] lg:w-[124px]"
                                }`}
                            >
                                <CardContent className='flex flex-col items-center justify-end w-full h-full aspect-square'>
                                    {index == activeCarouselIndex && (
                                        <div className='z-[2] mb-[27px] animate-slideIn text-center delay-[400ms]'>
                                            <div className='mb-[13px] text-center text-[20px] text-white'>{item.title || item.name}</div>
                                            <div>
                                                <Link
                                                    to='/order'
                                                    className='h-[36px] w-[123px] rounded-[5px] bg-primary px-[25px] py-[8px] text-white'
                                                >
                                                    Book now
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                    <LazyLoadImage
                                        alt={`${item?.title || item?.name} Poster`}
                                        effect='blur'
                                        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                                        placeholderSrc='placeholder.jpg'
                                        wrapperClassName={`carousel-card-image`}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
