import { Input } from "@/components/ui/Input"
import styles from "./login.module.scss"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { Formik } from 'formik';
import { LoginSchema } from "@/validations";

interface MyFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  return (
    <div style={{ backgroundImage: "url(/bg-cover.png)" }} className={styles.login}>
      <div className={`${styles.wrapper}`}>
        <h2 className={`text-black ${styles.title} mb-5`}>Login</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1);
          }}
          validationSchema={LoginSchema}
        >
          {props => (
            <form className="grid gap-y-5" onSubmit={props.handleSubmit} noValidate>
              <Input name="email" type="email" id="email" placeholder="Email" />
              <Input name="password" type="password" id="password" placeholder="Password" />
              <Button type="submit">Sign In</Button>
            </form>
          )}
        </Formik>
        <div className="mt-3 text-center">
          Don't have an account yet? {" "}
          <Link className="text-blue-600 font-semibold" data-testid="register-link" data-track-action="click_register_from_sign_in_page" data-track-label="free_registration" to="/register">Register now</Link>
        </div>
      </div>
    </div>
  )
}

export default Login