import * as yup from "yup";

export const createSessionValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
