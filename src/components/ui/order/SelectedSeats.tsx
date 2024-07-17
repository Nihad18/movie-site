import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { Button } from "../Button";
import styles from "./selectedSeats.module.scss";
import { SeatStatus } from "@/enums/SeatStatus";
const SelectedSeats = () => {
    const { activeDate, activeTime, seats, setSeats } = useContext(DataContext);
    const handleClick = (rowId: number, seatId: number) => {
        const newSeats = [...seats];
        const selectedSeat = newSeats.find((row) => row.rowId === rowId)?.seats.find((seat) => seat.seatId === seatId);
        if (selectedSeat && selectedSeat.status === SeatStatus.selected) {
            selectedSeat.status = SeatStatus.available;
        }
        setSeats([...newSeats]);
    };
    return (
        <div className='relative w-[708px] h-full flex items-center justify-center'>
            <img src='/movie-poster.png' className='absolute object-cover w-full h-full' />
            {activeDate > 0 && activeTime !== "" && (
                <div className=' relative text-xl text-white bg-black w-[409px] h-[524px]'>
                    <div className='mt-[41px] mb-[44px] text-center'>Selected seats</div>
                    <div className={`${styles.scroller} overflow-y-auto h-[32%] mx-[6px]`}>
                        {seats.map((row) => {
                            const selectedSeats = row.seats.filter((seat) => seat.status === SeatStatus.selected);

                            return selectedSeats.map((seat: any) => (
                                <div key={seat.seatId} className='flex items-center justify-center mb-[24px] last:mb-0'>
                                    <div className='w-[19px] h-[19px] mr-[23px] rounded-full bg-gray-light'></div>
                                    {row.row} row / {seat.seatNumber} seat
                                    <div className='ml-[33px] mr-[34px]'>$24</div>
                                    <div className='cursor-pointer' onClick={() => handleClick(row.rowId, seat.seatId)}>
                                        X
                                    </div>
                                </div>
                            ));
                        })}
                    </div>
                    <div className='absolute left-[50%] translate-x-[-50%] bottom-[115px] '>
                        <div className='mb-[32px] text-center'>
                            <Button className=' h-[50px] w-[250px] rounded-[10px] text-white text-[20px] font-medium bg-primary-dark'>
                                Purchase
                            </Button>
                        </div>
                        <div className='text-center text-[15px] text-gray-dark font-medium'>Time left to purchase: 10:15</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedSeats;
