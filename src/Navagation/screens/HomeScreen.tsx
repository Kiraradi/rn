import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackProps, Screens} from '../types';

export const HomeScreen: React.FC<RootStackProps<Screens.Home>> = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
