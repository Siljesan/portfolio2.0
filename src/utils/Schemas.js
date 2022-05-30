import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter subject"),
  message: yup.string().required("Please write your message"),
});
