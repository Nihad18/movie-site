import { useState, useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { SeatStatus } from "@/enums/SeatStatus";
import { dates, seatData, times } from "@/lib/utils";


const SeatSelection = () => {
    const [seats, setSeats] = useState(seatData);
    const { activeDate, setActiveDate, activeTime, setActiveTime, selectedSeats, setSelectedSeats } = useContext(DataContext);

    const handleSeatSelection = (rowIndex: number, seatIndex: number) => {
        const newSeats = [...seats];
        const selectedSeat = seatData[rowIndex].seats[seatIndex];
        const selectedRow = seatData[rowIndex];
        const newSelectedSeat = { rowId: selectedRow.rowId, seatId: selectedSeat.seatId, row: selectedRow.row, seatNumber: selectedSeat.seatNumber };

        if (selectedSeat.status == SeatStatus.available) {
            selectedSeat.status = SeatStatus.selected;
            setSelectedSeats([...selectedSeats, newSelectedSeat]);
        } else if (selectedSeat.status == SeatStatus.selected) {
            selectedSeat.status = SeatStatus.available;
            const newSelectedSeats = selectedSeats.filter((item: any) => !(item.rowId === selectedRow.rowId && item.seatId === selectedSeat.seatId));
            setSelectedSeats([...newSelectedSeats]);
        }
        setSeats([...newSeats]);
    };
    return (
        <div className='flex-1 h-full overflow-x-hidden '>
            <div>
                <div className='text-center text-white text-[25px] pt-[39px] pb-[34px]'>Date</div>
                <div className='flex justify-center'>
                    {dates.map((date, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDate(date)}
                            className={`${date == activeDate ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                                } w-[40px] h-[58px] rounded-[30px] text-white cursor-pointer
                         flex items-center justify-center mr-[23px] last:mr-0`}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-[447px] h-[1px] bg-gray-darkest-alt2 mx-auto mt-[52px] mb-[46px]'></div>

            <div>
                <div className='text-center text-white text-[25px] pb-[34px]'>Time</div>
                <div className='flex justify-center'>
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTime(time)}
                            className={`${time == activeTime ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
                                } w-[107px] h-[42px] rounded-[30px] text-white cursor-pointer
                         flex items-center justify-center mr-[23px] last:mr-0`}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-[638px] h-[1px] bg-gray-darkest-alt2 mx-auto mt-[52px] mb-[104px]'></div>

            <div className='relative'>
                <div className='absolute top-[-25%] left-[50%] translate-x-[-50%]'>
                    <img src="/LIGHT.svg" alt='light' />
                </div>
                {seats?.map((row, rowIndex) => (
                    <div className='relative flex items-center justify-center my-[5.5px]' key={rowIndex}>
                        <span className='pr-2 text-white'>{row.row}</span>
                        <div className='flex justify-center w-[380px]'>
                            {row.seats.map((seat, seatIndex) => (
                                <div
                                    key={seatIndex}
                                    onClick={() => handleSeatSelection(rowIndex, seatIndex)}
                                    className={`${seat.status == SeatStatus.booked
                                        ? "cursor-not-allowed bg-gray-darker-alt4"
                                        : seat.status == SeatStatus.available
                                            ? "cursor-pointer bg-gray-light"
                                            : "cursor-pointer bg-primary-dark"
                                        }
                                flex flex-shrink-0 items-center justify-center w-[19px] h-[19px] mx-[6px] rounded-full`}
                                ></div>
                            ))}
                        </div>
                        <span className='pl-2 text-gray-light2'>{row.row}</span>
                    </div>
                ))}
            </div>

            <div className='flex justify-center text-white text-[15px] mt-[36px] mb-[127px]'>
                <div className='flex items-center mr-[25.26px]'>
                    <div className='w-4 h-4 mr-[12.63px] rounded-full bg-gray-light'></div>
                    <div>Available</div>
                </div>
                <div className='flex items-center mr-[25.26px]'>
                    <div className='w-4 h-4 mr-[12.63px] rounded-full bg-gray-darker-alt4'></div>
                    <div>Booked</div>
                </div>
                <div className='flex items-center'>
                    <div className='w-4 h-4 mr-[12.63px] rounded-full bg-primary-dark'></div>
                    <div>Selected</div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
