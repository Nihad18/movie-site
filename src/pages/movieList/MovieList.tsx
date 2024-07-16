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
    console.log(data?.data?.results);
    return (
        <div className='pt pt-[87px]'>
            <div className='container '>
                <div className='flex justify-between items-end mb-[49px]'>
                    <h3 className='text-[25px] leading-normal font-medium'>{slug}</h3>
                </div>
                <div className='flex flex-wrap gap-[26px]'>
                    {Array.isArray(data) && data?.data?.results?.map((film:any, index:string) => <FilmCard key={index} {...film} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
