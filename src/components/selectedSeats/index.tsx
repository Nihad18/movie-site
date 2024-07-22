import React, { useContext, useEffect } from "react";
import { DataContext } from "@/context/MainContext";
import styles from "./selectedSeats.module.scss";
import { SeatStatus } from "@/enums/SeatStatus";
import { Row, Seat, SelectedSeatWithRow } from "@/types/SeatDataTypes";
import { Button } from "../ui/Button";
interface SelectedSeatsProps {
    setShowModal: (argument: boolean) => void;
}
const SelectedSeats: React.FC<SelectedSeatsProps> = ({ setShowModal }) => {
    const { activeDate, activeTime, seats, setSeats, selectedSeats, setSelectedSeats } = useContext(DataContext);
    const handleClick = (rowId: number, seatId: number) => {
        const newSeats = [...seats];
        const selectedSeat = newSeats.find((row: Row) => row.rowId === rowId)?.seats.find((seat: Seat) => seat.seatId === seatId);
        if (selectedSeat && selectedSeat.status === SeatStatus.SELECTED) {
            selectedSeat.status = SeatStatus.AVAILABLE;
        }
        setSeats([...newSeats]);
    };
    useEffect(() => {
        const selectedSeats = seats.flatMap((row: Row) =>
            row.seats
                .filter((seat: Seat) => seat.status === SeatStatus.SELECTED)
                .map((seat: Seat) => ({
                    rowId: row.rowId,
                    row: row.row,
                    seat: seat,
                })),
        );

        setSelectedSeats(selectedSeats);
    }, [seats]);
    console.log(selectedSeats);
    return (
        <div
            className='w-full relative grid min-h-screen place-items-center bg-cover bg-center bg-no-repeat lg:w-[47%]'
            style={{ backgroundImage: "url(https://image.tmdb.org/t/p/original//hqDkO0W9uk4aiwzn3pTeLO7NPZD.jpg)" }}
        >
            {activeDate > 0 && activeTime !== "" && selectedSeats.length > 0 && (
                <div className='relative mt-[100px] h-[524px] w-[90%] bg-black text-xl text-white sm:w-[409px] 2xl:mt-[150px]'>
                    <div className='mb-[44px] mt-[41px] text-center'>Selected seats</div>
                    <div className={`${styles.scroller} mx-[6px] h-[32%] overflow-y-auto`}>
                        {selectedSeats.map((selectedSeat: SelectedSeatWithRow) => (
                            <div key={selectedSeat.seat.seatId} className='mb-[24px] flex items-center justify-center last:mb-0'>
                                <div className='mr-[23px] h-[19px] w-[19px] rounded-full bg-gray-light'></div>
                                {selectedSeat.row} row / {selectedSeat.seat.seatNumber} seat
                                <div className='ml-[33px] mr-[34px]'>$24</div>
                                <div className='cursor-pointer' onClick={() => handleClick(selectedSeat.rowId, selectedSeat.seat.seatId)}>
                                    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M7 7L13 13M1 13L7 7L1 13ZM13 1L6.99886 7L13 1ZM6.99886 7L1 1L6.99886 7Z'
                                            stroke='#787878'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='absolute bottom-[115px] left-[50%] translate-x-[-50%]'>
                        <div className='mb-[32px] text-center'>
                            <Button
                                onClick={() => setShowModal(true)}
                                className='h-[50px] w-[250px] rounded-[10px] bg-primary-dark text-[20px] font-medium text-white'
                            >
                                Purchase <span className='pl-2'>({`${selectedSeats.length * 24}$`})</span>
                            </Button>
                        </div>
                        <div className='text-center text-[15px] font-medium text-gray-dark'>Time left to purchase: 10:15</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedSeats;
