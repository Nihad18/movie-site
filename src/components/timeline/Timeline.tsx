import { useState } from "react";
import MoviePoster from "/movie-poster.png";
import styles from "./timeline.module.scss";
const Timeline = () => {
    const histories = [1940, 1950, 1970, 1980, 1990, 2000, 2010];
    const [selectedTime, setSelectedTime] = useState(histories[0]);
    const minTime = Math.min(...histories);
    const maxTime = Math.max(...histories);
    const calculateLeftPercentage = (time: number) => {
        return ((time - minTime) / (maxTime - minTime)) * (3 / 4) * 100;
    };
    const handleMarkerClick = (time: number) => {
        setSelectedTime(time);
    };
    return (
        <div className='w-[1312px] mx-auto'>
            <div className='text-white text-[25px] font-medium mb-[23px]'>Pearls of Azerbaijani cinema</div>
            <div className='w-[1140px] mx-auto pt-[27px]'>
                <div className={`h-[42px] flex items-center mb-[81px] ${styles.lineContainer}`}>
                    <div className={styles.line}></div>
                    <div className={styles.fillLine} style={{ width: `${calculateLeftPercentage(selectedTime + 10)}%` }}></div>
                    {histories.map((time) => (
                        <div
                            key={time}
                            className={`${styles.markerContainer}`}
                            style={{ left: `${calculateLeftPercentage(time + 10)}%` }}
                            onClick={() => handleMarkerClick(time)}
                        >
                            <div className={`${time == selectedTime ? styles.activeMarkerLabel : styles.markerLabel}`}>{time}</div>
                            <div className={`${time == selectedTime ? styles.activeMarker : styles.marker}`}></div>
                        </div>
                    ))}
                </div>
                <div className='w-[1084px] flex justify-between items-center'>
                    <div className='w-[558px] h-[432px]'>
                        <img className='w-full h-full' src={MoviePoster} />
                    </div>
                    <div className='w-[415px] text-white'>
                        <div className='font-light text-[11px] pb-[6px]'>OPERETTA</div>
                        <div className='font-medium text-[25px] pb-[30px]'>Arshin Mal Alan</div>
                        <div className='font-medium text-[14px]'>
                            Arshin Mal Alan is a 4-act operetta composed by Azerbaijani composer Uzeyir Hajibeyov. The libretto of the work was also
                            written by Uzeyir Hajibeyov in 1913 in St. Petersburg. The premiere of the opera was held on October 25, 1913 at the Haji
                            Zeynelabidin Tagiyev Theater in Baku.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
