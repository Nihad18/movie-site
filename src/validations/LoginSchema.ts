import * as Yup from "yup";
export const LoginSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Email is not valid"),
    password: Yup.string().required("Password is required").min(6, "At least 6 characters are required"),
});
