import * as Yup from "yup";

const namePattern = /^[A-Za-zƏəĞğİıÖöŞşÜüÇç\s-]+$/;

export const RegisterSchema = Yup.object({
    firstName: Yup.string()
        .required("Name is required")
        .min(2, "The name must be at least 2 letters long")
        .matches(namePattern, "The name can only include letters, spaces, and hyphens"),
    lastName: Yup.string()
        .required("Surname is required")
        .min(2, "The surname must be at least 2 letters long")
        .matches(namePattern, "The surname can only include letters, spaces, and hyphens"),
    email: Yup.string().required("Email is required").email("Email is not valid"),
    phone: Yup.string().required("Phone is required").length(16, "Cell phone must be exactly 7 digits long"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "At least 8 characters are required")
        .matches(/[a-z]/, "At least one lowercase letter is required")
        .matches(/[A-Z]/, "At least one uppercase letter is required")
        .matches(/[0-9]/, "At least one number is required")
        .matches(/[^a-zA-Z0-9]/, "At least one special character is required"),
    birthDate: Yup.string().required("Birth date is required"),
});
