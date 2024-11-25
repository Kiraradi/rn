/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {onboardingDataType} from './onboardingData';
import {Pagination} from 'react-native-reanimated-carousel';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import CustomButton from '../CustomButton/CustomButton';
import AsyncStorageUtils from '../../utils/AsyncStorageUtils';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {setOnboardingStatus} from '../../store/onboarding/onboardingSlice';
interface CarouselItemProps {
  index: number;
  animationValue: SharedValue<number>;
  data: onboardingDataType;
  progress: SharedValue<number>;
  array: onboardingDataType[];
  onPressPagination: (index: number) => void;
}

export const CarouselItem: React.FC<CarouselItemProps> = props => {
  const dispatch = useAppDispatch();

  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      props.animationValue.value,
      [-1, 0, 1],
      ['#000000dd', 'transparent', '#000000dd'],
    );

    return {
      backgroundColor,
    };
  }, [props.animationValue]);
  const hendleClick = () => {
    if (
      props.index === props.array.length - 1 ||
      props.index > props.array.length - 1
    ) {
      heandleSkip();
      return;
    }
    props.onPressPagination(props.index + 1);
  };
  const heandleSkip = async () => {
    const status = await AsyncStorageUtils.setOnboardingStatus();
    dispatch(setOnboardingStatus(status));
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>{props.data.title}</Text>
          <Image source={props.data.image} />
        </View>
        <Pressable style={styles.skipButton} onPress={heandleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
        <View style={styles.novigation}>
          <Text style={styles.description}>{props.data.description}</Text>
          <Pagination.Basic
            progress={props.progress}
            data={props.array}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            containerStyle={styles.container}
            onPress={props.onPressPagination}
          />
          <CustomButton callback={hendleClick} text={props.data.buttonText} />
        </View>
      </View>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          maskStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f5ef',
    position: 'relative',
  },
  content: {
    height: '64%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e7efe5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 120,
    width: 300,
    textAlign: 'center',
  },
  novigation: {
    paddingTop: 24,
    paddingBottom: 44,
    paddingHorizontal: 25,
    gap: 30,
    height: '36%',
    justifyContent: 'flex-end',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
  },
  dot: {
    backgroundColor: '#c4d9cb',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  container: {
    gap: 15,
  },
  activeDot: {
    backgroundColor: '#13693B',
  },
  skipButton: {
    position: 'absolute',
    top: 70,
    right: 24,
  },
  skipButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#13693B',
    textTransform: 'uppercase',
  },
});
