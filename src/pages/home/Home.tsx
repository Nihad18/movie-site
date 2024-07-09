import Timeline from "@/components/timeline/Timeline";
import { CarouselContainer } from "@/components/ui/CarouselContainer";

const Home = () => {
    return (
        <div className='text-white dark:bg-black pt-[88px]'>
            <div className='container text-black dark:text-white'>
                <CarouselContainer />
                <Timeline/>
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;
