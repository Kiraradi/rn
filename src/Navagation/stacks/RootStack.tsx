import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStackParamList, Screens} from '../types';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {CompleteProfileStack} from './CompleteProfileStack';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack: React.FC = () => {
  const user = useAppSelector(state => state.user.user);
  return (
    <Stack.Navigator>
      {user?.isProfileComplete ? (
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
      ) : (
        <Stack.Screen
          name={Screens.CompleteProfileStack}
          component={CompleteProfileStack}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
