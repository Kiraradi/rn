import * as yup from 'yup';
export const SignUpSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, 'Must be at least 8 characters')
      .matches(/[a-z]/, 'Must contain lowercase letter')
      .matches(/[A-Z]/, 'Must contain uppercase letter')
      .matches(/[0-9]/, 'Must contain at least 1 number')
      .matches(/[\W_]/, 'Must contain at least 1 symbol')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Both passwords must match')
      .required('Confirm password is required'),
  })
  .required();
