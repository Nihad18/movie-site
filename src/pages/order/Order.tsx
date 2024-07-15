import SeatSelection from "@/components/ui/order/SeatSelection";
import SelectedSeats from "@/components/ui/order/SelectedSeats";

const Order = () => {
    return (
        <div className='flex w-[100vw] h-[100vh] bg-[#121212]'>
            <SelectedSeats />
            <SeatSelection />
        </div>
    );
};

export default Order;
