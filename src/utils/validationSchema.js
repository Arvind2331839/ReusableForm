// utils/validationSchema.js
import * as Yup from "yup";

// export const userSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(5, "At least 5 characters")
//     .max(20, "No more than 20 characters")
//     .required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "At least 6 characters")
//     .max(10, "No more than 10 characters")
//     .required("Password is required"),
//   agree: Yup.boolean().oneOf([true], "You must agree"),
//   gender: Yup.string().required("Gender is required"),
//   skill: Yup.string().required("Skill is required"),
//   resume: Yup.mixed().required("Resume is required"),
// });


export const userSchema = Yup.object().shape({
  name: Yup.string().min(5).max(20).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).max(10).required("Password is required"),
});
