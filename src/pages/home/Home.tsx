import { CarouselContainer } from "@/components/ui/CarouselContainer";

const Home = () => {
    return (
        <div className='text-white dark:bg-black pt-[88px]'>
            <div className='container text-black dark:text-white'>
                <CarouselContainer />
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;
