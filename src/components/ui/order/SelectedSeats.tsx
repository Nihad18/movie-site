import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import Img from "../../../../public/movie-poster.png";
const SelectedSeats = () => {
    const {selectedSeats } = useContext(DataContext);
    return (
        <div className='relative w-[708px] h-full flex items-center justify-center'>
            <img src={Img} className='absolute object-cover w-full h-full' />
            {selectedSeats.length > 0 && (
                <div className=' overflow-auto relative text-xl text-white bg-[#121212] w-[409px] h-[524px]'>
                    <div className='mt-[41px] mb-[44px] text-center'>Selected seats</div>
                    <div className='overflow-x-hidden '>
                        {selectedSeats.map((ticket: any, index: any) => (
                            <div key={index} className='flex items-center justify-center mb-[24px] last:mb-0'>
                                <div className='w-[19px] h-[19px] mr-[23px] rounded-full bg-[#A4A4A4]'></div>
                                {ticket.row}
                                {" row / "}
                                {ticket.seatNumber}
                                {" seat"}
                                <div className='ml-[33px] mr-[34px]'>$24</div>
                                <div>X</div>
                            </div>
                        ))}
                    </div>
                    <div className='my-[32px] text-center'>Purchase</div>
                    <div className='mb-[115px] text-center'>Time left to purchase: 10:15</div>
                </div>
            )}
        </div>
    );
};

export default SelectedSeats;
