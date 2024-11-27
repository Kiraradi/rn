import * as yup from 'yup';
export const SignInSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      .required(),
  })
  .required();
