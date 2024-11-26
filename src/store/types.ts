export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type UserState = {
  user: UserType | null;
  pending: boolean;
  hasError: boolean;
};

export type OnboardingState = {
  status: boolean;
};
