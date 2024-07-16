import { useState, useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { SeatStatus } from "@/enums/SeatStatus";
import Light from "../../../../public/LIGHT.svg";
const seatData = [
    {
        rowId: 1,
        row: "G",
        seats: [
            { seatId: 1, seatNumber: 1, status: "available" },
            { seatId: 2, seatNumber: 2, status: "booked" },
            { seatId: 3, seatNumber: 3, status: "available" },
            { seatId: 4, seatNumber: 4, status: "available" },
            { seatId: 5, seatNumber: 5, status: "booked" },
            { seatId: 6, seatNumber: 6, status: "available" },
        ],
    },
    {
        rowId: 2,
        row: "F",
        seats: [
            { seatId: 7, seatNumber: 1, status: "booked" },
            { seatId: 8, seatNumber: 2, status: "booked" },
            { seatId: 9, seatNumber: 3, status: "available" },
            { seatId: 10, seatNumber: 4, status: "available" },
            { seatId: 11, seatNumber: 5, status: "booked" },
            { seatId: 12, seatNumber: 6, status: "available" },
            { seatId: 13, seatNumber: 7, status: "available" },
            { seatId: 14, seatNumber: 8, status: "booked" },
        ],
    },
    {
        rowId: 3,
        row: "E",
        seats: [
            { seatId: 15, seatNumber: 1, status: "booked" },
            { seatId: 16, seatNumber: 2, status: "booked" },
            { seatId: 17, seatNumber: 3, status: "booked" },
            { seatId: 18, seatNumber: 4, status: "booked" },
            { seatId: 19, seatNumber: 5, status: "booked" },
            { seatId: 20, seatNumber: 6, status: "available" },
            { seatId: 21, seatNumber: 7, status: "available" },
            { seatId: 22, seatNumber: 8, status: "available" },
            { seatId: 23, seatNumber: 9, status: "available" },
            { seatId: 24, seatNumber: 10, status: "available" },
        ],
    },
    {
        rowId: 4,
        row: "D",
        seats: [
            { seatId: 25, seatNumber: 1, status: "available" },
            { seatId: 26, seatNumber: 2, status: "booked" },
            { seatId: 27, seatNumber: 3, status: "available" },
            { seatId: 28, seatNumber: 4, status: "booked" },
            { seatId: 29, seatNumber: 5, status: "available" },
            { seatId: 30, seatNumber: 6, status: "booked" },
            { seatId: 31, seatNumber: 7, status: "available" },
            { seatId: 32, seatNumber: 8, status: "booked" },
            { seatId: 33, seatNumber: 9, status: "available" },
            { seatId: 34, seatNumber: 10, status: "booked" },
            { seatId: 35, seatNumber: 10, status: "booked" },
            { seatId: 36, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 5,
        row: "C",
        seats: [
            { seatId: 37, seatNumber: 3, status: "available" },
            { seatId: 38, seatNumber: 4, status: "booked" },
            { seatId: 39, seatNumber: 5, status: "available" },
            { seatId: 40, seatNumber: 6, status: "booked" },
            { seatId: 41, seatNumber: 7, status: "available" },
            { seatId: 42, seatNumber: 8, status: "booked" },
            { seatId: 43, seatNumber: 9, status: "available" },
            { seatId: 44, seatNumber: 10, status: "booked" },
            { seatId: 45, seatNumber: 10, status: "booked" },
            { seatId: 46, seatNumber: 10, status: "booked" },
            { seatId: 47, seatNumber: 10, status: "booked" },
            { seatId: 48, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 6,
        row: "B",
        seats: [
            { seatId: 49, seatNumber: 5, status: "available" },
            { seatId: 50, seatNumber: 6, status: "booked" },
            { seatId: 51, seatNumber: 7, status: "available" },
            { seatId: 52, seatNumber: 8, status: "booked" },
            { seatId: 53, seatNumber: 9, status: "available" },
            { seatId: 54, seatNumber: 10, status: "booked" },
            { seatId: 55, seatNumber: 10, status: "booked" },
            { seatId: 56, seatNumber: 10, status: "booked" },
            { seatId: 57, seatNumber: 10, status: "booked" },
            { seatId: 58, seatNumber: 10, status: "booked" },
            { seatId: 59, seatNumber: 10, status: "booked" },
            { seatId: 60, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 7,
        row: "A",
        seats: [
            { seatId: 61, seatNumber: 7, status: "available" },
            { seatId: 62, seatNumber: 8, status: "booked" },
            { seatId: 63, seatNumber: 9, status: "available" },
            { seatId: 64, seatNumber: 10, status: "booked" },
            { seatId: 65, seatNumber: 10, status: "booked" },
            { seatId: 66, seatNumber: 10, status: "booked" },
            { seatId: 67, seatNumber: 10, status: "booked" },
            { seatId: 68, seatNumber: 10, status: "booked" },
            { seatId: 69, seatNumber: 10, status: "booked" },
            { seatId: 70, seatNumber: 10, status: "booked" },
            { seatId: 71, seatNumber: 10, status: "booked" },
            { seatId: 72, seatNumber: 10, status: "booked" },
        ],
    },
];

const dates = [21, 22, 23, 24, 25, 26, 27];
const times = ["13:15", "15:15", "18:15", "20:30", "22:30"];

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
                            className={`${
                                date == activeDate ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
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
                            className={`${
                                time == activeTime ? "bg-gray-lightest-alt" : "bg-gray-darker-alt3"
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
                    <img src={Light} alt='light' />
                </div>
                {seats?.map((row, rowIndex) => (
                    <div className='relative flex items-center justify-center my-[5.5px]' key={rowIndex}>
                        <span className='pr-2 text-white'>{row.row}</span>
                        <div className='flex justify-center w-[380px]'>
                            {row.seats.map((seat, seatIndex) => (
                                <div
                                    key={seatIndex}
                                    onClick={() => handleSeatSelection(rowIndex, seatIndex)}
                                    className={`${
                                        seat.status == SeatStatus.booked
                                            ? "cursor-not-allowed bg-gray-darker-alt4"
                                            : seat.status == SeatStatus.available
                                            ? "cursor-pointer bg-gray-light"
                                            : "cursor-pointer bg-red"
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
                    <div className='w-4 h-4 mr-[12.63px] rounded-full bg-red'></div>
                    <div>Selected</div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
