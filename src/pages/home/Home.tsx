import Timeline from "@/components/timeline/Timeline";
import { CarouselContainer } from "@/components/ui/CarouselContainer";
import LatestNews from "@/components/ui/LatestNews";

const Home = () => {
    return (
        <section>
            <CarouselContainer />
            <Timeline />
            <LatestNews/>
        </section>
    );
};

export default Home;
