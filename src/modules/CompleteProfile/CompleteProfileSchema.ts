import * as yup from 'yup';
export const CompleteProfileSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    accountHandle: yup.string().required(),
    dateOfBirth: yup.string().required(),
  })
  .required();
