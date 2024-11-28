export type UserType = {
  id: number;
  name: NameInfo | null;
  email: string;
  dateOfBirth: string | null;
  isProfileComplete: boolean;
};

export type NameInfo = {
  firstName: string;
  lastName: string;
  accountHandle: string;
};

export type UserState = {
  user: UserType | null;
  pending: boolean;
  hasError: boolean;
};

export type OnboardingState = {
  status: boolean;
};
