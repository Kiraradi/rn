import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type PasswordVerificationListProps = {
  password: string;
  confirmPasswordValue: string;
  isShow: boolean;
};
export const PasswordVerificationList: React.FC<
  PasswordVerificationListProps
> = ({password, isShow: isPasswordFocused, confirmPasswordValue}) => {
  const checkCriteria = (password: string) => ({
    hasMinLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[\W_]/.test(password),
    passwordsMatch: password === confirmPasswordValue,
  });
  const slideInValue = useSharedValue(isPasswordFocused ? 1 : 0);
  React.useEffect(() => {
    slideInValue.value = withTiming(isPasswordFocused ? 1 : 0, {duration: 100});
  }, [isPasswordFocused, slideInValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: slideInValue.value * 0},
      {translateX: (1 - slideInValue.value) * 200},
    ],
    opacity: slideInValue.value,
    display: slideInValue.value > 0 ? 'flex' : 'none',
    height: slideInValue.value * 150,
  }));

  const passwordCriteria = checkCriteria(password);
  return (
    <Animated.View style={[styles.criteriaContainer, animatedStyle]}>
      <Text
        style={[
          styles.criteria,
          passwordCriteria.hasMinLength && styles.valid,
        ]}>
        Must be at least 8 characters
      </Text>
      <Text
        style={[
          styles.criteria,
          passwordCriteria.hasLowercase && styles.valid,
        ]}>
        Must contain lowercase letter
      </Text>
      <Text
        style={[
          styles.criteria,
          passwordCriteria.hasUppercase && styles.valid,
        ]}>
        Must contain uppercase letter
      </Text>
      <Text
        style={[styles.criteria, passwordCriteria.hasNumber && styles.valid]}>
        Must contain at least 1 number
      </Text>
      <Text
        style={[
          styles.criteria,
          passwordCriteria.hasSpecialChar && styles.valid,
        ]}>
        Must contain at least 1 symbol
      </Text>
      <Text
        style={[
          styles.criteria,
          passwordCriteria.passwordsMatch && styles.valid,
        ]}>
        Both passwords must match
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  criteriaContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  criteria: {
    color: 'red',
    marginBottom: 5,
  },
  valid: {
    color: 'green',
  },
});
