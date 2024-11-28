import React, {forwardRef} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';

interface ControllerInputProps {
  name: string;
  img?: ImageSourcePropType;
  callbackForImg?: () => void;
  onChange?: (text: string) => void;
  placeholder: string;
  validationStatus?: 'success' | 'error' | null;
  isSecure: boolean;
  description?: string;
  value?: string;
  withError?: boolean;
  errorText?: string;
  focus?: () => void;
  blur?: () => void;
}

export const ControllerInput = forwardRef<TextInput, ControllerInputProps>(
  (props, ref) => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{props.name}</Text>
        {props.description && (
          <Text style={styles.description}>{props.description}</Text>
        )}
        <CustomInput ref={ref} {...props} />
        {props.withError && <Text style={styles.error}>{props.errorText}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#838B86',
    marginVertical: 5,
  },
  error: {
    color: 'red',
  },
});
