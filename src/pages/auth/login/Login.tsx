import { Input } from "@/components/ui/Input";
import styles from "./login.module.scss";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { LoginSchema } from "@/validations";
import { useAuth } from "@/context/AuthContext";
import { LoginData } from "@/types/authTypes";

const Login = () => {
    const initialValues: LoginData = { email: "", password: "" };

    const auth = useAuth();

    return (
        <div className={styles.login}>
            <div className={`${styles.wrapper}`}>
                <h2 className={`text-black ${styles.title} mb-5`}>Login</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            auth?.loginAction(values);
                            actions.setSubmitting(false);
                        }, 3000);
                    }}
                    validationSchema={LoginSchema}
                >
                    {(props) => (
                        <form className='grid gap-y-5' onSubmit={props.handleSubmit} noValidate>
                            <Input name='email' type='email' id='email' placeholder='Email' />
                            <Input name='password' type='password' id='password' placeholder='Password' />
                            <div className='relative'>
                                <Button className='w-full' type='submit' disabled={props.isSubmitting}>
                                    <span className={`${props.isSubmitting ? "hidden" : "block"}`}>Login</span>
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
                    Don't have an account yet?{" "}
                    <Link
                        className='font-semibold text-blue-600'
                        data-testid='register-link'
                        data-track-action='click_register_from_sign_in_page'
                        data-track-label='free_registration'
                        to='/register'
                    >
                        Register now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
