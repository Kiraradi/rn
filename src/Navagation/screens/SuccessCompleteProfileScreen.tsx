import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CompleteProfileStackProps, Screens} from '../types';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {addUser} from '../../store/user/UserSlice';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import CustomButton from '../../modules/CustomButton/CustomButton';
import {SuccesAnimationLogo} from '../../modules/AnimationsComponents/SuccesAnimationLogo';

const BUTTON_ENG_POSITION = 40;
const LOGO_ENG_POSITION = 450;
export const SuccessCompleteProfileScreen: React.FC<
  CompleteProfileStackProps<Screens.SuccessCompleteProfile>
> = props => {
  const dispatch = useAppDispatch();
  const bottomPosition = useSharedValue<number>(-100);
  const logoPosition = useSharedValue<number>(-300);
  const titleOpasity = useSharedValue<number>(0);

  const handleClick = () => {
    const user = props.route.params.user;
    dispatch(addUser(user));
  };
  useEffect(() => {
    setTimeout(() => {
      bottomPosition.value = BUTTON_ENG_POSITION;
      logoPosition.value = LOGO_ENG_POSITION;
      titleOpasity.value = 1;
    }, 150);
  });
  const animatedStyles = useAnimatedStyle(() => ({
    bottom: withSpring(bottomPosition.value),
  }));

  const animatedLogoStyles = useAnimatedStyle(() => ({
    bottom: withSpring(logoPosition.value),
  }));
  const animatedTitleStyles = useAnimatedStyle(() => ({
    opacity: withDelay(1000, withSpring(titleOpasity.value)),
  }));
  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.animatedContainer, animatedLogoStyles]}>
        <SuccesAnimationLogo delay={1000} />
      </Animated.View>
      <Animated.Text style={[styles.title, animatedTitleStyles]}>
        Congratulations, you have completed your profile 100%!
      </Animated.Text>

      <Animated.View
        style={[
          styles.animationButton,
          styles.animatedContainer,
          animatedStyles,
        ]}>
        <CustomButton callback={handleClick}>
          <Text style={styles.text}>Continue</Text>
        </CustomButton>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  animatedContainer: {
    position: 'absolute',
  },
  animationButton: {
    width: '100%',
  },
  title: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '700',
    width: 300,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});
