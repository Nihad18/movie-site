import AboutUs from "@/components/aboutUs/AboutUs";
import Timeline from "@/components/timeline/Timeline";
import { CarouselContainer } from "@/components/ui/CarouselContainer";
import LatestNews from "@/components/ui/LatestNews";
import SeeMore from "@/components/ui/SeeMore";
import { useAuth } from "@/context/AuthContext";
import { filmList, filmList2 } from "@/lib/utils";

const Home = () => {
    const user = useAuth();
    return (
        <section>
            <CarouselContainer />
            <SeeMore name="Curently playing" link="/curently-playing" data={filmList} />
            <SeeMore name="Coming soon" link="/coming-soon" data={filmList2} />
            {user?.token && <SeeMore name="Already watched movies" link="/already-watched-movies" data={filmList} />}
            <Timeline />
            <AboutUs />
            <LatestNews />
        </section>
    );
};

export default Home;
