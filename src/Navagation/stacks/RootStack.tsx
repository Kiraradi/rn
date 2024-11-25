import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStackParamList, Screens} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};
