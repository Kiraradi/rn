import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList, Screens} from '../types';
import {SignUpForm} from '../../modules/Auth/SignUpForm';

type Props = NativeStackScreenProps<AuthStackParamList, Screens.SignUp>;
export const SignUpScreen: React.FC<Props> = props => {
  const goToSignIn = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.screen}>
      <SignUpForm />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have an account already?</Text>
        <Pressable onPress={goToSignIn}>
          <Text style={[styles.footerText, styles.footerButton]}> Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'static',
    marginBottom: 48,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
  },
  footerButton: {
    color: '#13693B',
  },
});
