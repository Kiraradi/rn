import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpSchema} from './SignUpSchema';
import {ControllerInput} from './ControllerInput';
import CustomButton from '../CustomButton/CustomButton';
import {PasswordVerificationList} from './PasswordVerificationList';
import UserUtils from '../../utils/UserUtils';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {addUser} from '../../store/user/UserSlice';

interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUpForm: React.FC = () => {
  const [isVerificationListShow, setIsVerificationListShow] = useState(false);
  const [isConfirmPasswordSecure, setConfirmPasswordSecure] = useState(true);
  const [isPasswordSecure, setPasswordSecure] = useState(true);
  const {
    watch,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ISignUpForm>({
    resolver: yupResolver(SignUpSchema),
    mode: 'all',
  });
  const dispatch = useAppDispatch();

  const passwordValue = watch('password') || '';
  const confirmPasswordValue = watch('confirmPassword') || '';

  useEffect(() => {
    setIsVerificationListShow(passwordValue.length > 0);
  }, [passwordValue]);

  const changePasswordSecure = () => {
    setPasswordSecure(prev => !prev);
  };

  const onSubmit = (data: ISignUpForm) => {
    const newUser = UserUtils.createUser(data.email);
    dispatch(addUser(newUser));
  };
  const changeConfirmPasswordSecure = () => {
    setConfirmPasswordSecure(prev => !prev);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Controller<ISignUpForm>
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
        <Controller<ISignUpForm>
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
              />
            );
          }}
          name="password"
          rules={{required: true}}
        />
      </View>

      <PasswordVerificationList
        password={passwordValue}
        isShow={isVerificationListShow}
        confirmPasswordValue={confirmPasswordValue}
      />
      <View style={styles.conteiner}>
        <Controller<ISignUpForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Confirm password"
                value={value}
                onChange={text => onChange(text)}
                placeholder="Enter your password"
                isSecure={isConfirmPasswordSecure}
                validationStatus={
                  value?.length > 0
                    ? errors.confirmPassword && errors.confirmPassword.message
                      ? 'error'
                      : 'success'
                    : null
                }
                img={
                  isConfirmPasswordSecure
                    ? require('../../../assets/images/show.png')
                    : require('../../../assets/images/showing.png')
                }
                callbackForImg={changeConfirmPasswordSecure}
              />
            );
          }}
          name="confirmPassword"
          rules={{required: true}}
        />
      </View>
      <CustomButton
        callback={handleSubmit(onSubmit)}
        style={styles.submitButton}>
        <Text style={styles.submitText}>Confirm</Text>
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
  submitButton: {
    marginHorizontal: 0,
    marginTop: 32,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});
