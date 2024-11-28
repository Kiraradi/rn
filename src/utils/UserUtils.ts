import {UserType} from '../store/types';
interface IDataForUpdateUser {
  firstName: string;
  lastName: string;
  accountHandle: string;
  dateOfBirth: string;
}
const createUser = (email: string): UserType => {
  return {
    id: Date.now(),
    name: null,
    email,
    dateOfBirth: null,
    isProfileComplete: false,
  };
};

const updateUser = (user: UserType, data: IDataForUpdateUser): UserType => {
  return {
    ...user,
    name: {
      firstName: data.firstName,
      lastName: data.lastName,
      accountHandle: data.accountHandle,
    },
    dateOfBirth: data.dateOfBirth,
    isProfileComplete: true,
  };
};

export default {
  createUser,
  updateUser,
};
