import { useState } from "react";
import MoviePoster from "/movie-poster.png";
import styles from "./timeline.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Timeline = () => {
    const histories = [1940, 1950, 1970, 1980, 1990, 2000, 2010];
    const [selectedTime, setSelectedTime] = useState(histories[0]);
    const minTime = Math.min(...histories);
    const maxTime = Math.max(...histories);
    const calculateLeftPercentage = (time: number) => {
        return ((time - minTime) / (maxTime - minTime)) * 75;
    };
    const handleMarkerClick = (time: number) => {
        setSelectedTime(time);
    };
    return (
        <div className='pb-[82px] pt-[110px]'>
            <div className='container'>
                <div className='text-[20px] font-medium text-gray-darker-alt2 dark:text-white lg:pb-[23px] lg:text-[25px]'>
                    Pearls of Azerbaijani cinema
                </div>
                <div className='sub-container mx-auto pb-[28px] pt-[27px]'>
                    <div className={`mb-[40px] flex h-[42px] items-center lg:mb-[81px] ${styles["line-container"]}`}>
                        <div className={`bg-gray-lightest-alt5 dark:bg-gray-darkest-alt ${styles.line}`}></div>
                        <div
                            className={`bg-black dark:bg-white ${styles["fill-line"]}`}
                            style={{ width: `${calculateLeftPercentage(selectedTime + 10)}%` }}
                        ></div>
                        {histories.map((time) => (
                            <div
                                key={time}
                                className={`${styles["marker-container"]}`}
                                style={{ left: `${calculateLeftPercentage(time + 10)}%` }}
                                onClick={() => handleMarkerClick(time)}
                            >
                                <div
                                    className={`${
                                        time == selectedTime
                                            ? `text-black dark:text-white ${styles["active-marker-label"]}`
                                            : `text-gray-lightest-alt5 dark:text-gray-normal-alt ${styles["marker-label"]}`
                                    }`}
                                >
                                    {time}
                                </div>
                                <div
                                    className={`${
                                        time == selectedTime
                                            ? `bg-black dark:bg-white ${styles["active-marker"]}`
                                            : `dark:bg-gray-normal-alt" bg-gray-lightest-alt5 ${styles.marker}`
                                    }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className='flex max-w-[1084px] flex-col items-center justify-between md:flex-row'>
                        <div className={`${styles.image} mx-5 lg:mx-0`}>
                            <LazyLoadImage alt={`image`} effect='opacity' src={MoviePoster} className='w-full h-full' />
                        </div>
                        <div className='mx-5 mt-8 max-w-[415px] lg:mx-0 lg:mt-0'>
                            <div className='pb-[6px] text-[11px] font-light text-black dark:text-white'>OPERETTA</div>
                            <div className='pb-[15px] text-[25px] font-medium text-gray-darker-alt2 dark:text-white lg:pb-[30px]'>
                                Arshin Mal Alan
                            </div>
                            <div className='text-[14px] font-medium text-gray-normal-alt2 dark:text-gray-lighter-alt5'>
                                Arshin Mal Alan is a 4-act operetta composed by Azerbaijani composer Uzeyir Hajibeyov. The libretto of the work was
                                also written by Uzeyir Hajibeyov in 1913 in St. Petersburg. The premiere of the opera was held on October 25, 1913 at
                                the Haji Zeynelabidin Tagiyev Theater in Baku.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
