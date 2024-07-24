import { Input } from "@/components/ui/Input";
import styles from "./login.module.scss";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { LoginSchema } from "@/validations";
import { useAuth } from "@/context/AuthContext";
import { LoginData } from "@/types/AuthTypes";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState<string>("")
    const initialValues: LoginData = { email: "", password: "" };

    const auth = useAuth();

    return (
        <div className={styles.login}>
            <div className={`${styles.wrapper}`}>
                <h2 className={`text-black ${styles.title} mb-5`}>Login</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, actions) => {
                        const login = await auth?.loginAction(values)
                        if (!login) {
                            setError("Login or password is wrong!")
                        }
                        actions.setSubmitting(false);

                    }}

                    validationSchema={LoginSchema}
                >
                    {(props) => (
                        <form className='grid gap-y-5' onSubmit={props.handleSubmit} noValidate>
                            <Input name='email' type='email' id='email' placeholder='Email' />
                            <div className="grid gap-y-2">
                                <Input name='password' type='password' id='password' placeholder='Password' />
                                {error && <p className="text-red-600">{error}</p>}
                            </div>
                            <div className='relative'>
                                <Button className='w-full' type='submit' disabled={props.isSubmitting}>
                                    <span className={`${props.isSubmitting ? "hidden" : "block"}`}>Login</span>
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
                <div className='mt-3 text-center px-3 md:px-0'>
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
