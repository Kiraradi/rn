import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {UserType} from '../store/types';
import {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';

export enum Screens {
  Home = 'Home',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Onboarding = 'Onboarding',
  CompleteProfileStack = 'CompleteProfileStack',
  CompleteProfile = 'CompleteProfile',
  SuccessCompleteProfile = 'SuccessCompleteProfile',
}

export type RootStackParamList = {
  [Screens.CompleteProfileStack]: CompleteProfileStackParamList;
  [Screens.Home]: undefined;
};

export type CompleteProfileStackParamList = {
  [Screens.CompleteProfile]: undefined;
  [Screens.SuccessCompleteProfile]: {user: UserType};
};

export type AuthStackParamList = {
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Onboarding]: undefined;
};
export type CompleteProfileStackProps<
  T extends keyof CompleteProfileStackParamList,
> = NativeStackScreenProps<CompleteProfileStackParamList, T>;
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type SuccessCompleteProfileProps = CompositeNavigationProp<
  NativeStackNavigationProp<
    CompleteProfileStackParamList,
    Screens.SuccessCompleteProfile
  >,
  NavigationProp<RootStackParamList>
>;
