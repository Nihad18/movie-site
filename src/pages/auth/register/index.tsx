import { Input } from "@/components/ui/Input";
import styles from "./register.module.scss";
import { Button } from "@/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { RegisterSchema } from "@/validations";
import { RegisterData } from "@/types/AuthTypes";
import DatePicker from "@/components/ui/datePicker/DatePicker";
import UserService from "@/services/UserService";
import { CellPhoneInput } from "@/components/ui/CellPhoneInput";

const Register = () => {
    const initialValues: RegisterData = { firstName: "", lastName: "", email: "", phone: "", birthDate: "", password: "" };
    const navigate = useNavigate();
    return (
        <div className={styles.login}>
            <div className={`${styles.wrapper}`}>
                <h2 className={`text-black ${styles.title} mb-5`}>Sign Up</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, actions) => {
                        try {
                            const res = await UserService.register(values);
                            if (res) {
                                actions.setSubmitting(false);
                                navigate("/login");
                            }
                        } catch (error) {
                            console.error("Error during registration:", error);
                            actions.setSubmitting(false);
                        }
                    }}
                    validationSchema={RegisterSchema}
                >
                    {(props) => (
                        <form className='grid gap-y-5' onSubmit={props.handleSubmit} noValidate>
                            <Input name='firstName' type='text' id='name' placeholder='Name' />
                            <Input name='lastName' type='text' id='surname' placeholder='Surname' />
                            <Input name='email' type='email' id='email' placeholder='Email' />
                            <CellPhoneInput name="phone" type="text" />
                            <DatePicker name='birthDate' placeholder='Birth date' />
                            <Input name='password' type='password' id='password' placeholder='Password' />
                            <div className='relative'>
                                <Button className='w-full' type='submit' disabled={props.isSubmitting}>
                                    <span className={`${props.isSubmitting ? "hidden" : "block"}`}>Sign Up</span>
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
                <div className='mt-3 text-center'>
                    Already have an account?{" "}
                    <Link
                        className='font-semibold text-blue-600'
                        data-testid='login-link'
                        data-track-action='click_login_from_sign_in_page'
                        data-track-label='free_registration'
                        to='/login'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
