import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList, Screens} from '../types';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {useAppSelector} from '../../store/hooks/useAppSelector';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC = () => {
  const onboardingStatus = useAppSelector(state => state.onboarding.status);
  return (
    <Stack.Navigator>
      {onboardingStatus ? (
        <>
          <Stack.Screen name={Screens.SignIn} component={SignInScreen} />
          <Stack.Screen name={Screens.SignUp} component={SignUpScreen} />
        </>
      ) : (
        <Stack.Screen
          name={Screens.Onboarding}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
