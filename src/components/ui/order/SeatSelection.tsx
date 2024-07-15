import { useState, useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { SeatStatus } from "@/enums/SeatStatus";

const seatData = [
    {
        rowId: 1,
        row: "A",
        seats: [
            { seatId: 1, seatNumber: 1, status: "available" },
            { seatId: 2, seatNumber: 2, status: "booked" },
            { seatId: 3, seatNumber: 3, status: "booked" },
            { seatId: 4, seatNumber: 4, status: "available" },
        ],
    },
    {
        rowId: 2,
        row: "B",
        seats: [
            { seatId: 5, seatNumber: 1, status: "booked" },
            { seatId: 6, seatNumber: 2, status: "booked" },
            { seatId: 7, seatNumber: 3, status: "available" },
            { seatId: 8, seatNumber: 4, status: "available" },
            { seatId: 9, seatNumber: 5, status: "available" },
            { seatId: 10, seatNumber: 6, status: "available" },
        ],
    },
    {
        rowId: 3,
        row: "C",
        seats: [
            { seatId: 11, seatNumber: 1, status: "booked" },
            { seatId: 12, seatNumber: 2, status: "booked" },
            { seatId: 13, seatNumber: 3, status: "booked" },
            { seatId: 14, seatNumber: 4, status: "available" },
            { seatId: 15, seatNumber: 5, status: "available" },
            { seatId: 16, seatNumber: 6, status: "available" },
            { seatId: 17, seatNumber: 7, status: "available" },
            { seatId: 18, seatNumber: 8, status: "available" },
        ],
    },
    {
        rowId: 4,
        row: "D",
        seats: [
            { seatId: 19, seatNumber: 1, status: "available" },
            { seatId: 20, seatNumber: 2, status: "booked" },
            { seatId: 21, seatNumber: 3, status: "available" },
            { seatId: 22, seatNumber: 4, status: "booked" },
            { seatId: 23, seatNumber: 5, status: "available" },
            { seatId: 24, seatNumber: 6, status: "booked" },
            { seatId: 25, seatNumber: 7, status: "available" },
            { seatId: 26, seatNumber: 8, status: "booked" },
            { seatId: 27, seatNumber: 9, status: "available" },
            { seatId: 28, seatNumber: 10, status: "booked" },
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
            const newSelectedSeats = selectedSeats.filter((item: any) => item.rowId !== selectedRow.rowId && item.seatId !== selectedSeat.seatId);
            setSelectedSeats([...newSelectedSeats]);
        }
        setSeats([...newSeats]);
    };
    // console.log("date : ", activeDate, "\ntime : ", activeTime, "\n selected seats", selectedSeats);
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
                                date == activeDate ? "bg-[#C4C4C4]" : "bg-slate-800"
                            } w-[40px] h-[58px] rounded-[30px] text-white cursor-pointer
                         flex items-center justify-center mr-[23px] last:mr-0`}
                        >
                            {date}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-[447px] h-[1px] bg-[#525252] mx-auto mt-[52px] mb-[46px]'></div>

            <div>
                <div className='text-center text-white text-[25px] pb-[34px]'>Time</div>
                <div className='flex justify-center'>
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTime(time)}
                            className={`${
                                time == activeTime ? "bg-[#C4C4C4]" : "bg-slate-800"
                            } w-[107px] h-[42px] rounded-[30px] text-white cursor-pointer
                         flex items-center justify-center mr-[23px] last:mr-0`}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-[447px] h-[1px] bg-[#525252] mx-auto mt-[52px] mb-[46px]'></div>
            {seats?.map((row, rowIndex) => (
                <div className='flex items-center justify-center py-2' key={rowIndex}>
                    <span className='pr-2 text-white'>{row.row}</span>
                    <div className='flex justify-center'>
                        {row.seats.map((seat, seatIndex) => (
                            <div
                                key={seatIndex}
                                onClick={() => handleSeatSelection(rowIndex, seatIndex)}
                                className={`${
                                    seat.status == SeatStatus.booked
                                        ? "cursor-not-allowed bg-slate-600"
                                        : seat.status == SeatStatus.available
                                        ? "cursor-pointer bg-slate-300"
                                        : "cursor-pointer bg-red-500"
                                }
                                flex items-center justify-center w-[19px] h-[19px] mx-1 rounded-full`}
                            >
                            </div>
                        ))}
                    </div>
                    <span className='pl-2 text-white'>{row.row}</span>
                </div>
            ))}
        </div>
    );
};

export default SeatSelection;
