import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CompleteProfileStackProps, Screens} from '../types';
import {CompleteProfileForm} from '../../modules/CompleteProfile/CompleteProfileForm';

export const CompleteProfileScreen: React.FC<
  CompleteProfileStackProps<Screens.CompleteProfile>
> = () => {
  return (
    <View style={styles.wrapper}>
      <CompleteProfileForm />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
