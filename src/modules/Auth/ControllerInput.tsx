import React from 'react';
import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';

interface ControllerInputProps {
  name: string;
  img?: ImageSourcePropType;
  callbackForImg?: () => void;
  onChange?: (text: string) => void;
  placeholder: string;
  validationStatus?: 'success' | 'error' | null;
  isSecure: boolean;
  value?: string;
  withError?: boolean;
  errorText?: string;
}
export const ControllerInput: React.FC<ControllerInputProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.name}</Text>
      <CustomInput {...props} />
      {props.withError && <Text style={styles.error}>{props.errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },

  error: {
    color: 'red',
  },
});
