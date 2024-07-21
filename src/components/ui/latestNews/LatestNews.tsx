import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "/movie-poster.png";
import styles from "./latestNews.module.scss";
const LatestNews = () => {
    const arr = [
        {
            title: "New American films on the screen of Nizami Cinema Center",
            desc: `US-produced "Independence Day: Revival" at Nizami Cinema Center. 
            "Neighbours. 2 in wartime ”films have been shown.
             "Independence Day: Revival" is based on a screenplay by Nicholas Wright 
             and directed by Roland Emmerich in the genres of science fiction, adventure
              and war. Slogan: “We had 20 years to prepare.`,
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
    ];
    return (
        <section className='pb-[101px]'>
            <div className='mx-auto max-w-[1081px] px-4 lg:px-0'>
                <div className='text-[25px] font-medium text-gray-darker-alt2 dark:text-white'>Latest news</div>
                <div className='mt-[30px] lg:mt-[50px] flex flex-col items-center justify-between md:flex-row'>
                    <div className='relative flex h-[304px] w-full items-end pl-[12px] sm:max-w-[350px] md:mr-[30px] md:max-w-full lg:h-[457px] lg:max-w-[558px] lg:pl-[35px]'>
                        <div className='relative z-[2]'>
                            <div className='max-w-[314px] pb-[22px] text-[16px] font-semibold text-white sm:pb-[10px] sm:text-[20px] lg:pb-[22px]'>
                                {arr[0].title}
                            </div>
                            <div className='max-w-[471px] pb-[52px] text-[12px] font-medium text-gray-lighter-alt5 sm:pb-[10px] sm:text-[15px] lg:pb-[52px]'>
                                {arr[0].desc}
                            </div>
                        </div>
                        <div className={styles.image}>
                            <LazyLoadImage alt={`image`} effect='opacity' src={arr[0].img} className='w-full h-full' />
                        </div>
                    </div>
                    <div className='mt-8 h-[304px] w-full sm:max-w-[350px] md:flex md:max-w-full md:flex-col md:justify-center lg:mt-0 lg:block lg:h-[400px] lg:max-w-[472.3px]'>
                        {arr.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex items-center pb-[36px] text-white last:pb-0 sm:pb-0 lg:pb-[36px]'>
                                    <div className={styles.images}>
                                        <LazyLoadImage alt={`image`} effect='opacity' src={item.img} className='w-full h-full' />
                                    </div>
                                    <div>
                                        <div className='pb-[5px] text-[11px] font-light italic text-black dark:text-white'>{item.time}</div>
                                        <div className='text-[12px] font-semibold text-gray-normal-alt dark:text-gray-lightest-alt6'>
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
