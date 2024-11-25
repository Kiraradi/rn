import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screens {
  Home = 'Home',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Onboarding = 'Onboarding',
}

export type RootStackParamList = {
  [Screens.Home]: undefined;
};

export type AuthStackParamList = {
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Onboarding]: undefined;
};

export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
