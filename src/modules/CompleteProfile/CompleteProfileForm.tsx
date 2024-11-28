import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {CompleteProfileSchema} from './CompleteProfileSchema';
import {ControllerInput} from '../Auth/ControllerInput';
import CustomButton from '../CustomButton/CustomButton';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import UserUtils from '../../utils/UserUtils';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {useNavigation} from '@react-navigation/native';
import {Screens, SuccessCompleteProfileProps} from '../../Navagation/types';

interface ICompleteProfileForm {
  firstName: string;
  lastName: string;
  accountHandle: string;
  dateOfBirth: string;
}

export const CompleteProfileForm: React.FC = () => {
  const {
    control,
    formState: {errors},
    setValue,
    handleSubmit,
  } = useForm<ICompleteProfileForm>({
    resolver: yupResolver(CompleteProfileSchema),
    mode: 'all',
  });
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const ref = React.useRef<TextInput>(null);

  const user = useAppSelector(state => state.user.user);
  const navigate = useNavigation<SuccessCompleteProfileProps>();

  const onSubmit = (data: ICompleteProfileForm) => {
    if (!user) {
      return;
    }
    const newUser = UserUtils.updateUser(user, data);
    navigate.navigate(Screens.SuccessCompleteProfile, {user: newUser});
  };

  const installDate = (newDate: Date) => {
    ref.current?.blur();
    const day = dayjs(newDate).format('MM/DD/YYYY');
    setValue('dateOfBirth', day);
    setOpen(false);
    setDate(date);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Controller<ICompleteProfileForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="First Name"
                value={value}
                onChange={text => onChange(text)}
                placeholder="Enter your name"
                isSecure={false}
                validationStatus={
                  value?.length > 0
                    ? errors.firstName?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="firstName"
          rules={{required: true}}
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ICompleteProfileForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Last Name"
                value={value}
                onChange={text => onChange(text)}
                placeholder="Enter your last name"
                isSecure={false}
                validationStatus={
                  value?.length > 0
                    ? errors.lastName?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="lastName"
          rules={{required: true}}
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ICompleteProfileForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Account Handle"
                value={value}
                description="Your handle is used on Leaderboards and for announcements"
                onChange={text => onChange(text)}
                placeholder="Enter your account handle"
                isSecure={false}
                validationStatus={
                  value?.length > 0
                    ? errors.accountHandle?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="accountHandle"
          rules={{required: true}}
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ICompleteProfileForm>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <ControllerInput
                name="Date of Birth"
                ref={ref}
                value={value}
                description="You have to be 17 years or above to use the app"
                onChange={text => onChange(text)}
                placeholder="MM/DD/YYYY"
                focus={() => setOpen(true)}
                isSecure={false}
                validationStatus={
                  value?.length > 0
                    ? errors.accountHandle?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="dateOfBirth"
          rules={{required: true}}
        />
      </View>
      <CustomButton
        callback={handleSubmit(onSubmit)}
        style={styles.submitButton}>
        <Text style={styles.submitText}>Continue</Text>
      </CustomButton>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={installDate}
        onCancel={() => {
          ref.current?.blur();
          setOpen(false);
        }}
      />
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
});
