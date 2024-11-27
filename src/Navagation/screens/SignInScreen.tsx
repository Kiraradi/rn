import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SignInForm} from '../../modules/Auth/SignInForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList, Screens} from '../types';
type Props = NativeStackScreenProps<AuthStackParamList, Screens.SignIn>;
export const SignInScreen: React.FC<Props> = props => {
  const goToSignUp = () => {
    props.navigation.navigate(Screens.SignUp);
  };
  return (
    <View style={styles.screen}>
      <SignInForm />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Pressable onPress={goToSignUp}>
          <Text style={[styles.footerText, styles.footerButton]}> Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
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
