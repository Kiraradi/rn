import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {RootStack} from './stacks/RootStack';
import {AuthStack} from './stacks/AuthStack';
import useOnboardigStatus from '../hooks/useOnboardigStatus';

export const NavagationProvider: FC = () => {
  const {isAvailable} = useOnboardigStatus();

  React.useEffect(() => {
    if (isAvailable) {
      setTimeout(() => {
        BootSplash.hide({fade: true});
      }, 1000);
    }
  }, [isAvailable]);
  return (
    <NavigationContainer>
      {false ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
