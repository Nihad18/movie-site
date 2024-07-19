import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { SeatStatus } from "@/enums/SeatStatus";
import { dates, times } from "@/lib/utils";

const SeatSelection = () => {
    const { activeDate, setActiveDate, activeTime, setActiveTime, seats, setSeats } = useContext(DataContext);

    const handleSeatSelection = (rowIndex: number, seatIndex: number) => {
        const newSeats = [...seats];
        const selectedSeat = newSeats[rowIndex].seats[seatIndex];

        if (selectedSeat.status == SeatStatus.available) {
            selectedSeat.status = SeatStatus.selected;
        } else if (selectedSeat.status == SeatStatus.selected) {
            selectedSeat.status = SeatStatus.available;
        }
        setSeats([...newSeats]);
    };
    return (
        <div className='h-full flex-1 overflow-x-hidden'>
            <div>
                <div className='pb-[34px] pt-[80px] text-center text-[25px] text-white'>Date</div>
                <div className='flex justify-center'>
                    {dates.map((date, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDate(date)}
                            className={`${date == activeDate ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                                } mr-[23px] flex h-[58px] w-[40px] cursor-pointer items-center justify-center rounded-[30px] text-white last:mr-0`}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>

            <div className='mx-auto mb-[46px] mt-[52px] h-[1px] w-[447px] bg-gray-darkest-alt2'></div>

            <div>
                <div className='pb-[34px] text-center text-[25px] text-white'>Time</div>
                <div className='flex justify-center'>
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTime(time)}
                            className={`${time == activeTime ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                                } mr-[23px] flex h-[42px] w-[107px] cursor-pointer items-center justify-center rounded-[30px] text-white last:mr-0`}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>

            <div className='mx-auto mb-[104px] mt-[52px] h-[1px] w-[638px] bg-gray-darkest-alt2'></div>

            <div className='relative'>
                <div className='absolute left-[50%] top-[-25%] translate-x-[-50%]'>
                    <img src='/LIGHT.svg' alt='light' />
                </div>
                {seats?.map((row, rowIndex) => (
                    <div className='relative my-[5.5px] flex items-center justify-center' key={rowIndex}>
                        <span className='pr-2 text-white'>{row.row}</span>
                        <div className='flex w-[380px] justify-center'>
                            {row.seats.map((seat: any, seatIndex: any) => (
                                <div
                                    key={seatIndex}
                                    onClick={() => handleSeatSelection(rowIndex, seatIndex)}
                                    className={`${seat.status == SeatStatus.booked
                                            ? "cursor-not-allowed bg-gray-darker-alt4"
                                            : seat.status == SeatStatus.available
                                                ? "cursor-pointer bg-gray-light"
                                                : "cursor-pointer bg-primary-dark"
                                        } mx-[6px] flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-full`}
                                ></div>
                            ))}
                        </div>
                        <span className='pl-2 text-gray-light2'>{row.row}</span>
                    </div>
                ))}
            </div>

            <div className='mb-[127px] mt-[36px] flex justify-center text-[15px] text-white'>
                <div className='mr-[25.26px] flex items-center'>
                    <div className='mr-[12.63px] h-4 w-4 rounded-full bg-gray-light'></div>
                    <div>Available</div>
                </div>
                <div className='mr-[25.26px] flex items-center'>
                    <div className='mr-[12.63px] h-4 w-4 rounded-full bg-gray-darker-alt4'></div>
                    <div>Booked</div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[12.63px] h-4 w-4 rounded-full bg-primary-dark'></div>
                    <div>Selected</div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
