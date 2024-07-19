import * as Yup from "yup";

export const OrderFormSchema = Yup.object({
  nameSurname: Yup.string()
    .required("Name and surname is required")
    .matches(/^[a-zA-Z\s]+$/, "Name and Surname must be together and contain only letters and spaces")
    .min(2, "The name must be at least 2 letters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not valid"),
  cellPhone: Yup.string()
    .required("Cell phone is required")
    .length(16, "Cell phone must be exactly 7 digits long"),
  // payment: Yup.string()
  //   .required("Card number is required")
  //   .length(19, "Card number must be at least 16 digits long")
  //   .matches(/^(\d{4}-){3}\d{4}$/, "Card number must be in the format 1234-5678-9012-3456")
  payment: Yup.string().test('card-complete', 'Card information is incomplete', value => value === 'complete')
});
