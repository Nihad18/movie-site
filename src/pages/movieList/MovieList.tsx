import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import FilmCard from "@/components/ui/filmCard/FilmCard";
import { useQuery } from "@tanstack/react-query";
import MovieService from "@/services/MovieService";
import { useAuth } from "@/context/AuthContext";
const MovieList = () => {
    const user = useAuth()
    const { data, isLoading } = useQuery({ queryKey: ["fetchData1"], queryFn: () => MovieService.getAll() });
    if (isLoading) console.log("loading...");
    const { slug } = useParams();
    const navigate = useNavigate();
    const acceptedRoutes: string[] = ["curently-playing", "coming-soon"];

    if (user?.token) {
        acceptedRoutes.push("already-watched-movies")
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        <div className='pt pb-[100px] pt-[86px]'>
            <div className='container'>
                <div className='mb-[50px] flex items-end justify-between'>
                    <h3 className='text-[25px] font-medium leading-normal'>{slugConvertor(slug ?? "")}</h3>
                </div>
                <div className='grid grid-cols-1 min-[480px]:grid-cols-2 min-[880px]:grid-cols-4 gap-x-[25px] gap-y-[61px]'>
                    {Array.isArray(data?.data?.results) && data?.data?.results?.map((film: any, index: string) => <FilmCard key={index} {...film} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
