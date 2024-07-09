import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { DataContext } from "@/context/MainContext";

import { Card, CardContent } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";

import MovieService from "@/services/MovieService";

export function CarouselDemo() {
    const { activeCarouselIndex } = useContext(DataContext);
    const { data, error, isLoading } = useQuery({ queryKey: ["fetchData"], queryFn: () => MovieService.getAll() });
    if (isLoading) console.log("loading...");
    return (
        <div className='relative max-w-sm min-w-full select-none'>
            <img
                className='absolute top-0 left-0 object-cover h-[100vh] w-[100vw]'
                src={`https://image.tmdb.org/t/p/original/${data?.data?.results?.[activeCarouselIndex]?.backdrop_path}`}
                alt={`${data?.data?.results?.[activeCarouselIndex]?.title} Poster`}
                loading='lazy'
            />
            <Carousel
                opts={{
                    align: "start",
                    dragFree: "true",
                    loop: "true",
                }}
                className='w-full'
            >
                <CarouselContent>
                    {data?.data?.results?.map((item: any, index: any) => (
                        <CarouselItem key={index} id={`${index}`}>
                            <Card
                                className={`mx-[23px] cursor-pointer relative transition-[width,height] ${
                                    index == activeCarouselIndex
                                        ? "w-[287px!important] h-[383px!important]"
                                        : "w-[124px!important] h-[179px!important]"
                                }`}
                            >
                                <CardContent className='flex flex-col items-center justify-end w-full h-full aspect-square'>
                                    {index == activeCarouselIndex && (
                                        <div className='mb-[27px] text-center'>
                                            <div className='text-[20px] text-white text-center mb-[13px]'>{item.title}</div>
                                            <div>
                                                <button className='w-[123px] h-[36px] px-[25px] py-[8px] rounded-[5px] text-white bg-[#AB0A10]'>
                                                    Book now
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    <img
                                        className={`object-cover z-[-1] top-0 left-0 absolute w-full h-full rounded-[5px] ${
                                            index != activeCarouselIndex ? "img-overlay" : ""
                                        }`}
                                        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                                        alt={`${item.title} Poster`}
                                        loading='lazy'
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
