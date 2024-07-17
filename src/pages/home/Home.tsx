import AboutUs from "@/components/aboutUs/AboutUs";
import Timeline from "@/components/timeline/Timeline";
import { CarouselContainer } from "@/components/ui/CarouselContainer";
import LatestNews from "@/components/ui/LatestNews";
import SeeMore from "@/components/ui/SeeMore";
import { useAuth } from "@/context/AuthContext";
import MovieService from "@/services/MovieService";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const user = useAuth();
    const upComingFilms = useQuery({ queryKey: ["fetchData"], queryFn: () => MovieService.getUpComing() });
    const onTheAirFilms = useQuery({ queryKey: ["fetchData"], queryFn: () => MovieService.getOnTheAir() });
    return (
        <section>
            <CarouselContainer />
            <SeeMore name='Curently playing' link='/curently-playing' data={upComingFilms?.data?.data} />
            <SeeMore name='Coming soon' link='/coming-soon' data={onTheAirFilms.data?.data} />
            {user?.token && <SeeMore name='Already watched movies' link='/already-watched-movies' data={onTheAirFilms.data?.data} />}
            <Timeline />
            <AboutUs />
            <LatestNews />
        </section>
    );
};

export default Home;
