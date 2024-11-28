import React, {forwardRef} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface ICustomInput {
  value?: string;
  onChange?: (text: string) => void;
  img?: ImageSourcePropType;
  placeholder: string;
  validationStatus?: 'success' | 'error' | null;
  isSecure: boolean;
  callbackForImg?: () => void;
  focus?: () => void;
  blur?: () => void;
}

const CustomInput = forwardRef<TextInput, ICustomInput>((props, ref) => {
  return (
    <View style={styles.container}>
      {props.img && (
        <Pressable onPress={props.callbackForImg} style={styles.Pressable}>
          <Image source={props.img} />
        </Pressable>
      )}

      <TextInput
        ref={ref}
        style={[
          styles.input,
          props.validationStatus && styles[props.validationStatus],
        ]}
        secureTextEntry={props.isSecure}
        value={props.value}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        onFocus={props.focus}
        onBlur={props.blur}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  Pressable: {
    width: 35,
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#838B86',
    paddingLeft: 16,
    paddingRight: 32,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 18,
  },
  success: {
    borderColor: '#13693B',
  },
  error: {
    borderColor: 'red',
  },
});

export default CustomInput;
