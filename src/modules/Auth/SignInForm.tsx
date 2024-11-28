import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SignInSchema} from './SignInSchema';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from '@react-navigation/elements';
import {ControllerInput} from './ControllerInput';
import CustomButton from '../CustomButton/CustomButton';

interface ISignInForm {
  email: string;
  password: string;
}
export const SignInForm: React.FC = () => {
  const [isPasswordSecure, setPasswordSecure] = useState(true);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ISignInForm>({
    resolver: yupResolver(SignInSchema),
    mode: 'all',
  });

  const onSubmit = (data: ISignInForm) => {
    console.log(data);
  };
  const changePasswordSecure = () => {
    setPasswordSecure(prev => !prev);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Controller<ISignInForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Email"
                value={value}
                onChange={text => onChange(text)}
                placeholder="Enter your e-mail"
                isSecure={false}
                validationStatus={
                  value?.length > 0
                    ? errors.email?.message
                      ? 'error'
                      : 'success'
                    : null
                }
                withError={errors.email?.message ? true : false}
                errorText={
                  errors.email && errors.email.message
                    ? 'Infalid email'
                    : 'Enter your e-mail'
                }
              />
            );
          }}
          name="email"
          rules={{required: true}}
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ISignInForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Password"
                value={value}
                onChange={text => onChange(text)}
                placeholder="Enter your password"
                isSecure={isPasswordSecure}
                validationStatus={
                  value?.length > 0
                    ? errors.password && errors.password.message
                      ? 'error'
                      : 'success'
                    : null
                }
                img={
                  isPasswordSecure
                    ? require('../../../assets/images/show.png')
                    : require('../../../assets/images/showing.png')
                }
                callbackForImg={changePasswordSecure}
                withError={errors.password?.message ? true : false}
                errorText={
                  errors.password && errors.password.message
                    ? 'Infalid password'
                    : 'Enter your password'
                }
              />
            );
          }}
          name="password"
          rules={{required: true}}
        />
      </View>
      <Pressable style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Pressable>
      <CustomButton
        callback={handleSubmit(onSubmit)}
        style={styles.submitButton}>
        <Text style={styles.submitText}>Sign In</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 23,
    paddingTop: 40,
    gap: 16,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  conteiner: {
    flexDirection: 'column',
    gap: 15,
    alignContent: 'flex-start',
  },
  submitButton: {
    marginHorizontal: 0,
    marginTop: 32,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  forgotPasswordButton: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#13693B',
  },
});
