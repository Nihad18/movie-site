import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { SeatStatus } from "@/enums/SeatStatus";
import { dates, times } from "@/lib/utils";
import styles from "./seatSelection.module.scss";

const SeatSelection = () => {
    const { activeDate, setActiveDate, activeTime, setActiveTime, seats, setSeats } = useContext(DataContext);

    const handleSeatSelection = (rowIndex: number, seatIndex: number) => {
        const newSeats = [...seats];
        const selectedSeat = newSeats[rowIndex].seats[seatIndex];

        if (selectedSeat.status == SeatStatus.Available) {
            selectedSeat.status = SeatStatus.Selected;
        } else if (selectedSeat.status == SeatStatus.Selected) {
            selectedSeat.status = SeatStatus.Available;
        }
        setSeats([...newSeats]);
    };
    
    return (
        <div className={styles["seat-selection"]}>
            <div>
                <div className={styles["date-text"]}>Date</div>
                <div className='flex justify-center'>
                    {dates.map((date, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDate(date)}
                            className={`${date == activeDate ? "bg-primary-dark" : "bg-gray-darker-alt3"} ${styles["date-button"]}`}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.seperator} mb-[26px] max-w-[447px] md:mb-[46px]`}></div>

            <div>
                <div className={styles["time-text"]}>Time</div>
                <div className='flex justify-center'>
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTime(time)}
                            className={`${time == activeTime ? "bg-primary-dark" : "bg-gray-darker-alt3"} ${styles["time-button"]}`}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.seperator} mb-[134px] max-w-[638px]`}></div>

            <div className='relative'>
                <div className='absolute top-[-45%] w-full'>
                    <img src='/LIGHT.svg' className='mx-auto' alt='light' />
                </div>
                {seats?.map((row, rowIndex) => (
                    <div className='relative my-[5.5px] flex items-center justify-center' key={rowIndex}>
                        <span className='pr-2 text-white'>{row.row}</span>
                        <div className='flex w-[320px] justify-center md:w-[380px]'>
                            {row.seats.map((seat: any, seatIndex: any) => (
                                <div
                                    key={seatIndex}
                                    onClick={() => handleSeatSelection(rowIndex, seatIndex)}
                                    className={`${
                                        seat.status == SeatStatus.Booked
                                            ? "cursor-not-allowed bg-gray-darker-alt4"
                                            : seat.status == SeatStatus.Available
                                              ? "cursor-pointer bg-gray-light"
                                              : "cursor-pointer bg-primary-dark"
                                    } ${styles["seat-button"]}`}
                                ></div>
                            ))}
                        </div>
                        <span className='pl-2 text-gray-light2'>{row.row}</span>
                    </div>
                ))}
            </div>

            <div className={styles["seat-status-container"]}>
                <div className='mr-[25.26px] flex items-center'>
                    <div className={`${styles["seat-status"]} bg-gray-light`}></div>
                    <div>Available</div>
                </div>
                <div className='mr-[25.26px] flex items-center'>
                    <div className={`${styles["seat-status"]} bg-gray-darker-alt4`}></div>
                    <div>Booked</div>
                </div>
                <div className='flex items-center'>
                    <div className={`${styles["seat-status"]} bg-primary-dark`}></div>
                    <div>Selected</div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
