import * as yup from "yup";

export const createUserValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(18).required(),
});

export const findByEmailValidation = yup.object().shape({
  email: yup.string().email().required(),
});

export const deleteByEmailValidation = yup.object().shape({
  email: yup.string().email().required(),
});

export const updateByEmailValidation = yup.object().shape({
  name: yup.string(),
  password: yup.string().min(6).max(18),
  email: yup.string().email().required(),
});
