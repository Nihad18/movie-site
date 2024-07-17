import SeatSelection from "@/components/ui/order/SeatSelection";
import SelectedSeats from "@/components/ui/order/SelectedSeats";

const Order = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] bg-black'>
            <div className='container absolute left-0 right-0 z-10 w-full xl:top-[70px] 2xl:top-[170px]'>
                <div className='inline-flex items-center text-white border-b border-solid font-medum ms-1 border-primary'>
                    <div className='text-[20px]'>Spirited away</div>
                    <div className='ml-[20px] text-[16px]'>1 h. 18 m.</div>
                </div>
            </div>
            <SelectedSeats />
            <SeatSelection />
        </div>
    );
};

export default Order;
