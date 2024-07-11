import Timeline from "@/components/timeline/Timeline";
import { CarouselContainer } from "@/components/ui/CarouselContainer";

const Home = () => {
    return (
        <section>
            <CarouselContainer />
            <div className='container text-black dark:text-white'>
                <Timeline />
            </div>
        </section>
    );
};

export default Home;
