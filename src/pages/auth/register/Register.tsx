import { Input } from "@/components/ui/Input";
import styles from "./register.module.scss";
import { Button } from "@/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { RegisterSchema } from "@/validations";
import { RegisterData } from "@/types/authTypes";
import DatePicker from "@/components/ui/datePicker/DatePicker";

const Login = () => {
    const initialValues: RegisterData = { name: "", surname: "", email: "", dateOfBirth: "", password: "" };
    const navigate = useNavigate();

    return (
        <div className={styles.login}>
            <div className={`${styles.wrapper}`}>
                <h2 className={`text-black ${styles.title} mb-5`}>Sign Up</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            navigate("/login");
                        }, 3000);
                    }}
                    validationSchema={RegisterSchema}
                >
                    {(props) => (
                        <form className='grid gap-y-5' onSubmit={props.handleSubmit} noValidate>
                            <Input name='name' type='text' id='name' placeholder='Name' />
                            <Input name='surname' type='text' id='surname' placeholder='Surname' />
                            <Input name='email' type='email' id='email' placeholder='Email' />
                            <DatePicker name='dateOfBirth' placeholder='Birth date' />
                            <Input name='password' type='password' id='password' placeholder='Password' />
                            <div className='relative'>
                                <Button className='w-full' type='submit' disabled={props.isSubmitting}>
                                    <span className={`${props.isSubmitting ? "hidden" : "block"}`}>Sign Up</span>
                                </Button>
                                <div className={`${styles["spinner-container"]} ${props.isSubmitting ? "block" : "hidden"} grid place-items-center`}>
                                    <div className={styles["dot-spinner"]}>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
                                        <div className={styles["dot-spinner__dot"]}></div>
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

export default Login;
