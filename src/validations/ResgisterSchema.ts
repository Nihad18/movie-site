import * as Yup from "yup";

const namePattern = /^[A-Za-zƏəĞğİıÖöŞşÜüÇç\s-]+$/;

export const RegisterSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(2, "The name must be at least 2 letters long")
        .matches(namePattern, "The name can only include letters, spaces, and hyphens"),
    surname: Yup.string()
        .required("Surname is required")
        .min(2, "The surname must be at least 2 letters long")
        .matches(namePattern, "The surname can only include letters, spaces, and hyphens"),
    email: Yup.string().required("Email is required").email("Email is not valid"),
    password: Yup.string().required("Password is required").min(6, "At least 6 characters are required"),
    dateOfBirth: Yup.string().required("Birth date is required"),
});
