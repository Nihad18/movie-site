import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import FilmCard from "@/components/ui/filmCard/FilmCard";
import { useQuery } from "@tanstack/react-query";
import MovieService from "@/services/MovieService";
const MovieList = () => {
    const { data, isLoading } = useQuery({ queryKey: ["fetchData1"], queryFn: () => MovieService.getAll() });
    if (isLoading) console.log("loading...");
    const { slug } = useParams();
    const navigate = useNavigate();
    const acceptedRoutes: string[] = ["curently-playing", "coming-soon"];
    useEffect(() => {
        if (slug && !acceptedRoutes.includes(slug)) navigate("/not-found");
    }, [slug]);
    const slugConvertor = (slug: string) => {
        const words = slug.split("-");
        let firstWord = words.shift() ?? "";
        const capitalizedFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
        const result = capitalizedFirstWord + " " + words.map((word) => word.toLowerCase()).join(" ");
        return result;
    };
    return (
        <div className='pt pt-[86px] pb-[100px]'>
            <div className='container '>
                <div className='flex justify-between items-end mb-[50px]'>
                    <h3 className='text-[25px] leading-normal font-medium'>{slugConvertor(slug ?? "")}</h3>
                </div>
                <div className='grid grid-cols-4 gap-x-[25px] gap-y-[61px]'>
                    {Array.isArray(data?.data?.results) && data?.data?.results?.map((film: any, index: string) => <FilmCard key={index} {...film} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
