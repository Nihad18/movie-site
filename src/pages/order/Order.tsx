import OrderModal from "@/components/orderModal/OrderModal";
import SeatSelection from "@/components/ui/order/SeatSelection";
import SelectedSeats from "@/components/ui/order/SelectedSeats";
import { useState } from "react";
import styles from "./order.module.scss"
import { Button } from "@/components/ui/Button";

const Order = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [congratsModal, setCongratsModal] = useState<boolean>(false)
    return (
        <div className='lg:flex h-[100vh] w-[100vw] bg-black'>
            <div className='container absolute left-0 right-0 z-10 w-full top-[70px] 2xl:top-[100px]'>
                <div className='inline-flex items-center text-white border-b border-solid font-medum ms-1 border-primary'>
                    <div className='text-[20px]'>Spirited away</div>
                    <div className='ml-[20px] text-[16px]'>1 h. 18 m.</div>
                </div>
            </div>
            <SelectedSeats setShowModal={setShowModal} />
            <SeatSelection />
            {showModal &&
                <OrderModal setShowModal={setShowModal} setCongratsModal={setCongratsModal} />
            }
            {
                congratsModal &&
                <div className={styles.modal}>
                    <div className={styles["modal-inner"]}>
                        <div className="relative h-full">
                            <button
                                className={styles.closeBtn}
                                type="button"
                                onClick={() => setCongratsModal(false)}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 7L13 13M1 13L7 7L1 13ZM13 1L6.99886 7L13 1ZM6.99886 7L1 1L6.99886 7Z"
                                        stroke="#606060"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div className="py-[54px] h-full md:px-[74px] text-center">
                                <h5 className="font-semibold text-[20px] leading-[64px] mb-[14px] text-black">Congratulations!</h5>
                                <p className="font-semibold text-[15px] leading-1.5 text-gray-darker">Your’ve bought two tickets. Please, save it on your <br />
                                    device and show before the entering <br />
                                    to the theatre</p>
                                <Button className="max-w-[250px] w-full mt-7" type="button">Save tickets</Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Order;
