// utils/validationSchema.js
import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  agree: Yup.boolean().oneOf([true], "You must agree"),
  gender: Yup.string().required("Gender is required"),
  skill: Yup.string().required("Skill is required"),
  resume: Yup.mixed().required("Resume is required"),
});
