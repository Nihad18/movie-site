import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieService from "@/services/MovieService";
import { useAuth } from "@/context/AuthContext";
import { AcceptedRoutes } from "@/enums/AcceptedRoutes";
import { MovieResultType } from "@/types/MovieDataTypes";
import MovieCard from "@/components/movieCard";
import { slugConvertor } from "@/lib/utils";
const MovieList = () => {
    const user = useAuth();
    const { data, isLoading } = useQuery({ queryKey: ["fetchData1"], queryFn: () => MovieService.getAll() });
    if (isLoading) console.log("loading...");
    const { slug } = useParams();
    const navigate = useNavigate();
    const acceptedRoutes: string[] = [AcceptedRoutes.CurrentlyPlaying, AcceptedRoutes.ComingSoon];

    if (user?.token) {
        acceptedRoutes.push(AcceptedRoutes.AlreadyWatchedMovies);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (slug && !acceptedRoutes.includes(slug)) navigate("/not-found");
    }, [slug]);

    return (
        <div className='pt pb-[100px] pt-[86px]'>
            <div className='container'>
                <div className='mb-[50px] flex items-end justify-between'>
                    <h3 className='text-[25px] font-medium leading-normal'>{slugConvertor(slug ?? "")}</h3>
                </div>
                <div className='grid grid-cols-1 gap-x-[25px] gap-y-[61px] min-[480px]:grid-cols-2 min-[880px]:grid-cols-4'>
                    {Array.isArray(data?.data?.results) && data?.data?.results?.map((film: MovieResultType) => <MovieCard key={film.id} {...film} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
