import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import { Button } from "../Button";
import styles from "./selectedSeats.module.scss";
const SelectedSeats = () => {
    const { selectedSeats, setSelectedSeats } = useContext(DataContext);
    const handleClick = (rowId: number, seatId: number) => {
        const selectedSeat = selectedSeats.find((item) => item.rowId === rowId && item.seatId === seatId);
        let newSelectedSeats;
        if (selectedSeat) {
            newSelectedSeats = selectedSeats.filter((item) => !(item.rowId === selectedSeat.rowId && item.seatId === selectedSeat.seatId));
            setSelectedSeats([...newSelectedSeats]);
        }
    };
    return (
        <div className='relative w-[708px] h-full flex items-center justify-center'>
            <img src="/movie-poster.png" className='absolute object-cover w-full h-full' />
            {selectedSeats.length > 0 && (
                <div className=' relative text-xl text-white bg-black w-[409px] h-[524px]'>
                    <div className='mt-[41px] mb-[44px] text-center'>Selected seats</div>
                    <div className={`${styles.scroller} overflow-y-auto h-[32%] mx-[6px]`}>
                        {selectedSeats.map((ticket: any, index: any) => (
                            <div key={index} className='flex items-center justify-center mb-[24px] last:mb-0'>
                                <div className='w-[19px] h-[19px] mr-[23px] rounded-full bg-gray-light'></div>
                                {ticket.row}
                                {" row / "}
                                {ticket.seatNumber}
                                {" seat"}
                                <div className='ml-[33px] mr-[34px]'>$24</div>
                                <div className='cursor-pointer' onClick={() => handleClick(ticket.rowId, ticket.seatId)}>
                                    X
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='absolute left-[50%] translate-x-[-50%] bottom-[115px] '>
                        <div className='mb-[32px] text-center'>
                            <Button className=' h-[50px] w-[250px] rounded-[10px] text-white text-[20px] font-medium bg-primary-dark'>Purchase</Button>
                        </div>
                        <div className='text-center text-[15px] text-gray-dark font-medium'>Time left to purchase: 10:15</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedSeats;
