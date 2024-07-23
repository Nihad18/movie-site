import React, { useContext, useState } from "react";
import { Formik, FormikProps, ErrorMessage } from "formik";
import styles from "./orderModal.module.scss";
import { OrderFormSchema } from "@/validations";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { OrderFormData } from "@/types/Common";
import { useAuth } from "@/context/AuthContext";
import { DataContext } from "@/context/MainContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import classNames from "classnames";
import { CellPhoneInput } from "../ui/CellPhoneInput";
import { Row, Seat, SelectedSeatWithRow } from "@/types/SeatDataTypes";
import { SeatStatus } from "@/enums/SeatStatus";

interface OrderModalProps {
    setShowModal: (argument: boolean) => void;
    setCongratsModal: (argument: boolean) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ setShowModal, setCongratsModal }) => {
    const { seats, setSeats, selectedSeats, setSelectedSeats } = useContext(DataContext);
    
    const initialValues: OrderFormData = {
        nameSurname: "",
        email: "",
        cellPhone: "",
        payment: "",
    };

    const stripe = useStripe();
    const elements = useElements();
    const user = useAuth();
    const [cardError, setCardError] = useState<string | undefined>(undefined);

    if (user?.token && !initialValues.email) {
        initialValues.email = user.user;
    }

    const handleCardElementChange = (event: any, setFieldValue: (field: string, value: any) => void) => {
        setFieldValue("payment", event.complete ? "complete" : "");
        setCardError(event.error ? event.error.message : null);
    };

    const updatedSeats = () => {
        const updatedSeats = seats.map((row: Row) => ({
            ...row,
            seats: row.seats.map((seat: Seat) =>
                selectedSeats.some((selectedSeat: SelectedSeatWithRow) => selectedSeat.seat.seatId === seat.seatId)
                    ? { ...seat, status: SeatStatus.Booked }
                    : seat,
            ),
        }));
        setSeats([...updatedSeats]);
        setSelectedSeats([]);
    };

    return (
        <div className={styles.modal}>
            <div className={styles["modal-inner"]}>
                <div className='relative'>
                    <button className={styles.closeBtn} type='button' onClick={() => setShowModal(false)}>
                        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M7 7L13 13M1 13L7 7L1 13ZM13 1L6.99886 7L13 1ZM6.99886 7L1 1L6.99886 7Z'
                                stroke='#787878'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                    <div className={styles["modal-inner"]}>
                        <h5 className={styles.title}>ORDER</h5>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values, actions) => {
                                if (!stripe || !elements) {
                                    return;
                                }
                                const cardElement = elements.getElement(CardElement);

                                if (cardElement) {
                                    const { error, paymentMethod } = await stripe.createPaymentMethod({
                                        type: "card",
                                        card: cardElement,
                                    });

                                    if (error) {
                                        console.error(error);
                                        setCardError(error.message);
                                    } else {
                                        console.log("PaymentMethod", paymentMethod);
                                        updatedSeats();
                                        // Send paymentMethod.id to your server to handle the payment
                                    }
                                }
                                actions.setSubmitting(false);
                                alert(JSON.stringify(values, null, 2));
                                setShowModal(false);
                                setCongratsModal(true);
                            }}
                            validationSchema={OrderFormSchema}
                        >
                            {(props: FormikProps<OrderFormData>) => (
                                <form className='grid gap-y-2' onSubmit={props.handleSubmit} noValidate>
                                    <Input name='nameSurname' type='text' id='nameSurname' label='Name and surname' />
                                    <Input name='email' type='email' id='email' label='Email' />
                                    <div className='mb-3 field'>
                                        <label htmlFor='promo' className={styles.label}>
                                            Promo
                                        </label>
                                        <div className={styles["input-group"]}>
                                            <Input name='promo' type='text' id='promo' />
                                            <Button type='button' variant={"outline"}>
                                                Apply
                                            </Button>
                                        </div>
                                    </div>
                                    <CellPhoneInput name='cellPhone' type='text' label='Cell.phone' />
                                    <div className='mt-1 h-[80px]'>
                                        <label htmlFor='payment' className={styles.label}>
                                            Payment
                                        </label>
                                        <CardElement
                                            id='payment'
                                            className={classNames({
                                                "placeholder:text-muted-foreground h-10 rounded-md border border-solid border-gray-lightest-alt2 px-4 py-[11px] text-[15px] text-sm font-medium text-black outline-none transition-all":
                                                    true,
                                                "border-red-600": cardError || props.errors.payment,
                                            })}
                                            onChange={(event) => handleCardElementChange(event, props.setFieldValue)}
                                        />
                                        {cardError ? (
                                            <div className='mt-1 text-sm text-red-600'>{cardError}</div>
                                        ) : (
                                            <ErrorMessage name='payment' component='div' className='mt-1 text-sm text-red-600' />
                                        )}
                                    </div>
                                    <div className='relative mt-5'>
                                        <Button
                                            className='mx-auto flex w-full max-w-[250px] bg-primary-dark'
                                            type='submit'
                                            disabled={props.isSubmitting}
                                        >
                                            <span className={`${props.isSubmitting ? "hidden" : "block"}`}>Purchase (48$)</span>
                                        </Button>
                                        <div className={`spinner-container ${props.isSubmitting ? "block" : "hidden"} grid place-items-center`}>
                                            <div className={"dot-spinner"}>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                                <div className={"dot-spinner__dot"}></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
