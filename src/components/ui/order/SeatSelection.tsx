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
        <div className='h-full w-[100%] bg-black lg:w-[53%] lg:overflow-y-auto'>
            <div>
                <div className='pb-[14px] pt-[30px] text-center text-[18px] text-white md:pb-[34px] md:pt-[80px] md:text-[25px]'>Date</div>
                <div className='flex justify-center'>
                    {dates.map((date, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDate(date)}
                            className={`${
                                date == activeDate ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                            } mr-[13px] flex h-[58px] w-[40px] cursor-pointer items-center justify-center rounded-[30px] text-white last:mr-0 md:mr-[23px]`}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>

            <div className='mx-5 mb-[26px] mt-[32px] h-[1px] max-w-[447px] bg-gray-darkest-alt2 md:mx-auto md:mb-[46px] md:mt-[52px]'></div>

            <div>
                <div className='pb-[14px] text-center text-[18px] text-white md:pb-[34px] md:text-[25px]'>Time</div>
                <div className='flex justify-center'>
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTime(time)}
                            className={`${
                                time == activeTime ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                            } mr-[13px] flex h-[32px] w-[60px] cursor-pointer items-center justify-center rounded-[30px] text-white last:mr-0 md:mr-[23px] md:h-[42px] md:w-[107px]`}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>

            <div className='mx-5 mb-[104px] mt-[32px] h-[1px] max-w-[638px] bg-gray-darkest-alt2 md:mx-auto md:mt-[52px]'></div>

            <div className='relative'>
                <div className='absolute left-[50%] top-[-25%] translate-x-[-50%]'>
                    <img src='/LIGHT.svg' alt='light' />
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
                                        seat.status == SeatStatus.booked
                                            ? "cursor-not-allowed bg-gray-darker-alt4"
                                            : seat.status == SeatStatus.available
                                              ? "cursor-pointer bg-gray-light"
                                              : "cursor-pointer bg-primary-dark"
                                    } mx-[5px] flex h-[17px] w-[17px] flex-shrink-0 items-center justify-center rounded-full md:mx-[6px] md:h-[19px] md:w-[19px]`}
                                ></div>
                            ))}
                        </div>
                        <span className='pl-2 text-gray-light2'>{row.row}</span>
                    </div>
                ))}
            </div>

            <div className='mb-[80px] mt-[26px] flex justify-center text-[15px] text-white md:mb-[127px] md:mt-[36px]'>
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
