import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { DataContext } from "@/context/MainContext";

import { Card, CardContent } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";

import MovieService from "@/services/MovieService";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "./Button";

export function CarouselContainer() {
    const { activeCarouselIndex } = useContext(DataContext);
    const { data, isLoading } = useQuery({ queryKey: ["fetchData"], queryFn: () => MovieService.getAll() });
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
                                className={`mx-[23px] cursor-pointer relative transition-[width,height] duration-300 overflow-hidden ${
                                    index == activeCarouselIndex ? "w-[287px] h-[383px]" : "w-[124px] h-[179px]"
                                }`}
                            >
                                <CardContent className='flex flex-col items-center justify-end w-full h-full aspect-square'>
                                    {index == activeCarouselIndex && (
                                        <div className='mb-[27px] text-center animate-slideIn delay-[400ms] z-[2]'>
                                            <div className='text-[20px] text-white text-center mb-[13px]'>{item.title || item.name}</div>
                                            <div>
                                                <Button className=' h-[36px] w-[123px] px-[25px] py-[8px] rounded-[5px] text-white bg-primary'>
                                                    Book now
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                    <LazyLoadImage
                                        alt={`${item?.title || item?.name} Poster`}
                                        effect='blur'
                                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
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
