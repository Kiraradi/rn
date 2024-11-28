import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CompleteProfileStackParamList, Screens} from '../types';
import {CompleteProfileScreen} from '../screens/CompleteProfileScreen';
import {SuccessCompleteProfileScreen} from '../screens/SuccessCompleteProfileScreen';

const Stack = createNativeStackNavigator<CompleteProfileStackParamList>();
export const CompleteProfileStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CompleteProfile}
        component={CompleteProfileScreen}
        options={{
          headerTitle: 'COMPLETE YOUR PROFILE',
        }}
      />
      <Stack.Screen
        name={Screens.SuccessCompleteProfile}
        component={SuccessCompleteProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
