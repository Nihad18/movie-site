import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { DataContext } from "@/context/MainContext";

import { Card, CardContent } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";

import MovieService from "@/services/MovieService";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export function CarouselContainer() {
    const { activeCarouselIndex } = useContext(DataContext);
    const { data, isLoading } = useQuery({ queryKey: ["fetchData"], queryFn: () => MovieService.getAll() });
    if (isLoading) console.log("loading...");
    return (
        <div className='carousel-image relative min-w-full max-w-sm select-none'>
            <LazyLoadImage
                alt={`${data?.data?.results?.[activeCarouselIndex]?.title || data?.data?.results?.[activeCarouselIndex]?.name} Poster`}
                effect='blur'
                src={`https://image.tmdb.org/t/p/original/${data?.data?.results?.[activeCarouselIndex]?.backdrop_path}`}
                placeholderSrc='placeholder.jpg'
                wrapperClassName='carousel-poster-image'
            />
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
                                className={`relative mx-[23px] cursor-pointer overflow-hidden transition-[width,height] duration-300 ${
                                    index == activeCarouselIndex ? "h-[383px] w-[287px]" : "h-[179px] w-[124px]"
                                }`}
                            >
                                <CardContent className='flex aspect-square h-full w-full flex-col items-center justify-end'>
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
