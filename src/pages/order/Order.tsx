import SeatSelection from "@/components/ui/order/SeatSelection";
import SelectedSeats from "@/components/ui/order/SelectedSeats";

const Order = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] bg-black'>
            <SelectedSeats />
            <SeatSelection />
        </div>
    );
};

export default Order;
