import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {RootStack} from './stacks/RootStack';

export const NavagationProvider: FC = () => {
  return (
    <NavigationContainer
      onReady={async () => {
        await BootSplash.hide({fade: true});
      }}>
      <RootStack />
    </NavigationContainer>
  );
};
